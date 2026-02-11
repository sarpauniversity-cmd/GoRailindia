import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Train, Calendar, User, Clock, Download, Printer, CheckCircle, ArrowLeft, QrCode, Share2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { useBooking } from '../context/BookingContext';

export const Ticket: React.FC = () => {
  const { pnr } = useParams();
  const navigate = useNavigate();
  const { getBookingByPnr } = useBooking();

  const booking = getBookingByPnr(pnr || '');

  if (!booking) {
    return (
      <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center p-4">
        <Card className="text-center py-12 px-8 max-w-md">
          <div className="w-16 h-16 bg-[#F7F9FC] rounded-full flex items-center justify-center mx-auto mb-4">
            <Train className="w-8 h-8 text-[#94A3B8]" />
          </div>
          <h2 className="text-xl font-semibold text-[#0F172A] mb-2">Ticket Not Found</h2>
          <p className="text-[#475569] mb-6">We couldn't find a ticket with PNR: {pnr}</p>
          <Button onClick={() => navigate('/bookings')}>View My Bookings</Button>
        </Card>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  const statusColors = {
    confirmed: 'bg-green-100 text-[#10B981]',
    cancelled: 'bg-red-100 text-[#EF4444]',
    pending: 'bg-yellow-100 text-yellow-600'
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/bookings" className="inline-flex items-center gap-2 text-[#475569] hover:text-[#2563EB] mb-6 no-print">
          <ArrowLeft className="w-4 h-4" />
          Back to My Bookings
        </Link>

        {/* Success Banner */}
        {booking.status === 'confirmed' && (
          <Card className="bg-gradient-to-r from-[#10B981] to-[#059669] text-white mb-6 no-print">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Booking Confirmed!</h2>
                <p className="text-green-100">Your ticket has been successfully booked.</p>
              </div>
            </div>
          </Card>
        )}

        {/* Ticket Card */}
        <Card className="overflow-hidden print-ticket">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1F3A8A] to-[#2563EB] text-white p-6 -m-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-xl">
                  <Train className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">RailBook</h1>
                  <p className="text-blue-200 text-sm">E-Ticket</p>
                </div>
              </div>
              <div className={`px-4 py-1.5 rounded-full text-sm font-medium ${statusColors[booking.status]}`}>
                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
              </div>
            </div>
          </div>

          {/* PNR Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-[#F7F9FC] rounded-xl mb-6">
            <div>
              <p className="text-sm text-[#475569]">PNR Number</p>
              <p className="text-2xl font-bold text-[#0F172A] tracking-wider">{booking.pnr}</p>
            </div>
            <div className="w-20 h-20 bg-white p-2 rounded-xl border border-[#E2E8F0]">
              <QrCode className="w-full h-full text-[#0F172A]" />
            </div>
          </div>

          {/* Train Details */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#E5EDFF] rounded-xl">
                <Train className="w-5 h-5 text-[#2563EB]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0F172A]">{booking.trainName}</h3>
                <p className="text-sm text-[#475569]">#{booking.trainId}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-center flex-1">
                <p className="text-lg font-bold text-[#0F172A]">{booking.source.split(' (')[0]}</p>
                <p className="text-xs text-[#94A3B8]">{booking.source.match(/\(([^)]+)\)/)?.[1]}</p>
              </div>
              
              <div className="flex items-center gap-2 px-4">
                <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <div className="w-16 border-t-2 border-dashed border-[#E2E8F0]" />
                <Train className="w-4 h-4 text-[#2563EB]" />
                <div className="w-16 border-t-2 border-dashed border-[#E2E8F0]" />
                <div className="w-2 h-2 rounded-full bg-[#10B981]" />
              </div>
              
              <div className="text-center flex-1">
                <p className="text-lg font-bold text-[#0F172A]">{booking.destination.split(' (')[0]}</p>
                <p className="text-xs text-[#94A3B8]">{booking.destination.match(/\(([^)]+)\)/)?.[1]}</p>
              </div>
            </div>
          </div>

          {/* Journey Info */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#F7F9FC] rounded-xl mb-6">
            <div>
              <div className="flex items-center gap-1 text-[#94A3B8] mb-1">
                <Calendar className="w-4 h-4" />
                <span className="text-xs">Date</span>
              </div>
              <p className="font-semibold text-[#0F172A]">
                {new Date(booking.journeyDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#94A3B8] mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-xs">Booked On</span>
              </div>
              <p className="font-semibold text-[#0F172A]">
                {new Date(booking.bookedAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#94A3B8] mb-1">
                <User className="w-4 h-4" />
                <span className="text-xs">Passengers</span>
              </div>
              <p className="font-semibold text-[#0F172A]">{booking.passengers.length}</p>
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#94A3B8] mb-1">
                <span className="text-xs">Class</span>
              </div>
              <p className="font-semibold text-[#2563EB]">{booking.travelClass}</p>
            </div>
          </div>

          {/* Passengers */}
          <div className="mb-6">
            <h4 className="font-semibold text-[#0F172A] mb-3">Passenger Details</h4>
            <div className="space-y-2">
              {booking.passengers.map((passenger, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-[#F7F9FC] rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#E5EDFF] rounded-full flex items-center justify-center text-[#2563EB] font-medium text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="font-medium text-[#0F172A]">{passenger.name}</p>
                      <p className="text-xs text-[#475569]">
                        {passenger.age} yrs, {passenger.gender.charAt(0).toUpperCase() + passenger.gender.slice(1)}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-[#0F172A]">{passenger.seatNumber}</p>
                    <p className="text-xs text-[#2563EB]">{passenger.berthType}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fare Details */}
          <div className="p-4 bg-gradient-to-r from-[#E5EDFF] to-[#F7F9FC] rounded-xl">
            <div className="flex items-center justify-between">
              <span className="text-[#475569]">Total Fare Paid</span>
              <span className="text-2xl font-bold text-[#2563EB]">₹{booking.totalFare}</span>
            </div>
            {booking.paymentId && (
              <p className="text-xs text-[#94A3B8] mt-1">Payment ID: {booking.paymentId}</p>
            )}
          </div>

          {/* Dashed Line */}
          <div className="border-t-2 border-dashed border-[#E2E8F0] my-6 relative">
            <div className="absolute -left-10 -top-3 w-6 h-6 bg-[#F7F9FC] rounded-full" />
            <div className="absolute -right-10 -top-3 w-6 h-6 bg-[#F7F9FC] rounded-full" />
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-[#475569]">
            <p>Please carry a valid ID proof during your journey</p>
            <p className="text-xs text-[#94A3B8] mt-1">This is an electronically generated ticket</p>
          </div>
        </Card>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6 no-print">
          <Button variant="outline" onClick={handlePrint} className="flex-1">
            <Printer className="w-4 h-4 mr-2" />
            Print Ticket
          </Button>
          <Button variant="outline" className="flex-1">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
          <Button variant="outline" className="flex-1">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};
