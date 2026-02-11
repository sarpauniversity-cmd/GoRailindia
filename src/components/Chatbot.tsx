import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
}

const botResponses: Record<string, string> = {
  'hello': 'Hello! Welcome to RailBook. How can I help you today?',
  'hi': 'Hi there! I\'m your RailBook assistant. How can I assist you?',
  'book': 'To book a ticket:\n1. Search for trains on the Search page\n2. Select your preferred train\n3. Fill in passenger details\n4. Complete payment\n5. Your PNR will be generated!',
  'how to book': 'To book a ticket:\n1. Go to Search Trains\n2. Enter source and destination\n3. Select your train\n4. Add passenger details\n5. Make payment\nYour ticket will be confirmed instantly!',
  'cancel': 'To cancel a booking:\n1. Go to My Bookings\n2. Find your ticket\n3. Click Cancel Ticket\n4. Confirm cancellation\nRefund will be processed within 3-5 days.',
  'refund': 'Refunds are processed within 3-5 business days after cancellation. The amount depends on when you cancel before the journey date.',
  'check booking': 'You can check your bookings by:\n1. Logging into your account\n2. Going to My Bookings page\nAll your confirmed and cancelled tickets will be shown there.',
  'pnr': 'PNR is your unique booking reference number. You can find it in your booking confirmation and use it to track your ticket status.',
  'payment': 'We accept multiple payment methods (Demo mode). Your payment is secure and encrypted.',
  'seat': 'We use smart seat allocation:\n• Senior citizens (60+) get lower berths\n• Women passengers get window seats\n• Families are seated together when possible',
  'help': 'I can help you with:\n• Booking tickets\n• Cancelling tickets\n• Checking bookings\n• PNR status\n• Payment queries\n• Seat allocation\nJust ask!',
  'default': 'I\'m sorry, I didn\'t understand that. Try asking about:\n• How to book tickets\n• Cancel booking\n• Check booking\n• PNR status\n• Payment help'
};

const findResponse = (input: string): string => {
  const lower = input.toLowerCase();
  for (const [key, value] of Object.entries(botResponses)) {
    if (lower.includes(key)) return value;
  }
  return botResponses.default;
};

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Hi! I\'m your RailBook assistant. How can I help you today?', isBot: true }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isBot: false
    };
    
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: findResponse(input),
      isBot: true
    };
    
    setMessages(prev => [...prev, userMessage, botMessage]);
    setInput('');
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-br from-[#2563EB] to-[#1F3A8A] rounded-full shadow-xl shadow-blue-300 hover:shadow-2xl transition-all hover:scale-105"
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#2563EB] to-[#1F3A8A] p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">RailBook Assistant</h3>
                <p className="text-xs text-blue-200">Always here to help</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[300px] overflow-y-auto p-4 space-y-3 bg-[#F7F9FC]">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm whitespace-pre-line ${
                    msg.isBot
                      ? 'bg-white text-[#0F172A] rounded-tl-none shadow-sm'
                      : 'bg-[#2563EB] text-white rounded-tr-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-[#E2E8F0]">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type your question..."
                className="flex-1 px-4 py-2 bg-[#F7F9FC] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
              <button
                onClick={sendMessage}
                className="p-2 bg-[#2563EB] text-white rounded-xl hover:bg-[#1d4ed8] transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <div className="flex gap-2 mt-2 overflow-x-auto">
              {['How to book?', 'Cancel ticket', 'Check PNR'].map(q => (
                <button
                  key={q}
                  onClick={() => setInput(q)}
                  className="px-3 py-1 text-xs bg-[#E5EDFF] text-[#2563EB] rounded-full whitespace-nowrap hover:bg-[#d4e0ff]"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
