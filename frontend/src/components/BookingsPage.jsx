import React from 'react';

const BookingsPage = ({ bookedProperties }) => {
    if (!bookedProperties){
        return <p>Loading...</p>;
    }
    return (
        <div>
            <h2>Booked Properties</h2>
            <ul>
                {bookedProperties.map((booking, index) => (
                    <li key={index}>
                        <p>Date: {booking.date}</p>
                        <p>Price: {booking.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookingsPage;
