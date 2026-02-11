import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Shield, Zap, Cpu, ArrowRight, Star, Train, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { trainsData, getUniqueStations, getAllClasses, getClassFullName } from '../data/trains';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [travelClass, setTravelClass] = useState('');

  const stations = getUniqueStations();
  const allClasses = getAllClasses();
  const featuredTrains = trainsData.slice(0, 4);

  const handleSearch = () => {
    navigate(`/search?from=${encodeURIComponent(source)}&to=${encodeURIComponent(destination)}&date=${date}&class=${travelClass}`);
  };

  const getLowestFare = (classes: Record<string, { price: number; seatsAvailable: number }>): number => {
    const prices = Object.values(classes).map(c => c.price);
    return Math.min(...prices);
  };

  const getTotalSeats = (classes: Record<string, { price: number; seatsAvailable: number }>): number => {
    return Object.values(classes).reduce((sum, c) => sum + c.seatsAvailable, 0);
  };

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast Booking',
      description: 'Book your tickets in under 60 seconds with our streamlined booking process.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure Payments',
      description: 'Your transactions are protected with bank-grade encryption and security.'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Smart Seat Selection',
      description: 'AI-powered seat recommendations based on age, gender, and preferences.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F3A8A] via-[#2563EB] to-[#3B82F6]" />
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full mb-6">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-white/90 text-sm font-medium">Trusted by 50,000+ travelers</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Book Train Tickets<br />
              <span className="text-blue-200">Smarter & Faster</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Experience seamless railway ticket booking with intelligent seat recommendations 
              and instant confirmations. Your journey starts here.
            </p>
          </div>

          {/* Search Form */}
          <Card className="max-w-5xl mx-auto shadow-2xl" glass>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-1">
                <label className="block text-sm font-medium text-[#475569] mb-1.5">From</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                  <input
                    type="text"
                    list="stations-from"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    placeholder="Departure station"
                    className="w-full pl-10 pr-4 py-3 bg-[#F7F9FC] border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
                  />
                  <datalist id="stations-from">
                    {stations.map(s => <option key={s} value={s} />)}
                  </datalist>
                </div>
              </div>

              <div className="lg:col-span-1">
                <label className="block text-sm font-medium text-[#475569] mb-1.5">To</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                  <input
                    type="text"
                    list="stations-to"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Arrival station"
                    className="w-full pl-10 pr-4 py-3 bg-[#F7F9FC] border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
                  />
                  <datalist id="stations-to">
                    {stations.map(s => <option key={s} value={s} />)}
                  </datalist>
                </div>
              </div>

              <div className="lg:col-span-1">
                <label className="block text-sm font-medium text-[#475569] mb-1.5">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full pl-10 pr-4 py-3 bg-[#F7F9FC] border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="lg:col-span-1">
                <label className="block text-sm font-medium text-[#475569] mb-1.5">Class</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                  <select
                    value={travelClass}
                    onChange={(e) => setTravelClass(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-[#F7F9FC] border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all appearance-none"
                  >
                    <option value="">All Classes</option>
                    {allClasses.map(cls => (
                      <option key={cls} value={cls}>{getClassFullName(cls)} ({cls})</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="lg:col-span-1 flex items-end">
                <Button onClick={handleSearch} className="w-full" size="lg">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            {[
              { value: `${trainsData.length}+`, label: 'Train Routes' },
              { value: '50K+', label: 'Happy Travelers' },
              { value: '99.9%', label: 'Uptime' },
              { value: '24/7', label: 'Support' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Trains */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A]">Popular Trains</h2>
              <p className="text-[#475569] mt-1">Most booked routes this month</p>
            </div>
            <Button variant="outline" onClick={() => navigate('/search')}>
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTrains.map((train) => (
              <Card key={train.trainNumber} hover className="group cursor-pointer" onClick={() => navigate('/search')}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#E5EDFF] rounded-xl group-hover:bg-[#2563EB] transition-colors">
                    <Train className="w-5 h-5 text-[#2563EB] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-[#0F172A] truncate">{train.trainName}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-[#94A3B8]">#{train.trainNumber}</p>
                      <span className={`px-1.5 py-0.5 text-xs rounded ${
                        train.trainType === 'Vande Bharat' ? 'bg-purple-100 text-purple-700' :
                        train.trainType === 'Rajdhani' ? 'bg-red-100 text-red-700' :
                        train.trainType === 'Shatabdi' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {train.trainType}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#475569] truncate max-w-[80px]">{train.source.split(' (')[0]}</span>
                    <ArrowRight className="w-4 h-4 text-[#94A3B8] flex-shrink-0 mx-1" />
                    <span className="text-[#475569] truncate max-w-[80px]">{train.destination.split(' (')[0]}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-[#475569]">
                    <span>{train.departureTime} - {train.arrivalTime}</span>
                    <span className="text-[#94A3B8]">{train.duration}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#10B981]">
                      <span className="text-sm font-medium">{getTotalSeats(train.classes)} seats</span>
                    </div>
                    <span className="text-lg font-bold text-[#2563EB]">
                      ₹{getLowestFare(train.classes)}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4">Why Choose GoRail?</h2>
            <p className="text-[#475569] max-w-2xl mx-auto">
              We combine cutting-edge technology with user-centric design to deliver 
              the best railway booking experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <Card key={idx} hover className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-[#2563EB] to-[#1F3A8A] rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-blue-200">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">{feature.title}</h3>
                <p className="text-[#475569] text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-[#1F3A8A] to-[#2563EB] text-white text-center p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Join thousands of travelers who trust GoRail for their railway bookings. 
              Sign up now and get exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/register')}
                className="bg-white text-[#2563EB] hover:bg-blue-50"
                size="lg"
              >
                Get Started Free
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/search')}
                className="border-white text-white hover:bg-white/10"
                size="lg"
              >
                Search Trains
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};
