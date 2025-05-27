import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CalendarIcon, Users, MapPin } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BookingPage = () => {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState('');

  const rooms = [
    { id: 'ocean-suite', name: 'Ocean View Suite', price: '₦119,600' },
    { id: 'garden-villa', name: 'Garden Villa', price: '₦179,600' },
    { id: 'presidential', name: 'Presidential Suite', price: '₦319,600' },
    { id: 'standard-twin', name: 'Standard Twin Room', price: '₦51,600' },
    { id: 'standard-double', name: 'Standard Double Room', price: '₦63,600' },
    { id: 'deluxe', name: 'Deluxe Room', price: '₦75,600' },
    { id: 'family', name: 'Family Room', price: '₦87,600' },
    { id: 'business', name: 'Business Room', price: '₦79,600' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const bookingData = {
      checkIn: checkIn ? checkIn.toLocaleDateString() : '',
      checkOut: checkOut ? checkOut.toLocaleDateString() : '',
      guests,
      selectedRoom,
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      address: formData.get('address') as string,
      requests: formData.get('requests') as string,
    };

    // Navigate to payment page with booking data
    navigate('/payment', { state: { bookingData } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Book Your Stay
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Reserve your perfect room at Azure Haven Resort and create unforgettable memories.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Date Selection */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="checkin">Check-in Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !checkIn && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkIn ? format(checkIn, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={checkIn}
                        onSelect={setCheckIn}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="checkout">Check-out Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !checkOut && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkOut ? format(checkOut, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={checkOut}
                        onSelect={setCheckOut}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Guests and Room Selection */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="guests">Number of Guests</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      max="8"
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value))}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="room">Room Type</Label>
                  <select
                    id="room"
                    value={selectedRoom}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                    className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  >
                    <option value="">Select a room type</option>
                    {rooms.map((room) => (
                      <option key={room.id} value={room.id}>
                        {room.name} - {room.price}/night
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guest Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" name="firstName" placeholder="Enter your first name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" placeholder="Enter your last name" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="Enter your email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input id="address" name="address" placeholder="Enter your address" className="pl-10" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="requests">Special Requests</Label>
                <Textarea
                  id="requests"
                  name="requests"
                  placeholder="Any special requests or requirements?"
                  className="min-h-[100px]"
                />
              </div>

              <div className="flex gap-4 pt-6">
                <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                  Proceed to Payment
                </Button>
                <Button type="button" variant="outline" className="flex-1">
                  Save for Later
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingPage;
