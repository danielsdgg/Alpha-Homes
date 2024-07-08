import React from 'react';
import Booking from './Booking';

const BookingsList = () => {
  const [bookings,] = ([]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        bookings.map((booking, index) => (
          <div key={index} className="mb-4">
            <p className="text-xl font-bold">{booking.property.name}</p>
            <p>Date: {booking.date}</p>
            <p>Price: ${booking.property.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default BookingsList;
