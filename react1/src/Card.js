import React from 'react';
import './Card.css';

const Card = ({ title, description, person, startDate, endDate }) => {
    return (
        <div className="card">
        <h2>{title}</h2>
        <p>Descripción: {description}</p>
        <p>Persona asignada: {person}</p>
        <p>Fecha de inicio: {startDate}</p>
        <p>Fecha de finalización: {endDate}</p>
        </div>
    );
}

export default Card;