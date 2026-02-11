import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Train, Target, Users, Database, Code, Zap,
  Server, Smartphone, Globe, CheckCircle, ArrowRight,
  Layout, Box, Layers
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const About: React.FC = () => {
  const objectives = [
    'Develop a user-friendly railway ticket booking platform',
    'Implement secure user authentication with Firebase',
    'Create smart seat allocation based on passenger profiles',
    'Build an admin dashboard for train management',
    'Design responsive UI following modern design principles',
    'Implement real-time booking and cancellation system'
  ];

  const techStack = [
    { name: 'React', icon: Code, desc: 'Frontend framework for building UI' },
    { name: 'Vite', icon: Zap, desc: 'Next-generation build tool' },
    { name: 'Tailwind CSS', icon: Layout, desc: 'Utility-first CSS framework' },
    { name: 'Firebase', icon: Database, desc: 'Backend-as-a-Service platform' },
    { name: 'TypeScript', icon: Box, desc: 'Type-safe JavaScript' },
    { name: 'React Router', icon: Globe, desc: 'Client-side routing' }
  ];

  const features = [
    { title: 'User Authentication', desc: 'Secure login, registration, and password recovery' },
    { title: 'Train Search', desc: 'Search trains by source, destination, and date' },
    { title: 'Smart Booking', desc: 'Intelligent seat allocation based on passenger age and gender' },
    { title: 'Payment Gateway', desc: 'Demo payment processing with multiple methods' },
    { title: 'E-Ticket Generation', desc: 'Printable tickets with PNR and QR codes' },
    { title: 'Booking Management', desc: 'View, track, and cancel bookings' },
    { title: 'Admin Dashboard', desc: 'Manage trains, users, and view analytics' },
    { title: 'AI Chatbot', desc: 'Rule-based assistant for user queries' }
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1F3A8A] to-[#2563EB] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full mb-6">
            <Train className="w-5 h-5 text-white" />
            <span className="text-white/90 text-sm font-medium">Capstone Project 2024</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Online Railway Ticket Booking System
          </h1>
          <p className="text-xl text-blue-100 mb-2">
            with Smart Recommendation (Firebase Based)
          </p>
          <p className="text-blue-200 max-w-2xl mx-auto mt-4">
            A comprehensive full-stack web application demonstrating modern web development 
            practices, user experience design, and intelligent recommendation systems.
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Project Overview</h2>
              <p className="text-[#475569] mb-4">
                This Railway Ticket Booking System is designed as a capstone project to demonstrate 
                proficiency in modern full-stack web development. The application provides a complete 
                solution for online railway ticket booking with features like user authentication, 
                train search, smart seat allocation, payment processing, and booking management.
              </p>
              <p className="text-[#475569] mb-6">
                The system incorporates AI/ML concepts through rule-based recommendation algorithms 
                that suggest optimal seat assignments based on passenger demographics, ensuring a 
                comfortable travel experience for all users.
              </p>
              <Link to="/search">
                <Button size="lg">
                  Try the Application
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <Card className="bg-gradient-to-br from-[#E5EDFF] to-white">
              <h3 className="font-semibold text-[#0F172A] mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#2563EB]" />
                Project Objectives
              </h3>
              <ul className="space-y-3">
                {objectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                    <span className="text-[#475569]">{obj}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">System Architecture</h2>
            <p className="text-[#475569] max-w-2xl mx-auto">
              A three-tier architecture ensuring scalability, security, and maintainability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center" hover>
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <Smartphone className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Presentation Layer</h3>
              <p className="text-[#475569] text-sm">
                React-based SPA with responsive UI, built using Vite and styled with Tailwind CSS.
              </p>
            </Card>

            <Card className="text-center" hover>
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <Server className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Application Layer</h3>
              <p className="text-[#475569] text-sm">
                Business logic implemented in React with context providers for state management.
              </p>
            </Card>

            <Card className="text-center" hover>
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <Database className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Data Layer</h3>
              <p className="text-[#475569] text-sm">
                Firebase Firestore for data persistence with real-time synchronization capabilities.
              </p>
            </Card>
          </div>

          {/* ER Diagram */}
          <Card>
            <h3 className="font-semibold text-[#0F172A] mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#2563EB]" />
              Database Schema (ER Diagram)
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: 'Users', fields: ['uid', 'email', 'displayName', 'isAdmin'] },
                { name: 'Trains', fields: ['trainId', 'trainName', 'source', 'destination', 'classes', 'seats'] },
                { name: 'Bookings', fields: ['pnr', 'userId', 'trainId', 'passengers', 'status', 'totalFare'] },
                { name: 'Payments', fields: ['paymentId', 'bookingId', 'amount', 'method', 'status'] }
              ].map((entity) => (
                <div key={entity.name} className="p-4 bg-[#F7F9FC] rounded-xl">
                  <h4 className="font-semibold text-[#2563EB] mb-3">{entity.name}</h4>
                  <ul className="space-y-1">
                    {entity.fields.map((field) => (
                      <li key={field} className="text-sm text-[#475569] font-mono">{field}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Technology Stack</h2>
            <p className="text-[#475569]">Modern tools and frameworks used in this project</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((tech) => (
              <Card key={tech.name} hover className="text-center">
                <div className="w-12 h-12 bg-[#E5EDFF] rounded-xl flex items-center justify-center text-[#2563EB] mx-auto mb-3">
                  <tech.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-[#0F172A] text-sm">{tech.name}</h3>
                <p className="text-xs text-[#475569] mt-1">{tech.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Key Features</h2>
            <p className="text-[#475569]">Comprehensive functionality for a complete booking experience</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <Card key={idx} hover>
                <div className="w-10 h-10 bg-[#E5EDFF] rounded-xl flex items-center justify-center text-[#2563EB] mb-4">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-[#0F172A] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#475569]">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-gradient-to-br from-[#1F3A8A] to-[#2563EB] text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Smart Recommendation System</h2>
                <p className="text-blue-100 mb-6">
                  Our AI-powered recommendation engine uses rule-based algorithms to provide 
                  intelligent seat allocation and fare prediction.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-white/10 rounded-xl">
                    <h4 className="font-semibold mb-2">Seat Allocation Rules</h4>
                    <ul className="text-sm text-blue-100 space-y-1">
                      <li>• Age {'>'} 60 → Lower Berth Priority</li>
                      <li>• Female Passengers → Window Seat</li>
                      <li>• Children → Lower Berth with Family</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-white/10 rounded-xl">
                    <h4 className="font-semibold mb-2">Fare Calculation</h4>
                    <p className="text-sm text-blue-100">
                      fare = distance × classFactor × demandMultiplier
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center">
                  <Zap className="w-32 h-32 text-blue-200" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Project Team</h2>
          <p className="text-[#475569] mb-8">
            This capstone project was developed as part of the Computer Science curriculum.
          </p>
          <Card>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#2563EB] to-[#1F3A8A] rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-4">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A]">Development Team</h3>
              <p className="text-[#475569] mt-2">Department of Computer Science</p>
              <p className="text-[#475569]">University Name, 2024</p>
              <div className="flex gap-3 mt-6">
                <Link to="/contact">
                  <Button>Contact Us</Button>
                </Link>
                <Link to="/">
                  <Button variant="outline">View Project</Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};
