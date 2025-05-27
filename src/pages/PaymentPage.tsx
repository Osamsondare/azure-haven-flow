
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CreditCard, Lock, ArrowLeft } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useToast } from '@/hooks/use-toast';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const bookingData = location.state?.bookingData;

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  // If no booking data, redirect back to booking page
  if (!bookingData) {
    navigate('/booking');
    return null;
  }

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

  const selectedRoom = rooms.find(room => room.id === bookingData.selectedRoom);
  const roomPrice = selectedRoom ? parseInt(selectedRoom.price.replace('₦', '').replace(',', '')) : 0;
  const taxAmount = Math.round(roomPrice * 0.075); // 7.5% tax
  const totalAmount = roomPrice + taxAmount;

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate payment processing
    toast({
      title: "Payment Successful!",
      description: "Your booking has been confirmed. You will receive a confirmation email shortly.",
    });

    // Navigate to success page after a delay
    setTimeout(() => {
      navigate('/booking-success', { 
        state: { 
          bookingData: {
            ...bookingData,
            totalAmount,
            confirmationNumber: `AZH${Date.now().toString().slice(-6)}`
          }
        }
      });
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setCardDetails(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate('/booking')}
              className="mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Booking
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Your Payment
            </h1>
            <p className="text-xl text-gray-600">
              Secure payment to confirm your reservation at Azure Haven Resort
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Booking Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="mr-2 h-5 w-5" />
                    Booking Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-900">Guest Name</p>
                      <p className="text-gray-600">{bookingData.firstName} {bookingData.lastName}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">{bookingData.email}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Check-in</p>
                      <p className="text-gray-600">{bookingData.checkIn}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Check-out</p>
                      <p className="text-gray-600">{bookingData.checkOut}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Guests</p>
                      <p className="text-gray-600">{bookingData.guests} {bookingData.guests === 1 ? 'Guest' : 'Guests'}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Room Type</p>
                      <p className="text-gray-600">{selectedRoom?.name}</p>
                    </div>
                  </div>
                  
                  {bookingData.requests && (
                    <div>
                      <p className="font-medium text-gray-900">Special Requests</p>
                      <p className="text-gray-600 text-sm">{bookingData.requests}</p>
                    </div>
                  )}

                  <Separator />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Room Rate</span>
                      <span>₦{roomPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes & Fees</span>
                      <span>₦{taxAmount.toLocaleString()}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total Amount</span>
                      <span>₦{totalAmount.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment Form */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Payment Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePayment} className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardholderName">Cardholder Name</Label>
                        <Input
                          id="cardholderName"
                          placeholder="Full name on card"
                          value={cardDetails.cardholderName}
                          onChange={(e) => handleInputChange('cardholderName', e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={cardDetails.cardNumber}
                          onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                          maxLength={19}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input
                            id="expiryDate"
                            placeholder="MM/YY"
                            value={cardDetails.expiryDate}
                            onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                            maxLength={5}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            value={cardDetails.cvv}
                            onChange={(e) => handleInputChange('cvv', e.target.value)}
                            maxLength={4}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center text-blue-800 text-sm">
                        <Lock className="mr-2 h-4 w-4" />
                        Your payment information is secure and encrypted
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3"
                    >
                      Pay ₦{totalAmount.toLocaleString()} - Complete Booking
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="text-center text-sm text-gray-500">
                <p>By completing this payment, you agree to our terms and conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PaymentPage;
