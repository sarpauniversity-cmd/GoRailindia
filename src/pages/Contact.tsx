import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { useToast } from '../components/ui/Toast';

export const Contact: React.FC = () => {
  const { showToast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate sending
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    showToast('Message sent successfully! We will get back to you soon.', 'success');
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setLoading(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'support@gorail.com',
      desc: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91 1234 567 890',
      desc: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'University Campus',
      desc: 'Department of Computer Science'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      value: '9 AM - 6 PM',
      desc: 'Monday to Saturday'
    }
  ];

  const faqs = [
    {
      q: 'How do I book a ticket?',
      a: 'Search for trains, select your preferred option, add passenger details, and complete the payment.'
    },
    {
      q: 'Can I cancel my booking?',
      a: 'Yes, you can cancel from the My Bookings page. Refunds are processed within 3-5 business days.'
    },
    {
      q: 'How is seat allocation done?',
      a: 'Our smart system allocates seats based on age and gender preferences automatically.'
    },
    {
      q: 'Is this a real booking platform?',
      a: 'No, this is a capstone project demonstrating a railway booking system. No real bookings are made.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1F3A8A] to-[#2563EB] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-blue-100 max-w-xl mx-auto">
            Have questions about the project? Want to know more about implementation details? 
            We'd love to hear from you.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {contactInfo.map((info, idx) => (
            <Card key={idx} hover className="text-center">
              <div className="w-12 h-12 bg-[#E5EDFF] rounded-xl flex items-center justify-center text-[#2563EB] mx-auto mb-4">
                <info.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-[#0F172A]">{info.title}</h3>
              <p className="text-[#2563EB] font-medium mt-1">{info.value}</p>
              <p className="text-sm text-[#475569] mt-1">{info.desc}</p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#E5EDFF] rounded-xl">
                <MessageSquare className="w-5 h-5 text-[#2563EB]" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#0F172A]">Send a Message</h2>
                <p className="text-sm text-[#475569]">We'll respond within 24 hours</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  required
                />
              </div>
              <Input
                label="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="How can we help?"
                required
              />
              <div>
                <label className="block text-sm font-medium text-[#0F172A] mb-1.5">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  placeholder="Write your message here..."
                  required
                  className="w-full px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent resize-none"
                />
              </div>
              <Button type="submit" className="w-full" isLoading={loading}>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* FAQs */}
          <div>
            <h2 className="text-xl font-semibold text-[#0F172A] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <Card key={idx}>
                  <h3 className="font-semibold text-[#0F172A] mb-2">{faq.q}</h3>
                  <p className="text-[#475569] text-sm">{faq.a}</p>
                </Card>
              ))}
            </div>

            <Card className="mt-6 bg-gradient-to-br from-[#E5EDFF] to-[#F7F9FC]">
              <h3 className="font-semibold text-[#0F172A] mb-2">Project Documentation</h3>
              <p className="text-sm text-[#475569] mb-4">
                Access the complete project documentation including system design, 
                architecture diagrams, and technical specifications.
              </p>
              <Button variant="outline" size="sm">
                View Documentation
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
