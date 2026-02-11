import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Train, Calendar, MapPin, Eye, XCircle, Search, Ticket, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { useBooking } from '../context/BookingContext';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../components/ui/Toast';

export const MyBookings: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { getUserBookings, getBookingByPnr, cancelBooking } = useBooking();
  const { showToast } = useToast();

  const [pnrSearch, setPnrSearch] = useState('');
  const [showCancelModal, setShowCancelModal] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'confirmed' | 'cancelled'>('all');

  if (!user) {
    return (
      <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center p-4">
        <Card className="text-center py-12 px-8 max-w-md">
          <div className="w-16 h-16 bg-[#E5EDFF] rounded-full flex items-center justify-center mx-auto mb-4">
            <Ticket className="w-8 h-8 text-[#2563EB]" />
          </div>
          <h2 className="text-xl font-semibold text-[#0F172A] mb-2">Login Required</h2>
          <p className="text-[#475569] mb-6">Please login to view your bookings.</p>
          <div className="flex gap-3 justify-center">
            <Button variant="outline" onClick={() => navigate('/login')}>Login</Button>
            <Button onClick={() => navigate('/register')}>Sign Up</Button>
          </div>
        </Card>
      </div>
    );
  }

  const bookings = getUserBookings(user.uid);
  const filteredBookings = bookings.filter(b => filter === 'all' || b.status === filter);

  const handlePnrSearch = () => {
    if (!pnrSearch.trim()) {
      showToast('Please enter a PNR number', 'error');
      return;
    }
    const booking = getBookingByPnr(pnrSearch.trim().toUpperCase());
    if (booking) {
      navigate(`/ticket/${booking.pnr}`);
    } else {
      showToast('No booking found with this PNR', 'error');
    }
  };

  const handleCancelBooking = (pnr: string) => {
    cancelBooking(pnr);
    setShowCancelModal(null);
    showToast('Booking cancelled successfully. Refund will be processed within 3-5 days.', 'success');
  };

  const statusColors = {
    confirmed: 'bg-green-100 text-[#10B981]',
    cancelled: 'bg-red-100 text-[#EF4444]',
    pending: 'bg-yellow-100 text-yellow-600'
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[#0F172A]">My Bookings</h1>
            <p className="text-[#475569]">View and manage your train tickets</p>
          </div>
          
          <div className="flex gap-3">
            <div className="relative flex-1 md:w-64">
              <Input
                value={pnrSearch}
                onChange={(e) => setPnrSearch(e.target.value.toUpperCase())}
                placeholder="Search by PNR"
                className="pr-10"
                onKeyDown={(e) => e.key === 'Enter' && handlePnrSearch()}
              />
              <button
                onClick={handlePnrSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#2563EB]"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6">
          {(['all', 'confirmed', 'cancelled'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                filter === f
                  ? 'bg-[#2563EB] text-white'
                  : 'bg-white text-[#475569] hover:bg-[#F7F9FC] border border-[#E2E8F0]'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
              {f === 'all' && ` (${bookings.length})`}
            </button>
          ))}
        </div>

        {/* Bookings List */}
        {filteredBookings.length > 0 ? (
          <div className="space-y-4">
            {filteredBookings.sort((a, b) => new Date(b.bookedAt).getTime() - new Date(a.bookedAt).getTime()).map((booking) => (
              <Card key={booking.id} hover>
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Train Info */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${booking.status === 'cancelled' ? 'bg-red-100' : 'bg-[#E5EDFF]'}`}>
                        <Train className={`w-6 h-6 ${booking.status === 'cancelled' ? 'text-[#EF4444]' : 'text-[#2563EB]'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-semibold text-[#0F172A]">{booking.trainName}</h3>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[booking.status]}`}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </div>
                        <p className="text-sm text-[#475569]">PNR: <span className="font-mono font-medium">{booking.pnr}</span></p>
                        
                        <div className="flex items-center gap-4 mt-3 text-sm">
                          <div className="flex items-center gap-1 text-[#475569]">
                            <MapPin className="w-4 h-4" />
                            <span>{booking.source.split(' (')[0]} → {booking.destination.split(' (')[0]}</span>
                          </div>
                          <div className="flex items-center gap-1 text-[#475569]">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(booking.journeyDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Booking Details */}
                  <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                    <div className="text-center">
                      <p className="text-xs text-[#94A3B8]">Passengers</p>
                      <p className="font-semibold text-[#0F172A]">{booking.passengers.length}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-[#94A3B8]">Class</p>
                      <p className="font-semibold text-[#2563EB]">{booking.travelClass}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-[#94A3B8]">Amount</p>
                      <p className="font-semibold text-[#0F172A]">₹{booking.totalFare}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link to={`/ticket/${booking.pnr}`}>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </Link>
                    {booking.status === 'confirmed' && (
                      <Button 
                        variant="danger" 
                        size="sm"
                        onClick={() => setShowCancelModal(booking.pnr)}
                      >
                        <XCircle className="w-4 h-4 mr-1" />
                        Cancel
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center py-16">
            <div className="w-16 h-16 bg-[#F7F9FC] rounded-full flex items-center justify-center mx-auto mb-4">
              <Ticket className="w-8 h-8 text-[#94A3B8]" />
            </div>
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">No Bookings Found</h3>
            <p className="text-[#475569] max-w-md mx-auto mb-6">
              {filter === 'all' 
                ? "You haven't made any bookings yet. Start by searching for trains."
                : `No ${filter} bookings found.`}
            </p>
            <Button onClick={() => navigate('/search')}>
              <Search className="w-4 h-4 mr-2" />
              Search Trains
            </Button>
          </Card>
        )}

        {/* Cancel Modal */}
        {showCancelModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="max-w-md w-full animate-fade-in">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-[#EF4444]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0F172A] mb-2">Cancel Booking?</h3>
                <p className="text-[#475569] mb-2">
                  Are you sure you want to cancel this booking?
                </p>
                <p className="text-sm text-[#475569] mb-6">
                  PNR: <span className="font-mono font-medium">{showCancelModal}</span>
                </p>
                <div className="p-3 bg-yellow-50 rounded-xl mb-6">
                  <p className="text-sm text-yellow-700">
                    Cancellation charges may apply. Refund will be processed within 3-5 business days.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1" onClick={() => setShowCancelModal(null)}>
                    Keep Booking
                  </Button>
                  <Button variant="danger" className="flex-1" onClick={() => handleCancelBooking(showCancelModal)}>
                    Yes, Cancel
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};
