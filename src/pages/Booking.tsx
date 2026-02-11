import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Train, User, Calendar, MapPin, ArrowRight, Plus, Trash2, Info, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input, Select } from '../components/ui/Input';
import { useBooking, Passenger } from '../context/BookingContext';
import { useToast } from '../components/ui/Toast';

export const Booking: React.FC = () => {
  const navigate = useNavigate();
  const { currentBooking, setCurrentBooking } = useBooking();
  const { showToast } = useToast();

  const [passengers, setPassengers] = useState<Passenger[]>([
    { name: '', age: 0, gender: 'male' }
  ]);

  const { train, journeyDate, travelClass } = currentBooking;

  if (!train || !journeyDate) {
    return (
      <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center p-4">
        <Card className="text-center py-12 px-8 max-w-md">
          <div className="w-16 h-16 bg-[#F7F9FC] rounded-full flex items-center justify-center mx-auto mb-4">
            <Train className="w-8 h-8 text-[#94A3B8]" />
          </div>
          <h2 className="text-xl font-semibold text-[#0F172A] mb-2">No Train Selected</h2>
          <p className="text-[#475569] mb-6">Please search and select a train to book tickets.</p>
          <Button onClick={() => navigate('/search')}>Search Trains</Button>
        </Card>
      </div>
    );
  }

  const fare = train.classes[travelClass]?.price || Object.values(train.classes)[0].price;

  const addPassenger = () => {
    if (passengers.length >= 6) {
      showToast('Maximum 6 passengers allowed per booking', 'error');
      return;
    }
    setPassengers([...passengers, { name: '', age: 0, gender: 'male' }]);
  };

  const removePassenger = (index: number) => {
    if (passengers.length === 1) {
      showToast('At least one passenger is required', 'error');
      return;
    }
    setPassengers(passengers.filter((_, i) => i !== index));
  };

  const updatePassenger = (index: number, field: keyof Passenger, value: string | number) => {
    const updated = [...passengers];
    updated[index] = { ...updated[index], [field]: value };
    setPassengers(updated);
  };

  const getSeatRecommendation = (passenger: Passenger): string => {
    if (passenger.age > 60) return 'Lower Berth (Senior Citizen)';
    if (passenger.gender === 'female') return 'Window Seat (Preferred)';
    if (passenger.age < 12) return 'Lower Berth (Child)';
    return 'Standard Allocation';
  };

  const handleProceed = () => {
    // Validate passengers
    for (let i = 0; i < passengers.length; i++) {
      const p = passengers[i];
      if (!p.name.trim()) {
        showToast(`Please enter name for Passenger ${i + 1}`, 'error');
        return;
      }
      if (p.age < 1 || p.age > 120) {
        showToast(`Please enter valid age for Passenger ${i + 1}`, 'error');
        return;
      }
    }

    setCurrentBooking({
      ...currentBooking,
      passengers
    });

    navigate('/payment');
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          {['Search', 'Passenger Details', 'Payment', 'Confirmation'].map((step, idx) => (
            <React.Fragment key={step}>
              <div className={`flex items-center gap-2 ${idx <= 1 ? 'text-[#2563EB]' : 'text-[#94A3B8]'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  idx <= 1 ? 'bg-[#2563EB] text-white' : 'bg-[#E2E8F0] text-[#94A3B8]'
                }`}>
                  {idx + 1}
                </div>
                <span className="hidden sm:block text-sm font-medium">{step}</span>
              </div>
              {idx < 3 && (
                <div className={`w-12 sm:w-20 h-0.5 mx-2 ${idx < 1 ? 'bg-[#2563EB]' : 'bg-[#E2E8F0]'}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Passenger Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-[#0F172A]">Passenger Details</h2>
                <Button variant="outline" size="sm" onClick={addPassenger}>
                  <Plus className="w-4 h-4 mr-1" />
                  Add Passenger
                </Button>
              </div>

              <div className="space-y-6">
                {passengers.map((passenger, index) => (
                  <div key={index} className="p-4 bg-[#F7F9FC] rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-5 h-5 text-[#2563EB]" />
                        <span className="font-medium text-[#0F172A]">Passenger {index + 1}</span>
                      </div>
                      {passengers.length > 1 && (
                        <button
                          onClick={() => removePassenger(index)}
                          className="p-1.5 text-[#EF4444] hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4">
                      <Input
                        label="Full Name"
                        value={passenger.name}
                        onChange={(e) => updatePassenger(index, 'name', e.target.value)}
                        placeholder="As per ID proof"
                      />
                      <Input
                        label="Age"
                        type="number"
                        min={1}
                        max={120}
                        value={passenger.age || ''}
                        onChange={(e) => updatePassenger(index, 'age', parseInt(e.target.value) || 0)}
                        placeholder="Years"
                      />
                      <Select
                        label="Gender"
                        value={passenger.gender}
                        onChange={(e) => updatePassenger(index, 'gender', e.target.value as 'male' | 'female' | 'other')}
                        options={[
                          { value: 'male', label: 'Male' },
                          { value: 'female', label: 'Female' },
                          { value: 'other', label: 'Other' }
                        ]}
                      />
                    </div>

                    {passenger.name && passenger.age > 0 && (
                      <div className="mt-4 flex items-center gap-2 text-sm">
                        <Sparkles className="w-4 h-4 text-[#2563EB]" />
                        <span className="text-[#475569]">Smart Seat:</span>
                        <span className="font-medium text-[#2563EB]">{getSeatRecommendation(passenger)}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Smart Recommendations Info */}
            <Card className="bg-gradient-to-br from-[#E5EDFF] to-[#F7F9FC] border-[#2563EB]/20">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#2563EB] rounded-xl">
                  <Info className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0F172A] mb-1">Smart Seat Allocation</h3>
                  <p className="text-sm text-[#475569]">
                    Our AI automatically allocates optimal seats based on passenger age and preferences:
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-[#475569]">
                    <li>• <strong>Senior Citizens (60+):</strong> Lower berth preference</li>
                    <li>• <strong>Female Passengers:</strong> Window seat preference</li>
                    <li>• <strong>Children:</strong> Lower berth with family grouping</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Journey Summary */}
          <div className="space-y-6">
            <Card>
              <h3 className="font-semibold text-[#0F172A] mb-4">Journey Summary</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#E5EDFF] rounded-xl">
                    <Train className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-[#0F172A] truncate">{train.trainName}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-[#475569]">#{train.trainNumber}</p>
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

                <div className="p-4 bg-[#F7F9FC] rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#94A3B8]" />
                      <span className="text-sm text-[#475569]">From</span>
                    </div>
                    <span className="text-sm font-medium text-[#0F172A]">{train.source.split(' (')[0]}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-[#94A3B8]" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#94A3B8]" />
                      <span className="text-sm text-[#475569]">To</span>
                    </div>
                    <span className="text-sm font-medium text-[#0F172A]">{train.destination.split(' (')[0]}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#94A3B8]" />
                    <span className="text-sm text-[#475569]">Date</span>
                  </div>
                  <span className="text-sm font-medium text-[#0F172A]">
                    {new Date(journeyDate).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-[#475569]">Class</span>
                  <span className="px-2 py-1 bg-[#E5EDFF] text-[#2563EB] text-sm font-medium rounded-lg">{travelClass}</span>
                </div>

                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-[#475569]">Departure</span>
                  <span className="text-sm font-medium text-[#0F172A]">{train.departureTime}</span>
                </div>

                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-[#475569]">Arrival</span>
                  <span className="text-sm font-medium text-[#0F172A]">{train.arrivalTime}</span>
                </div>

                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-[#475569]">Duration</span>
                  <span className="text-sm font-medium text-[#0F172A]">{train.duration}</span>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="font-semibold text-[#0F172A] mb-4">Fare Breakdown</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[#475569]">Base Fare × {passengers.length}</span>
                  <span className="font-medium text-[#0F172A]">₹{fare * passengers.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#475569]">GST (5%)</span>
                  <span className="font-medium text-[#0F172A]">₹{Math.round(fare * passengers.length * 0.05)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#475569]">Convenience Fee</span>
                  <span className="font-medium text-[#10B981]">FREE</span>
                </div>
                
                <div className="border-t border-[#E2E8F0] pt-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#0F172A]">Total Amount</span>
                    <span className="text-2xl font-bold text-[#2563EB]">
                      ₹{Math.round(fare * passengers.length * 1.05)}
                    </span>
                  </div>
                </div>
              </div>

              <Button className="w-full mt-6" size="lg" onClick={handleProceed}>
                Proceed to Payment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
