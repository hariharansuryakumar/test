import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Butterflygas = () => {
    const [slots, setSlots] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState(null);

    useEffect(() => {
        const fetchSlots = async () => {
            const response = await axios.get('/api/slots');
            setSlots(response.data);
        };
        fetchSlots();
    }, []);

    const handleBooking = async () => {
        const response = await axios.post('/api/bookings', { userId: 'user_id', slotId: selectedSlot });
        alert('Booking successful');
    };

    return (
        <div>
            <h1>Book a Slot</h1>
            <select onChange={(e) => setSelectedSlot(e.target.value)}>
                <option value="">Select a Slot</option>
                {slots.map(slot => (
                    <option key={slot._id} value={slot._id}>{slot.date} - {slot.time}</option>
                ))}
            </select>
            <button onClick={handleBooking}>Book Slot</button>
        </div>
    );
};

export default Butterflygas;