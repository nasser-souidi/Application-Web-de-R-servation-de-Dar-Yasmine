
import React, { useState } from 'react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const timeSlots = [
  '12:00', '12:30', '13:00', '13:30', '14:00', 
  '19:00', '19:30', '20:00', '20:30', '21:00'
];

const ReservationForm: React.FC = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string>('');
  const [guests, setGuests] = useState<string>('2');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !time || !name || !email || !phone) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, this would send the reservation data to a backend
    console.log({
      date,
      time,
      guests,
      name,
      email,
      phone,
      specialRequest
    });
    
    toast({
      title: "Reservation received!",
      description: `Thank you ${name}, your table for ${guests} on ${format(date, 'PP')} at ${time} has been reserved.`,
    });
    
    // Reset form
    setDate(undefined);
    setTime('');
    setGuests('2');
    setName('');
    setEmail('');
    setPhone('');
    setSpecialRequest('');
  };

  return (
    <section id="reservation" className="py-20 bg-tunisia-sand/20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Book a Table</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Reserve your table for an unforgettable dining experience with authentic Tunisian cuisine.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Date Selection */}
              <div className="space-y-2">
                <Label htmlFor="date">Date*</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) => {
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        return date < today;
                      }}
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              {/* Time Selection */}
              <div className="space-y-2">
                <Label htmlFor="time">Time*</Label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger id="time" className="w-full">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Number of Guests */}
              <div className="space-y-2">
                <Label htmlFor="guests">Number of Guests*</Label>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger id="guests" className="w-full">
                    <SelectValue placeholder="Select number of guests" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? 'person' : 'people'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Full Name*</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>
              
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address*</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                />
              </div>
              
              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number*</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your phone number"
                  required
                />
              </div>
              
              {/* Special Request */}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="specialRequest">Special Request</Label>
                <Input
                  id="specialRequest"
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                  placeholder="Any special requests or dietary requirements"
                />
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full bg-tunisia-terracotta hover:bg-tunisia-coral text-white py-6 text-lg"
              >
                Confirm Reservation
              </Button>
            </div>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              * Required fields. You will receive a confirmation email once your reservation is confirmed.
            </p>
          </form>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-tunisian-pattern opacity-10" />
    </section>
  );
};

export default ReservationForm;
