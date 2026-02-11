import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Train } from '../data/trains';

export interface Passenger {
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  seatNumber?: string;
  berthType?: string;
}

export interface Booking {
  id: string;
  pnr: string;
  userId: string;
  userName: string;
  trainId: string;
  trainName: string;
  source: string;
  destination: string;
  journeyDate: string;
  travelClass: string;
  passengers: Passenger[];
  totalFare: number;
  status: 'confirmed' | 'cancelled' | 'pending';
  bookedAt: string;
  paymentId?: string;
}

interface BookingContextType {
  bookings: Booking[];
  addBooking: (booking: Omit<Booking, 'id' | 'pnr' | 'bookedAt'>) => Booking;
  cancelBooking: (pnr: string) => void;
  getBookingByPnr: (pnr: string) => Booking | undefined;
  getUserBookings: (userId: string) => Booking[];
  getAllBookings: () => Booking[];
  currentBooking: {
    train: Train | null;
    journeyDate: string;
    travelClass: string;
    passengers: Passenger[];
  };
  setCurrentBooking: (booking: {
    train: Train | null;
    journeyDate: string;
    travelClass: string;
    passengers: Passenger[];
  }) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

const BOOKINGS_KEY = 'railbook_bookings';

const generatePNR = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let pnr = 'PNR';
  for (let i = 0; i < 7; i++) {
    pnr += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pnr;
};

const getSeatRecommendation = (passenger: Passenger): { seatNumber: string; berthType: string } => {
  const seatNum = Math.floor(Math.random() * 72) + 1;
  let berthType = 'Middle';
  
  // Smart seat allocation
  if (passenger.age > 60) {
    berthType = 'Lower';
  } else if (passenger.gender === 'female') {
    berthType = 'Window';
  } else if (passenger.age < 12) {
    berthType = 'Lower';
  } else {
    const berths = ['Lower', 'Middle', 'Upper', 'Side Lower', 'Side Upper'];
    berthType = berths[Math.floor(Math.random() * berths.length)];
  }
  
  return {
    seatNumber: `${String.fromCharCode(65 + Math.floor(seatNum / 10))}${seatNum % 10 || 10}`,
    berthType
  };
};

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [currentBooking, setCurrentBooking] = useState<{
    train: Train | null;
    journeyDate: string;
    travelClass: string;
    passengers: Passenger[];
  }>({
    train: null,
    journeyDate: '',
    travelClass: '',
    passengers: []
  });

  useEffect(() => {
    const stored = localStorage.getItem(BOOKINGS_KEY);
    if (stored) {
      setBookings(JSON.parse(stored));
    }
  }, []);

  const saveBookings = (newBookings: Booking[]) => {
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(newBookings));
    setBookings(newBookings);
  };

  const addBooking = (bookingData: Omit<Booking, 'id' | 'pnr' | 'bookedAt'>): Booking => {
    const passengersWithSeats = bookingData.passengers.map(p => ({
      ...p,
      ...getSeatRecommendation(p)
    }));
    
    const newBooking: Booking = {
      ...bookingData,
      passengers: passengersWithSeats,
      id: `BK${Date.now()}`,
      pnr: generatePNR(),
      bookedAt: new Date().toISOString()
    };
    
    const updated = [...bookings, newBooking];
    saveBookings(updated);
    return newBooking;
  };

  const cancelBooking = (pnr: string) => {
    const updated = bookings.map(b => 
      b.pnr === pnr ? { ...b, status: 'cancelled' as const } : b
    );
    saveBookings(updated);
  };

  const getBookingByPnr = (pnr: string) => {
    return bookings.find(b => b.pnr === pnr);
  };

  const getUserBookings = (userId: string) => {
    return bookings.filter(b => b.userId === userId);
  };

  const getAllBookings = () => bookings;

  return (
    <BookingContext.Provider value={{
      bookings,
      addBooking,
      cancelBooking,
      getBookingByPnr,
      getUserBookings,
      getAllBookings,
      currentBooking,
      setCurrentBooking
    }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
