import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Train, Menu, X, User, LogOut, Settings, Ticket } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/search', label: 'Search Trains' },
    { path: '/bookings', label: 'My Bookings' },
    ...(user?.isAdmin ? [{ path: '/admin', label: 'Admin' }] : []),
  ];

  const handleLogout = async () => {
    await logout();
    navigate('/');
    setProfileOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-gradient-to-br from-[#2563EB] to-[#1F3A8A] rounded-xl shadow-lg shadow-blue-200 group-hover:shadow-xl transition-shadow">
              <Train className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-[#0F172A]">Go<span className="text-[#2563EB]">Rail</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === link.path
                    ? 'bg-[#E5EDFF] text-[#2563EB]'
                    : 'text-[#475569] hover:text-[#0F172A] hover:bg-[#F7F9FC]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 p-2 rounded-xl hover:bg-[#F7F9FC] transition-colors"
                >
                  <div className="w-9 h-9 bg-gradient-to-br from-[#2563EB] to-[#1F3A8A] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {user.displayName.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium text-[#0F172A]">{user.displayName}</span>
                </button>
                
                {profileOpen && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-[#E2E8F0] py-2 animate-fade-in">
                    <div className="px-4 py-2 border-b border-[#E2E8F0]">
                      <p className="text-sm font-medium text-[#0F172A]">{user.displayName}</p>
                      <p className="text-xs text-[#475569]">{user.email}</p>
                    </div>
                    <Link
                      to="/profile"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-[#475569] hover:bg-[#F7F9FC] hover:text-[#0F172A]"
                    >
                      <User className="w-4 h-4" />
                      Profile
                    </Link>
                    <Link
                      to="/bookings"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-[#475569] hover:bg-[#F7F9FC] hover:text-[#0F172A]"
                    >
                      <Ticket className="w-4 h-4" />
                      My Bookings
                    </Link>
                    {user.isAdmin && (
                      <Link
                        to="/admin"
                        onClick={() => setProfileOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-[#475569] hover:bg-[#F7F9FC] hover:text-[#0F172A]"
                      >
                        <Settings className="w-4 h-4" />
                        Admin Dashboard
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-[#EF4444] hover:bg-red-50 w-full"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm">Login</Button>
                </Link>
                <Link to="/register">
                  <Button size="sm">Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-[#F7F9FC]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#E2E8F0] animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium ${
                    location.pathname === link.path
                      ? 'bg-[#E5EDFF] text-[#2563EB]'
                      : 'text-[#475569]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              {!user ? (
                <div className="flex gap-2 mt-4 px-4">
                  <Link to="/login" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full">Login</Button>
                  </Link>
                  <Link to="/register" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full">Sign Up</Button>
                  </Link>
                </div>
              ) : (
                <>
                  <Link
                    to="/profile"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 text-sm text-[#475569] mt-2"
                  >
                    <User className="w-4 h-4" />
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-3 text-sm text-[#EF4444] mt-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
