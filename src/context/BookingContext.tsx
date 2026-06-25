import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  collection,
  addDoc,
  updateDoc,
  query,
  where,
  getDocs,
  doc,
  onSnapshot,
  Unsubscribe,
} from 'firebase/firestore';
import { db } from '../firebase/config';
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
  loading: boolean;
  addBooking: (booking: Omit<Booking, 'id' | 'pnr' | 'bookedAt'>) => Promise<Booking>;
  cancelBooking: (pnr: string) => Promise<void>;
  getBookingByPnr: (pnr: string) => Booking | undefined;
  getUserBookings: (userId: string) => Booking[];
  getAllBookings: () => Booking[];
  fetchAllBookings: () => Promise<Booking[]>;
  loadUserBookings: (userId: string) => void;
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

// ── Helpers ──────────────────────────────────────────────────────────────────

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
    berthType,
  };
};

// ── Provider ──────────────────────────────────────────────────────────────────

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentBooking, setCurrentBooking] = useState<{
    train: Train | null;
    journeyDate: string;
    travelClass: string;
    passengers: Passenger[];
  }>({
    train: null,
    journeyDate: '',
    travelClass: '',
    passengers: [],
  });

  // Real-time listener ref so we can unsubscribe when userId changes
  const unsubscribeRef = React.useRef<Unsubscribe | null>(null);

  // Subscribe to a user's bookings in real-time from Firestore
  const loadUserBookings = (userId: string) => {
    // Unsubscribe previous listener if any
    if (unsubscribeRef.current) {
      unsubscribeRef.current();
    }

    const q = query(collection(db, 'bookings'), where('userId', '==', userId));
    const unsub = onSnapshot(q, (snapshot) => {
      const fetched: Booking[] = snapshot.docs.map((d) => ({
        id: d.id,
        ...(d.data() as Omit<Booking, 'id'>),
      }));
      setBookings(fetched);
    });

    unsubscribeRef.current = unsub;
  };

  // Cleanup listener on unmount
  useEffect(() => {
    return () => {
      if (unsubscribeRef.current) unsubscribeRef.current();
    };
  }, []);

  // Add a new booking to Firestore
  const addBooking = async (bookingData: Omit<Booking, 'id' | 'pnr' | 'bookedAt'>): Promise<Booking> => {
    const passengersWithSeats = bookingData.passengers.map((p) => ({
      ...p,
      ...getSeatRecommendation(p),
    }));

    const newBooking: Omit<Booking, 'id'> = {
      ...bookingData,
      passengers: passengersWithSeats,
      pnr: generatePNR(),
      bookedAt: new Date().toISOString(),
    };

    const docRef = await addDoc(collection(db, 'bookings'), newBooking);

    const savedBooking: Booking = { id: docRef.id, ...newBooking };

    // Optimistically update local state (real-time listener will also fire)
    setBookings((prev) => [...prev, savedBooking]);

    return savedBooking;
  };

  // Cancel a booking by PNR — updates Firestore doc
  const cancelBooking = async (pnr: string) => {
    // Find the booking doc in local state to get its Firestore id
    const booking = bookings.find((b) => b.pnr === pnr);
    if (!booking) return;

    const bookingRef = doc(db, 'bookings', booking.id);
    await updateDoc(bookingRef, { status: 'cancelled' });

    // Optimistic local update (real-time listener will also fire)
    setBookings((prev) =>
      prev.map((b) => (b.pnr === pnr ? { ...b, status: 'cancelled' } : b))
    );
  };

  // Fetch ALL bookings from Firestore (admin use)
  const fetchAllBookings = async (): Promise<Booking[]> => {
    setLoading(true);
    try {
      const snapshot = await getDocs(collection(db, 'bookings'));
      const all: Booking[] = snapshot.docs.map((d) => ({
        id: d.id,
        ...(d.data() as Omit<Booking, 'id'>),
      }));
      setBookings(all);
      return all;
    } finally {
      setLoading(false);
    }
  };

  // Synchronous helpers that work on already-loaded bookings in state
  const getBookingByPnr = (pnr: string) => bookings.find((b) => b.pnr === pnr);

  const getUserBookings = (userId: string) => bookings.filter((b) => b.userId === userId);

  const getAllBookings = () => bookings;

  return (
    <BookingContext.Provider
      value={{
        bookings,
        loading,
        addBooking,
        cancelBooking,
        getBookingByPnr,
        getUserBookings,
        getAllBookings,
        fetchAllBookings,
        loadUserBookings,
        currentBooking,
        setCurrentBooking,
      }}
    >
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
