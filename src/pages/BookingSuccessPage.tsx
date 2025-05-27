
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Download, Home, Calendar } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BookingSuccessPage = () => {
  const location = useLocation();
  const bookingData = location.state?.bookingData;

  if (!bookingData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-20 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Booking Not Found</h1>
            <Link to="/booking">
              <Button>Make a New Booking</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Booking Confirmed!
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Thank you for choosing Azure Haven Resort. Your reservation has been successfully confirmed.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Confirmation Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-600">Confirmation Number</p>
                <p className="text-2xl font-bold text-green-700">{bookingData.confirmationNumber}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Guest Information</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium">Name: </span>
                      <span>{bookingData.firstName} {bookingData.lastName}</span>
                    </div>
                    <div>
                      <span className="font-medium">Email: </span>
                      <span>{bookingData.email}</span>
                    </div>
                    <div>
                      <span className="font-medium">Phone: </span>
                      <span>{bookingData.phone}</span>
                    </div>
                    <div>
                      <span className="font-medium">Guests: </span>
                      <span>{bookingData.guests} {bookingData.guests === 1 ? 'Guest' : 'Guests'}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Booking Details</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium">Check-in: </span>
                      <span>{bookingData.checkIn}</span>
                    </div>
                    <div>
                      <span className="font-medium">Check-out: </span>
                      <span>{bookingData.checkOut}</span>
                    </div>
                    <div>
                      <span className="font-medium">Room Type: </span>
                      <span>{bookingData.roomName}</span>
                    </div>
                    <div>
                      <span className="font-medium">Total Paid: </span>
                      <span className="text-green-600 font-semibold">₦{bookingData.totalAmount?.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {bookingData.requests && (
                <div>
                  <h3 className="font-semibold text-lg border-b pb-2 mb-2">Special Requests</h3>
                  <p className="text-gray-600">{bookingData.requests}</p>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Button variant="outline" className="flex items-center justify-center">
              <Download className="mr-2 h-4 w-4" />
              Download Receipt
            </Button>
            <Button variant="outline" className="flex items-center justify-center">
              <Calendar className="mr-2 h-4 w-4" />
              Add to Calendar
            </Button>
            <Link to="/" className="w-full">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="font-semibold text-lg mb-2">What's Next?</h3>
            <p className="text-gray-700 mb-4">
              A confirmation email has been sent to {bookingData.email}. Please bring a valid ID for check-in.
            </p>
            <p className="text-sm text-gray-600">
              For any changes or questions, contact us at +234 123 456 7890 or info@azurehavenresort.com
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingSuccessPage;
