import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, Users, Train, Clock, ArrowRight, Filter } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { trainsData, searchTrains, getUniqueStations, Train as TrainType, getAllClasses, getClassFullName } from '../data/trains';
import { useAuth } from '../context/AuthContext';
import { useBooking } from '../context/BookingContext';
import { useToast } from '../components/ui/Toast';

export const SearchTrains: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { setCurrentBooking } = useBooking();
  const { showToast } = useToast();
  
  const [source, setSource] = useState(searchParams.get('from') || '');
  const [destination, setDestination] = useState(searchParams.get('to') || '');
  const [date, setDate] = useState(searchParams.get('date') || new Date().toISOString().split('T')[0]);
  const [travelClass, setTravelClass] = useState(searchParams.get('class') || '');
  const [results, setResults] = useState<TrainType[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [sortBy, setSortBy] = useState<'fare' | 'departure' | 'duration'>('fare');
  const [trainTypeFilter, setTrainTypeFilter] = useState<string>('all');

  const stations = getUniqueStations();
  const allClasses = getAllClasses();

  useEffect(() => {
    if (source || destination) {
      handleSearch();
    }
  }, []);

  const handleSearch = () => {
    if (!source && !destination) {
      if (travelClass) {
        setResults(trainsData.filter(t => t.classes[travelClass]));
      } else {
        setResults(trainsData);
      }
    } else {
      const found = searchTrains(source, destination);
      if (travelClass) {
        setResults(found.filter(t => t.classes[travelClass]));
      } else {
        setResults(found);
      }
    }
    setHasSearched(true);
  };

  const getClassPrice = (train: TrainType, cls: string): number => {
    if (cls && train.classes[cls]) {
      return train.classes[cls].price;
    }
    // Return lowest price if no class selected
    const prices = Object.values(train.classes).map(c => c.price);
    return Math.min(...prices);
  };

  const getTotalSeats = (train: TrainType): number => {
    return Object.values(train.classes).reduce((sum, c) => sum + c.seatsAvailable, 0);
  };

  const filteredResults = results.filter(train => 
    trainTypeFilter === 'all' || train.trainType === trainTypeFilter
  );

  const sortedResults = [...filteredResults].sort((a, b) => {
    if (sortBy === 'fare') {
      return getClassPrice(a, travelClass) - getClassPrice(b, travelClass);
    } else if (sortBy === 'departure') {
      return a.departureTime.localeCompare(b.departureTime);
    } else {
      return a.duration.localeCompare(b.duration);
    }
  });

  const handleBookNow = (train: TrainType, selectedClass?: string) => {
    if (!user) {
      showToast('Please login to book tickets', 'info');
      navigate('/login');
      return;
    }
    
    if (!date) {
      showToast('Please select a journey date', 'error');
      return;
    }

    const bookingClass = selectedClass || travelClass || Object.keys(train.classes)[0];

    setCurrentBooking({
      train,
      journeyDate: date,
      travelClass: bookingClass,
      passengers: []
    });
    navigate('/booking');
  };

  const trainTypes = [...new Set(trainsData.map(t => t.trainType))];

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      {/* Search Header */}
      <div className="bg-gradient-to-br from-[#1F3A8A] to-[#2563EB] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-white mb-6">Search Trains</h1>
          
          <Card className="shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#475569] mb-1.5">From</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                  <input
                    type="text"
                    list="stations-from"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    placeholder="Departure station"
                    className="w-full pl-10 pr-4 py-3 bg-[#F7F9FC] border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none"
                  />
                  <datalist id="stations-from">
                    {stations.map(s => <option key={s} value={s} />)}
                  </datalist>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#475569] mb-1.5">To</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                  <input
                    type="text"
                    list="stations-to"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Arrival station"
                    className="w-full pl-10 pr-4 py-3 bg-[#F7F9FC] border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none"
                  />
                  <datalist id="stations-to">
                    {stations.map(s => <option key={s} value={s} />)}
                  </datalist>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#475569] mb-1.5">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full pl-10 pr-4 py-3 bg-[#F7F9FC] border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#475569] mb-1.5">Class</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                  <select
                    value={travelClass}
                    onChange={(e) => setTravelClass(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-[#F7F9FC] border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none appearance-none"
                  >
                    <option value="">All Classes</option>
                    {allClasses.map(cls => (
                      <option key={cls} value={cls}>{getClassFullName(cls)} ({cls})</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-end">
                <Button onClick={handleSearch} className="w-full" size="lg">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {hasSearched && (
          <>
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-semibold text-[#0F172A]">
                  {sortedResults.length} Train{sortedResults.length !== 1 ? 's' : ''} Found
                </h2>
                {source && destination && (
                  <p className="text-[#475569] text-sm">
                    {source} → {destination} • {new Date(date).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'short' })}
                  </p>
                )}
              </div>
              
              <div className="flex items-center gap-3 flex-wrap">
                {/* Train Type Filter */}
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-[#475569]" />
                  <select
                    value={trainTypeFilter}
                    onChange={(e) => setTrainTypeFilter(e.target.value)}
                    className="px-3 py-1.5 text-sm bg-white border border-[#E2E8F0] rounded-lg"
                  >
                    <option value="all">All Types</option>
                    {trainTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex bg-white rounded-xl p-1 shadow-sm border border-[#E2E8F0]">
                  {(['fare', 'departure', 'duration'] as const).map((sort) => (
                    <button
                      key={sort}
                      onClick={() => setSortBy(sort)}
                      className={`px-3 py-1.5 text-sm rounded-lg capitalize transition-colors ${
                        sortBy === sort
                          ? 'bg-[#2563EB] text-white'
                          : 'text-[#475569] hover:bg-[#F7F9FC]'
                      }`}
                    >
                      {sort}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Train Cards */}
            {sortedResults.length > 0 ? (
              <div className="space-y-4">
                {sortedResults.map((train) => (
                  <Card key={train.trainNumber} hover className="overflow-hidden">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                      {/* Train Info */}
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-[#E5EDFF] rounded-xl">
                            <Train className="w-6 h-6 text-[#2563EB]" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              <h3 className="font-semibold text-[#0F172A]">{train.trainName}</h3>
                              <span className="px-2 py-0.5 bg-[#F7F9FC] text-[#475569] text-xs rounded-full">
                                #{train.trainNumber}
                              </span>
                              <span className={`px-2 py-0.5 text-xs rounded-full ${
                                train.trainType === 'Vande Bharat' ? 'bg-purple-100 text-purple-700' :
                                train.trainType === 'Rajdhani' ? 'bg-red-100 text-red-700' :
                                train.trainType === 'Shatabdi' ? 'bg-blue-100 text-blue-700' :
                                'bg-gray-100 text-gray-700'
                              }`}>
                                {train.trainType}
                              </span>
                            </div>
                            
                            <div className="flex items-center gap-6 mt-3">
                              <div className="text-center">
                                <p className="text-xl font-bold text-[#0F172A]">{train.departureTime}</p>
                                <p className="text-sm text-[#475569] truncate max-w-[120px]">{train.source.split(' (')[0]}</p>
                              </div>
                              
                              <div className="flex-1 flex items-center gap-2">
                                <div className="flex-1 border-t-2 border-dashed border-[#E2E8F0]" />
                                <div className="flex items-center gap-1 text-[#94A3B8]">
                                  <Clock className="w-4 h-4" />
                                  <span className="text-xs">{train.duration}</span>
                                </div>
                                <div className="flex-1 border-t-2 border-dashed border-[#E2E8F0]" />
                              </div>
                              
                              <div className="text-center">
                                <p className="text-xl font-bold text-[#0F172A]">{train.arrivalTime}</p>
                                <p className="text-sm text-[#475569] truncate max-w-[120px]">{train.destination.split(' (')[0]}</p>
                              </div>
                            </div>

                            {/* Running Days */}
                            <div className="flex gap-1 mt-3">
                              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                                <span
                                  key={day}
                                  className={`px-1.5 py-0.5 text-xs rounded ${
                                    train.runningDays.includes(day)
                                      ? 'bg-green-100 text-green-700'
                                      : 'bg-gray-100 text-gray-400'
                                  }`}
                                >
                                  {day.charAt(0)}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="hidden lg:block w-px h-24 bg-[#E2E8F0]" />

                      {/* Pricing & Booking */}
                      <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-4 lg:min-w-[200px]">
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-[#10B981] font-medium">
                            {getTotalSeats(train)} seats
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {Object.entries(train.classes).map(([cls, data]) => (
                            <button
                              key={cls}
                              onClick={() => handleBookNow(train, cls)}
                              className={`px-2 py-1 text-xs rounded-lg transition-all cursor-pointer hover:scale-105 ${
                                cls === travelClass
                                  ? 'bg-[#2563EB] text-white'
                                  : 'bg-[#F7F9FC] text-[#475569] hover:bg-[#E5EDFF] hover:text-[#2563EB]'
                              }`}
                            >
                              <span className="font-medium">{cls}</span>: ₹{data.price}
                              <span className="text-[10px] ml-1 opacity-75">({data.seatsAvailable})</span>
                            </button>
                          ))}
                        </div>

                        <div className="flex items-center gap-4 w-full sm:w-auto">
                          <div className="text-right">
                            <p className="text-2xl font-bold text-[#2563EB]">
                              ₹{getClassPrice(train, travelClass)}
                            </p>
                            <p className="text-xs text-[#94A3B8]">{travelClass ? `${travelClass} class` : 'Starting from'}</p>
                          </div>
                          <Button onClick={() => handleBookNow(train)}>
                            Book Now
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="text-center py-16">
                <div className="w-16 h-16 bg-[#F7F9FC] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Train className="w-8 h-8 text-[#94A3B8]" />
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">No Trains Found</h3>
                <p className="text-[#475569] max-w-md mx-auto">
                  We couldn't find any trains matching your search criteria. 
                  Try adjusting your search or selecting a different class.
                </p>
                <Button variant="outline" onClick={() => { setSource(''); setDestination(''); handleSearch(); }} className="mt-6">
                  Show All Trains
                </Button>
              </Card>
            )}
          </>
        )}

        {!hasSearched && (
          <Card className="text-center py-16">
            <div className="w-16 h-16 bg-[#E5EDFF] rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-[#2563EB]" />
            </div>
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Search for Trains</h3>
            <p className="text-[#475569] max-w-md mx-auto">
              Enter your source, destination, and travel date to find available trains.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
};
