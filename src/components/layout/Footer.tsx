import React from 'react';
import { Link } from 'react-router-dom';
import { Train, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-[#2563EB] rounded-xl">
                <Train className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">GoRail</span>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Smart Railway Ticket Booking System with intelligent seat recommendations. 
              A capstone project demonstrating modern web development with Firebase.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-[#1F3A8A] rounded-lg hover:bg-[#2563EB] transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-[#1F3A8A] rounded-lg hover:bg-[#2563EB] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-[#1F3A8A] rounded-lg hover:bg-[#2563EB] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { to: '/search', label: 'Search Trains' },
                { to: '/bookings', label: 'My Bookings' },
                { to: '/about', label: 'About Project' },
                { to: '/contact', label: 'Contact' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-[#94A3B8] hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Project Info</h3>
            <ul className="space-y-3">
              {[
                { to: '/about', label: 'System Architecture' },
                { to: '/about', label: 'ER Diagram' },
                { to: '/about', label: 'Objectives' },
                { to: '/about', label: 'Documentation' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.to} className="text-[#94A3B8] hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[#94A3B8] text-sm">
                <Mail className="w-4 h-4 text-[#2563EB]" />
                support@gorail.com
              </li>
              <li className="flex items-center gap-3 text-[#94A3B8] text-sm">
                <Phone className="w-4 h-4 text-[#2563EB]" />
                +91 1234 567 890
              </li>
              <li className="flex items-start gap-3 text-[#94A3B8] text-sm">
                <MapPin className="w-4 h-4 text-[#2563EB] mt-0.5" />
                <span>Department of Computer Science,<br />University Campus, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1F3A8A] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#94A3B8] text-sm">
            © 2024 GoRail. All rights reserved. Capstone Project.
          </p>
          <p className="text-[#94A3B8] text-sm">
            Built with React, Firebase & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
