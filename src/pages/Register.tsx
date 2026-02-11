import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Train, Eye, EyeOff } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../components/ui/Toast';

// Google Icon SVG Component
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <g transform="matrix(1, 0, 0, 1, 0, 0)">
      <path d="M21.8,10.4h-0.5h-0.5H12v3.7h5.6c-0.5,2.5-2.6,3.8-5.4,3.8c-3.3,0-6-2.7-6-6s2.7-6,6-6c1.4,0,2.8,0.5,3.8,1.4 l2.7-2.7C17.1,3.1,15,2.2,12.2,2.2c-5.5,0-10,4.4-10,9.9s4.5,9.9,10,9.9c5,0,9.5-3.5,9.5-9.8C21.8,11.5,21.8,10.9,21.8,10.4z" fill="#4285F4"/>
      <path d="M3.2,7.2l3.1,2.3c0.9-2.4,3.1-4,5.8-4c1.4,0,2.8,0.5,3.8,1.4l2.7-2.7C17.1,3.1,15,2.2,12.2,2.2 C8.2,2.2,4.7,4.3,3.2,7.2z" fill="#EA4335"/>
      <path d="M12.2,21.9c2.7,0,5-0.9,6.7-2.4l-3-2.4c-1,0.7-2.3,1.1-3.7,1.1c-2.8,0-5-1.8-5.7-4.3l-3.1,2.4 C4.9,19.4,8.3,21.9,12.2,21.9z" fill="#34A853"/>
      <path d="M21.8,10.4h-0.5h-0.5H12v3.7h5.6c-0.2,1.2-0.9,2.2-1.8,2.9c0,0,0,0,0,0l3,2.4c-0.2,0.2,3.3-2.3,3.3-7.2 C21.8,11.5,21.8,10.9,21.8,10.4z" fill="#4285F4"/>
      <path d="M12.2,17.9c-2.8,0-5-1.8-5.7-4.3l-3.1,2.4c1.5,3,5,5.1,8.9,5.1c2.7,0,5-0.9,6.7-2.4l-3-2.4 C14.8,17.4,13.5,17.9,12.2,17.9z" fill="#34A853"/>
      <path d="M6.5,12c0-0.6,0.1-1.2,0.3-1.8L3.6,7.9C3,9.1,2.7,10.5,2.7,12c0,1.4,0.3,2.8,0.9,4l3.1-2.4 C6.6,13.1,6.5,12.6,6.5,12z" fill="#FBBC05"/>
    </g>
  </svg>
);

export const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const { register, loginWithGoogle } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      showToast('Passwords do not match', 'error');
      return;
    }
    
    if (password.length < 6) {
      showToast('Password must be at least 6 characters', 'error');
      return;
    }
    
    setLoading(true);
    
    try {
      await register(email, password, name);
      showToast('Account created successfully!', 'success');
      navigate('/');
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Registration failed';
      showToast(message, 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setGoogleLoading(true);
    
    try {
      await loginWithGoogle();
      showToast('Account created successfully! Welcome to GoRail.', 'success');
      navigate('/');
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Google signup failed';
      showToast(message, 'error');
    } finally {
      setGoogleLoading(false);
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
            <span className="text-2xl font-bold text-[#0F172A]">Go<span className="text-[#2563EB]">Rail</span></span>
          </Link>
        </div>

        <Card className="shadow-xl">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-[#0F172A]">Create Account</h1>
            <p className="text-[#475569] mt-1">Join GoRail and start booking</p>
          </div>

          {/* Google Sign Up Button */}
          <button
            onClick={handleGoogleSignup}
            disabled={googleLoading}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border-2 border-[#E2E8F0] rounded-xl font-medium text-[#0F172A] hover:bg-[#F7F9FC] hover:border-[#94A3B8] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mb-6"
          >
            {googleLoading ? (
              <div className="w-5 h-5 border-2 border-[#2563EB] border-t-transparent rounded-full animate-spin" />
            ) : (
              <GoogleIcon />
            )}
            <span>Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#E2E8F0]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-[#94A3B8]">or sign up with email</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Full Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              icon={<User className="w-5 h-5" />}
              required
            />

            <Input
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              icon={<Mail className="w-5 h-5" />}
              required
            />

            <div className="relative">
              <Input
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                icon={<Lock className="w-5 h-5" />}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] text-[#94A3B8] hover:text-[#475569]"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <Input
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              icon={<Lock className="w-5 h-5" />}
              required
            />

            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-[#E2E8F0] text-[#2563EB] focus:ring-[#2563EB] mt-0.5" required />
              <span className="text-sm text-[#475569]">
                I agree to the{' '}
                <a href="#" className="text-[#2563EB] hover:underline">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-[#2563EB] hover:underline">Privacy Policy</a>
              </span>
            </label>

            <Button type="submit" className="w-full" isLoading={loading}>
              Create Account
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[#475569] text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-[#2563EB] font-medium hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};
