import React, { useState } from 'react';
import Header from './components/Header';
const UpdateDetails = () => {
    const [adultos, setAdultos] = useState('0');
    const [ninos, setNinos] = useState('0');

    const handleAdultosChange = (e) => {
        setAdultos(e.target.value);
    };

    const handleNinosChange = (e) => {
        setNinos(e.target.value);
    };

    return (
        <div>
            <label htmlFor="adultos">Adultos:</label>
            <input
                type="number"
                id="adultos"
                name="adultos"
                min="0"
                value={adultos}
                onChange={handleAdultosChange}
            />
            <br />
            <label htmlFor="ninos">Niños:</label>
            <input
                type="number"
                id="ninos"
                name="ninos"
                min="0"
                value={ninos}
                onChange={handleNinosChange}
            />
        </div>
    );
};

export default UpdateDetails;