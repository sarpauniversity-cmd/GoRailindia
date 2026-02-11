import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Shield, Calendar, Ticket, Edit2, Save, LogOut } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { useAuth } from '../context/AuthContext';
import { useBooking } from '../context/BookingContext';
import { useToast } from '../components/ui/Toast';

export const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { getUserBookings } = useBooking();
  const { showToast } = useToast();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || '');

  if (!user) {
    navigate('/login');
    return null;
  }

  const bookings = getUserBookings(user.uid);
  const confirmedBookings = bookings.filter(b => b.status === 'confirmed');

  const handleSave = () => {
    showToast('Profile updated successfully!', 'success');
    setIsEditing(false);
  };

  const handleLogout = async () => {
    await logout();
    showToast('Logged out successfully', 'success');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-[#0F172A] mb-8">My Profile</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="md:col-span-2">
            <Card>
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#2563EB] to-[#1F3A8A] rounded-2xl flex items-center justify-center text-white text-3xl font-bold">
                    {user.displayName.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-[#0F172A]">{user.displayName}</h2>
                    <p className="text-[#475569]">{user.email}</p>
                    {user.isAdmin && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-medium rounded-full mt-1">
                        <Shield className="w-3 h-3" />
                        Admin
                      </span>
                    )}
                  </div>
                </div>
                <Button 
                  variant={isEditing ? 'primary' : 'outline'} 
                  size="sm"
                  onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                >
                  {isEditing ? (
                    <>
                      <Save className="w-4 h-4 mr-1" />
                      Save
                    </>
                  ) : (
                    <>
                      <Edit2 className="w-4 h-4 mr-1" />
                      Edit
                    </>
                  )}
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <Input
                    label="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={!isEditing}
                    icon={<User className="w-5 h-5" />}
                  />
                </div>
                <div>
                  <Input
                    label="Email Address"
                    value={user.email}
                    disabled
                    icon={<Mail className="w-5 h-5" />}
                  />
                </div>
                <div>
                  <Input
                    label="User ID"
                    value={user.uid}
                    disabled
                    icon={<Shield className="w-5 h-5" />}
                  />
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
                <Button variant="danger" onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            </Card>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#E5EDFF] rounded-xl">
                  <Ticket className="w-5 h-5 text-[#2563EB]" />
                </div>
                <h3 className="font-semibold text-[#0F172A]">Booking Stats</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[#475569]">Total Bookings</span>
                  <span className="font-semibold text-[#0F172A]">{bookings.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#475569]">Confirmed</span>
                  <span className="font-semibold text-[#10B981]">{confirmedBookings.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#475569]">Cancelled</span>
                  <span className="font-semibold text-[#EF4444]">{bookings.length - confirmedBookings.length}</span>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#E5EDFF] rounded-xl">
                  <Calendar className="w-5 h-5 text-[#2563EB]" />
                </div>
                <h3 className="font-semibold text-[#0F172A]">Account Info</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[#475569]">Member Since</span>
                  <span className="font-semibold text-[#0F172A]">2024</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#475569]">Status</span>
                  <span className="px-2 py-0.5 bg-green-100 text-[#10B981] text-xs font-medium rounded-full">Active</span>
                </div>
              </div>
            </Card>

            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => navigate('/bookings')}
            >
              View My Bookings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
