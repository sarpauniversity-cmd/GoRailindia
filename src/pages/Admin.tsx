import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Train, Users, Ticket, Settings, Search, Bell, 
  ArrowRight, Plus, Edit2, Trash2, Eye,
  BarChart3, Calendar, DollarSign, ChevronDown, LogOut
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, StatCard } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { useAuth } from '../context/AuthContext';
import { useBooking } from '../context/BookingContext';
import { trainsData } from '../data/trains';
import { useToast } from '../components/ui/Toast';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

type AdminTab = 'dashboard' | 'bookings' | 'trains' | 'users' | 'analytics' | 'settings';

export const Admin: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { getAllBookings } = useBooking();
  const { showToast } = useToast();

  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  if (!user?.isAdmin) {
    return (
      <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center p-4">
        <Card className="text-center py-12 px-8 max-w-md">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Settings className="w-8 h-8 text-[#EF4444]" />
          </div>
          <h2 className="text-xl font-semibold text-[#0F172A] mb-2">Access Denied</h2>
          <p className="text-[#475569] mb-6">You don't have permission to access the admin dashboard.</p>
          <Button onClick={() => navigate('/')}>Go to Home</Button>
        </Card>
      </div>
    );
  }

  const allBookings = getAllBookings();
  const confirmedBookings = allBookings.filter(b => b.status === 'confirmed');
  const totalRevenue = allBookings.reduce((sum, b) => sum + (b.status === 'confirmed' ? b.totalFare : 0), 0);

  const getTotalSeats = (classes: Record<string, { price: number; seatsAvailable: number }>): number => {
    return Object.values(classes).reduce((sum, c) => sum + c.seatsAvailable, 0);
  };

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'bookings', label: 'Bookings', icon: Ticket },
    { id: 'trains', label: 'Trains', icon: Train },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  // Mock chart data
  const chartData = [
    { name: 'Mon', bookings: 45, revenue: 12500 },
    { name: 'Tue', bookings: 52, revenue: 14200 },
    { name: 'Wed', bookings: 38, revenue: 9800 },
    { name: 'Thu', bookings: 65, revenue: 18400 },
    { name: 'Fri', bookings: 78, revenue: 22100 },
    { name: 'Sat', bookings: 92, revenue: 28500 },
    { name: 'Sun', bookings: 85, revenue: 24800 }
  ];

  const dayData = [
    { day: 'Mon', value: 45 },
    { day: 'Tue', value: 52 },
    { day: 'Wed', value: 38 },
    { day: 'Thu', value: 65 },
    { day: 'Fri', value: 78 },
    { day: 'Sat', value: 92 },
    { day: 'Sun', value: 85 }
  ];

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Searches"
          value="12,847"
          change="12.5% from last month"
          changeType="positive"
          icon={<Search className="w-5 h-5" />}
        />
        <StatCard
          title="Active Users"
          value="3,241"
          change="8.2% from last month"
          changeType="positive"
          icon={<Users className="w-5 h-5" />}
        />
        <StatCard
          title="Ticket Bookings"
          value={confirmedBookings.length.toString()}
          change="15.3% from last month"
          changeType="positive"
          icon={<Ticket className="w-5 h-5" />}
        />
        <StatCard
          title="Total Revenue"
          value={`₹${totalRevenue.toLocaleString()}`}
          change="23.1% from last month"
          changeType="positive"
          icon={<DollarSign className="w-5 h-5" />}
        />
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Line Chart */}
        <Card className="lg:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-[#0F172A]">Booking Trends</h3>
              <p className="text-sm text-[#475569]">Weekly booking performance</p>
            </div>
            <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-[#475569] bg-[#F7F9FC] rounded-lg hover:bg-[#E2E8F0]">
              Last 7 days
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <defs>
                  <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563EB" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="name" tick={{ fill: '#475569', fontSize: 12 }} />
                <YAxis tick={{ fill: '#475569', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #E2E8F0',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="bookings" 
                  stroke="#2563EB" 
                  strokeWidth={3}
                  fill="url(#colorBookings)"
                  dot={{ fill: '#2563EB', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Bar Chart */}
        <Card className="lg:col-span-2">
          <div className="mb-6">
            <h3 className="font-semibold text-[#0F172A]">Most Active Days</h3>
            <p className="text-sm text-[#475569]">Bookings by day of week</p>
          </div>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dayData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="day" tick={{ fill: '#475569', fontSize: 12 }} />
                <YAxis tick={{ fill: '#475569', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #E2E8F0',
                    borderRadius: '12px'
                  }}
                />
                <Bar 
                  dataKey="value" 
                  fill="#2563EB" 
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Tables Row */}
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Top Trains Table */}
        <Card className="lg:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-[#0F172A]">Top Performing Trains</h3>
            <Button variant="ghost" size="sm" onClick={() => setActiveTab('trains')}>
              View All
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-[#475569]">
                  <th className="pb-4 font-medium">Train No.</th>
                  <th className="pb-4 font-medium">Train Name</th>
                  <th className="pb-4 font-medium text-right">Seats</th>
                  <th className="pb-4 font-medium text-right">Revenue</th>
                  <th className="pb-4 font-medium text-right">Type</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {trainsData.slice(0, 5).map((train) => (
                  <tr key={train.trainNumber} className="border-t border-[#E2E8F0] hover:bg-[#F7F9FC]">
                    <td className="py-3 font-mono text-[#475569]">{train.trainNumber}</td>
                    <td className="py-3 text-[#0F172A] font-medium">{train.trainName}</td>
                    <td className="py-3 text-right text-[#0F172A]">{getTotalSeats(train.classes)}</td>
                    <td className="py-3 text-right text-[#0F172A]">₹{(Math.random() * 50000 + 10000).toFixed(0)}</td>
                    <td className="py-3 text-right">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                        train.trainType === 'Vande Bharat' ? 'bg-purple-100 text-purple-700' :
                        train.trainType === 'Rajdhani' ? 'bg-red-100 text-red-700' :
                        train.trainType === 'Shatabdi' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {train.trainType}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Performance Gauge */}
        <Card className="lg:col-span-2">
          <h3 className="font-semibold text-[#0F172A] mb-6">Seat Utilization</h3>
          <div className="flex flex-col items-center justify-center h-[200px]">
            <div className="relative w-40 h-40">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="12"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="12"
                  strokeDasharray={`${68 * 4.4} ${100 * 4.4}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-[#0F172A]">68%</span>
                <span className="text-sm text-[#475569]">Utilized</span>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#2563EB]" />
                <span className="text-sm text-[#475569]">Booked</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#E2E8F0]" />
                <span className="text-sm text-[#475569]">Available</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderBookings = () => (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-[#0F172A]">All Bookings</h3>
        <div className="relative w-64">
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by PNR..."
            icon={<Search className="w-5 h-5" />}
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-[#475569]">
              <th className="pb-4 font-medium">PNR</th>
              <th className="pb-4 font-medium">User</th>
              <th className="pb-4 font-medium">Train</th>
              <th className="pb-4 font-medium">Date</th>
              <th className="pb-4 font-medium">Amount</th>
              <th className="pb-4 font-medium">Status</th>
              <th className="pb-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {allBookings
              .filter(b => b.pnr.includes(searchQuery.toUpperCase()))
              .map((booking) => (
              <tr key={booking.id} className="border-t border-[#E2E8F0] hover:bg-[#F7F9FC]">
                <td className="py-3 font-mono font-medium text-[#0F172A]">{booking.pnr}</td>
                <td className="py-3 text-[#475569]">{booking.userName}</td>
                <td className="py-3 text-[#0F172A]">{booking.trainName}</td>
                <td className="py-3 text-[#475569]">
                  {new Date(booking.journeyDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                </td>
                <td className="py-3 text-[#0F172A]">₹{booking.totalFare}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    booking.status === 'confirmed' ? 'bg-green-100 text-[#10B981]' : 'bg-red-100 text-[#EF4444]'
                  }`}>
                    {booking.status}
                  </span>
                </td>
                <td className="py-3 text-right">
                  <Button variant="ghost" size="sm" onClick={() => navigate(`/ticket/${booking.pnr}`)}>
                    <Eye className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {allBookings.length === 0 && (
          <div className="text-center py-12 text-[#475569]">No bookings found</div>
        )}
      </div>
    </Card>
  );

  const renderTrains = () => (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-[#0F172A]">Manage Trains ({trainsData.length} trains)</h3>
        <Button onClick={() => showToast('Add train feature coming soon!', 'info')}>
          <Plus className="w-4 h-4 mr-2" />
          Add Train
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-[#475569]">
              <th className="pb-4 font-medium">Train No.</th>
              <th className="pb-4 font-medium">Name</th>
              <th className="pb-4 font-medium">Type</th>
              <th className="pb-4 font-medium">Route</th>
              <th className="pb-4 font-medium">Duration</th>
              <th className="pb-4 font-medium">Classes</th>
              <th className="pb-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {trainsData.slice(0, 20).map((train) => (
              <tr key={train.trainNumber} className="border-t border-[#E2E8F0] hover:bg-[#F7F9FC]">
                <td className="py-3 font-mono text-[#475569]">{train.trainNumber}</td>
                <td className="py-3 text-[#0F172A] font-medium">{train.trainName}</td>
                <td className="py-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    train.trainType === 'Vande Bharat' ? 'bg-purple-100 text-purple-700' :
                    train.trainType === 'Rajdhani' ? 'bg-red-100 text-red-700' :
                    train.trainType === 'Shatabdi' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {train.trainType}
                  </span>
                </td>
                <td className="py-3 text-[#475569] text-xs">
                  {train.source.split(' (')[0]} → {train.destination.split(' (')[0]}
                </td>
                <td className="py-3 text-[#0F172A]">{train.duration}</td>
                <td className="py-3">
                  <div className="flex gap-1 flex-wrap">
                    {Object.keys(train.classes).map(cls => (
                      <span key={cls} className="px-2 py-0.5 bg-[#E5EDFF] text-[#2563EB] text-xs rounded">{cls}</span>
                    ))}
                  </div>
                </td>
                <td className="py-3 text-right">
                  <div className="flex justify-end gap-1">
                    <Button variant="ghost" size="sm" onClick={() => showToast('Edit feature coming soon!', 'info')}>
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => showToast('Delete feature coming soon!', 'info')}>
                      <Trash2 className="w-4 h-4 text-[#EF4444]" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );

  const renderUsers = () => (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-[#0F172A]">Registered Users</h3>
        <p className="text-sm text-[#475569]">User data is stored in localStorage (Demo)</p>
      </div>
      <div className="text-center py-12">
        <Users className="w-12 h-12 text-[#94A3B8] mx-auto mb-4" />
        <p className="text-[#475569]">User management will be available with Firebase integration</p>
      </div>
    </Card>
  );

  const renderAnalytics = () => (
    <div className="grid gap-6">
      <Card>
        <h3 className="font-semibold text-[#0F172A] mb-6">Revenue Analytics</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="name" tick={{ fill: '#475569', fontSize: 12 }} />
              <YAxis tick={{ fill: '#475569', fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );

  const renderSettings = () => (
    <Card>
      <h3 className="font-semibold text-[#0F172A] mb-6">Admin Settings</h3>
      <div className="space-y-4">
        <div className="p-4 bg-[#F7F9FC] rounded-xl">
          <h4 className="font-medium text-[#0F172A] mb-2">Firebase Configuration</h4>
          <p className="text-sm text-[#475569]">Configure your Firebase project settings in src/config/firebase.ts</p>
        </div>
        <div className="p-4 bg-[#F7F9FC] rounded-xl">
          <h4 className="font-medium text-[#0F172A] mb-2">Demo Mode</h4>
          <p className="text-sm text-[#475569]">Currently running in demo mode with localStorage. Connect Firebase for production use.</p>
        </div>
      </div>
    </Card>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return renderDashboard();
      case 'bookings': return renderBookings();
      case 'trains': return renderTrains();
      case 'users': return renderUsers();
      case 'analytics': return renderAnalytics();
      case 'settings': return renderSettings();
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] flex">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r border-[#E2E8F0] fixed h-full flex flex-col">
        <div className="p-6 flex-1">
          <div className="flex items-center gap-2 mb-8">
            <div className="p-2 bg-gradient-to-br from-[#2563EB] to-[#1F3A8A] rounded-xl">
              <Train className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-[#0F172A]">GoRail Admin</span>
          </div>

          <nav className="space-y-1">
            {sidebarItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as AdminTab)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeTab === item.id
                    ? 'bg-[#E5EDFF] text-[#2563EB] border-l-4 border-[#2563EB]'
                    : 'text-[#475569] hover:bg-[#F7F9FC]'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6 border-t border-[#E2E8F0]">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[#EF4444] hover:bg-red-50 transition-all"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-60">
        {/* Top Bar */}
        <header className="h-[72px] bg-white border-b border-[#E2E8F0] flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="relative w-[380px]">
            <Input
              placeholder="Search anything..."
              className="bg-[#F7F9FC]"
              icon={<Search className="w-5 h-5" />}
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-[#475569] hover:bg-[#F7F9FC] rounded-xl relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#EF4444] rounded-full" />
            </button>
            <button className="p-2 text-[#475569] hover:bg-[#F7F9FC] rounded-xl">
              <Settings className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-[#E2E8F0]">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#1F3A8A] rounded-full flex items-center justify-center text-white font-semibold">
                {user.displayName.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-[#0F172A] text-sm">{user.displayName}</p>
                <p className="text-xs text-[#475569]">Administrator</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-[28px] font-bold text-[#0F172A] capitalize">{activeTab}</h1>
              <p className="text-[#475569]">
                {activeTab === 'dashboard' && 'Overview of your railway booking system'}
                {activeTab === 'bookings' && 'Manage all ticket bookings'}
                {activeTab === 'trains' && 'Add, edit, and manage trains'}
                {activeTab === 'users' && 'View registered users'}
                {activeTab === 'analytics' && 'Detailed analytics and reports'}
                {activeTab === 'settings' && 'System configuration'}
              </p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 text-sm text-[#475569] bg-white rounded-xl border border-[#E2E8F0] hover:bg-[#F7F9FC]">
              <Calendar className="w-4 h-4" />
              Last 30 days
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {renderContent()}
        </div>
      </main>
    </div>
  );
};
