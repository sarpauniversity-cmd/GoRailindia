import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Smartphone, Building2, Wallet, Shield, Lock, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { useBooking } from '../context/BookingContext';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../components/ui/Toast';

type PaymentMethod = 'card' | 'upi' | 'netbanking' | 'wallet';
type PaymentStatus = 'idle' | 'processing' | 'success' | 'failed';

export const Payment: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { currentBooking, addBooking, setCurrentBooking } = useBooking();
  const { showToast } = useToast();

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>('idle');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [upiId, setUpiId] = useState('');

  const { train, journeyDate, travelClass, passengers } = currentBooking;

  if (!train || !journeyDate || passengers.length === 0) {
    return (
      <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center p-4">
        <Card className="text-center py-12 px-8 max-w-md">
          <div className="w-16 h-16 bg-[#F7F9FC] rounded-full flex items-center justify-center mx-auto mb-4">
            <CreditCard className="w-8 h-8 text-[#94A3B8]" />
          </div>
          <h2 className="text-xl font-semibold text-[#0F172A] mb-2">No Booking Found</h2>
          <p className="text-[#475569] mb-6">Please complete passenger details first.</p>
          <Button onClick={() => navigate('/search')}>Search Trains</Button>
        </Card>
      </div>
    );
  }

  const fare = train.classes[travelClass]?.price || Object.values(train.classes)[0].price;
  const totalAmount = Math.round(fare * passengers.length * 1.05);

  const paymentMethods = [
    { id: 'card', label: 'Credit/Debit Card', icon: CreditCard },
    { id: 'upi', label: 'UPI', icon: Smartphone },
    { id: 'netbanking', label: 'Net Banking', icon: Building2 },
    { id: 'wallet', label: 'Wallet', icon: Wallet }
  ];

  const handlePayment = async () => {
    // Validate based on payment method
    if (paymentMethod === 'card') {
      if (!cardNumber || cardNumber.length < 16) {
        showToast('Please enter a valid card number', 'error');
        return;
      }
      if (!cardExpiry) {
        showToast('Please enter card expiry date', 'error');
        return;
      }
      if (!cardCvv || cardCvv.length < 3) {
        showToast('Please enter a valid CVV', 'error');
        return;
      }
    } else if (paymentMethod === 'upi') {
      if (!upiId || !upiId.includes('@')) {
        showToast('Please enter a valid UPI ID', 'error');
        return;
      }
    }

    setPaymentStatus('processing');

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));

    // 90% success rate for demo
    const isSuccess = Math.random() > 0.1;

    if (isSuccess) {
      setPaymentStatus('success');
      
      // Create booking
      const booking = addBooking({
        userId: user?.uid || 'guest',
        userName: user?.displayName || 'Guest User',
        trainId: train.trainNumber,
        trainName: train.trainName,
        source: train.source,
        destination: train.destination,
        journeyDate,
        travelClass,
        passengers,
        totalFare: totalAmount,
        status: 'confirmed',
        paymentId: `PAY${Date.now()}`
      });

      showToast('Payment successful! Ticket confirmed.', 'success');

      // Redirect to confirmation after delay
      setTimeout(() => {
        setCurrentBooking({ train: null, journeyDate: '', travelClass: '', passengers: [] });
        navigate(`/ticket/${booking.pnr}`);
      }, 2000);
    } else {
      setPaymentStatus('failed');
      showToast('Payment failed. Please try again.', 'error');
    }
  };

  if (paymentStatus === 'processing') {
    return (
      <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center p-4">
        <Card className="text-center py-16 px-12 max-w-md">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-[#E2E8F0] rounded-full" />
            <div className="absolute inset-0 border-4 border-[#2563EB] rounded-full border-t-transparent animate-spin" />
          </div>
          <h2 className="text-xl font-semibold text-[#0F172A] mb-2">Processing Payment</h2>
          <p className="text-[#475569]">Please wait while we process your payment...</p>
          <p className="text-sm text-[#94A3B8] mt-4">Do not refresh or close this page</p>
        </Card>
      </div>
    );
  }

  if (paymentStatus === 'success') {
    return (
      <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center p-4">
        <Card className="text-center py-16 px-12 max-w-md">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle className="w-10 h-10 text-[#10B981]" />
          </div>
          <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Payment Successful!</h2>
          <p className="text-[#475569] mb-4">Your ticket has been confirmed.</p>
          <p className="text-sm text-[#94A3B8]">Redirecting to your ticket...</p>
        </Card>
      </div>
    );
  }

  if (paymentStatus === 'failed') {
    return (
      <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center p-4">
        <Card className="text-center py-16 px-12 max-w-md">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-10 h-10 text-[#EF4444]" />
          </div>
          <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Payment Failed</h2>
          <p className="text-[#475569] mb-6">Something went wrong. Please try again.</p>
          <div className="flex gap-3 justify-center">
            <Button variant="outline" onClick={() => navigate('/search')}>
              Cancel
            </Button>
            <Button onClick={() => setPaymentStatus('idle')}>
              Retry Payment
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F9FC] py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          {['Search', 'Passenger Details', 'Payment', 'Confirmation'].map((step, idx) => (
            <React.Fragment key={step}>
              <div className={`flex items-center gap-2 ${idx <= 2 ? 'text-[#2563EB]' : 'text-[#94A3B8]'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  idx <= 2 ? 'bg-[#2563EB] text-white' : 'bg-[#E2E8F0] text-[#94A3B8]'
                }`}>
                  {idx + 1}
                </div>
                <span className="hidden sm:block text-sm font-medium">{step}</span>
              </div>
              {idx < 3 && (
                <div className={`w-12 sm:w-20 h-0.5 mx-2 ${idx < 2 ? 'bg-[#2563EB]' : 'bg-[#E2E8F0]'}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <h2 className="text-xl font-semibold text-[#0F172A] mb-6">Select Payment Method</h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {paymentMethods.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setPaymentMethod(id as PaymentMethod)}
                    className={`p-4 rounded-xl border-2 transition-all text-center ${
                      paymentMethod === id
                        ? 'border-[#2563EB] bg-[#E5EDFF]'
                        : 'border-[#E2E8F0] hover:border-[#94A3B8]'
                    }`}
                  >
                    <Icon className={`w-6 h-6 mx-auto mb-2 ${
                      paymentMethod === id ? 'text-[#2563EB]' : 'text-[#475569]'
                    }`} />
                    <span className={`text-xs font-medium ${
                      paymentMethod === id ? 'text-[#2563EB]' : 'text-[#475569]'
                    }`}>
                      {label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Card Payment Form */}
              {paymentMethod === 'card' && (
                <div className="space-y-4">
                  <Input
                    label="Card Number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').slice(0, 16))}
                    placeholder="1234 5678 9012 3456"
                    icon={<CreditCard className="w-5 h-5" />}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Expiry Date"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      placeholder="MM/YY"
                    />
                    <Input
                      label="CVV"
                      type="password"
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                      placeholder="•••"
                    />
                  </div>
                  <div className="p-3 bg-[#F7F9FC] rounded-xl flex items-center gap-2 text-sm text-[#475569]">
                    <Lock className="w-4 h-4 text-[#10B981]" />
                    Your card details are encrypted and secure
                  </div>
                </div>
              )}

              {/* UPI Form */}
              {paymentMethod === 'upi' && (
                <div className="space-y-4">
                  <Input
                    label="UPI ID"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="yourname@upi"
                    icon={<Smartphone className="w-5 h-5" />}
                  />
                  <p className="text-sm text-[#475569]">
                    Enter your UPI ID and we'll send a payment request to your UPI app.
                  </p>
                </div>
              )}

              {/* Net Banking */}
              {paymentMethod === 'netbanking' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['SBI', 'HDFC', 'ICICI', 'Axis'].map(bank => (
                      <button
                        key={bank}
                        className="p-4 border border-[#E2E8F0] rounded-xl hover:border-[#2563EB] hover:bg-[#E5EDFF] transition-all"
                      >
                        <span className="font-medium text-[#0F172A]">{bank}</span>
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-[#475569]">
                    You will be redirected to your bank's website to complete the payment.
                  </p>
                </div>
              )}

              {/* Wallet */}
              {paymentMethod === 'wallet' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['Paytm', 'PhonePe', 'Amazon Pay', 'Mobikwik'].map(wallet => (
                      <button
                        key={wallet}
                        className="p-4 border border-[#E2E8F0] rounded-xl hover:border-[#2563EB] hover:bg-[#E5EDFF] transition-all"
                      >
                        <span className="font-medium text-[#0F172A]">{wallet}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </Card>

            {/* Demo Notice */}
            <Card className="bg-yellow-50 border-yellow-200">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-1">Demo Payment Gateway</h3>
                  <p className="text-sm text-yellow-700">
                    This is a demo payment system for the capstone project. No real transactions will be processed. 
                    Use any dummy values to test the booking flow.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card>
              <h3 className="font-semibold text-[#0F172A] mb-4">Order Summary</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[#475569]">Train</span>
                  <span className="font-medium text-[#0F172A] truncate ml-2 max-w-[150px]">{train.trainName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#475569]">Type</span>
                  <span className={`px-2 py-0.5 text-xs rounded ${
                    train.trainType === 'Vande Bharat' ? 'bg-purple-100 text-purple-700' :
                    train.trainType === 'Rajdhani' ? 'bg-red-100 text-red-700' :
                    train.trainType === 'Shatabdi' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {train.trainType}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#475569]">Route</span>
                  <span className="font-medium text-[#0F172A] text-right text-xs">{train.source.split(' (')[0]} → {train.destination.split(' (')[0]}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#475569]">Date</span>
                  <span className="font-medium text-[#0F172A]">
                    {new Date(journeyDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#475569]">Passengers</span>
                  <span className="font-medium text-[#0F172A]">{passengers.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#475569]">Class</span>
                  <span className="px-2 py-0.5 bg-[#E5EDFF] text-[#2563EB] text-xs font-medium rounded">{travelClass}</span>
                </div>
                
                <div className="border-t border-[#E2E8F0] pt-3 mt-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[#475569]">Subtotal</span>
                    <span className="font-medium text-[#0F172A]">₹{fare * passengers.length}</span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[#475569]">GST (5%)</span>
                    <span className="font-medium text-[#0F172A]">₹{Math.round(fare * passengers.length * 0.05)}</span>
                  </div>
                </div>

                <div className="border-t border-[#E2E8F0] pt-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#0F172A]">Total</span>
                    <span className="text-2xl font-bold text-[#2563EB]">₹{totalAmount}</span>
                  </div>
                </div>
              </div>

              <Button className="w-full mt-6" size="lg" onClick={handlePayment}>
                Pay ₹{totalAmount}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <p className="text-xs text-center text-[#94A3B8] mt-4">
                By completing this payment, you agree to our Terms of Service
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
