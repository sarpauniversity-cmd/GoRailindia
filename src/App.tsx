import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { BookingProvider } from './context/BookingContext';
import { ToastProvider } from './components/ui/Toast';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Chatbot } from './components/Chatbot';

// Pages
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ForgotPassword } from './pages/ForgotPassword';
import { SearchTrains } from './pages/SearchTrains';
import { Booking } from './pages/Booking';
import { Payment } from './pages/Payment';
import { Ticket } from './pages/Ticket';
import { MyBookings } from './pages/MyBookings';
import { Profile } from './pages/Profile';
import { Admin } from './pages/Admin';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

export function App() {
  return (
    <Router>
      <AuthProvider>
        <BookingProvider>
          <ToastProvider>
            <div className="flex flex-col min-h-screen">
              <Routes>
                {/* Routes without navbar/footer */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/admin" element={<Admin />} />
                
                {/* Routes with navbar/footer */}
                <Route path="*" element={
                  <>
                    <Navbar />
                    <main className="flex-1">
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/search" element={<SearchTrains />} />
                        <Route path="/booking" element={<Booking />} />
                        <Route path="/payment" element={<Payment />} />
                        <Route path="/ticket/:pnr" element={<Ticket />} />
                        <Route path="/bookings" element={<MyBookings />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                      </Routes>
                    </main>
                    <Footer />
                    <Chatbot />
                  </>
                } />
              </Routes>
            </div>
          </ToastProvider>
        </BookingProvider>
      </AuthProvider>
    </Router>
  );
}
