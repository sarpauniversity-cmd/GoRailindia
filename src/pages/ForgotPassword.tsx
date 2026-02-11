import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Train, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../components/ui/Toast';

export const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const { resetPassword } = useAuth();
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await resetPassword(email);
      setSent(true);
      showToast('Password reset email sent!', 'success');
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to send reset email';
      showToast(message, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7F9FC] to-[#E5EDFF] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 group">
            <div className="p-3 bg-gradient-to-br from-[#2563EB] to-[#1F3A8A] rounded-xl shadow-lg">
              <Train className="w-8 h-8 text-white" />
            </div>
            <span className="text-2xl font-bold text-[#0F172A]">Rail<span className="text-[#2563EB]">Book</span></span>
          </Link>
        </div>

        <Card className="shadow-xl">
          {sent ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-[#10B981]" />
              </div>
              <h1 className="text-2xl font-bold text-[#0F172A] mb-2">Check Your Email</h1>
              <p className="text-[#475569] mb-6">
                We've sent a password reset link to<br />
                <span className="font-medium text-[#0F172A]">{email}</span>
              </p>
              <Link to="/login">
                <Button variant="outline" className="w-full">
                  Back to Login
                </Button>
              </Link>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-[#0F172A]">Forgot Password?</h1>
                <p className="text-[#475569] mt-1">No worries, we'll send you reset instructions</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  icon={<Mail className="w-5 h-5" />}
                  required
                />

                <Button type="submit" className="w-full" isLoading={loading}>
                  Send Reset Link
                </Button>
              </form>

              <div className="mt-6 text-center">
                <Link to="/login" className="inline-flex items-center gap-2 text-[#475569] text-sm hover:text-[#2563EB]">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Login
                </Link>
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  );
};
