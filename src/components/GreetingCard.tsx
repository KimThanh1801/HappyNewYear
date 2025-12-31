import React from 'react';

interface GreetingCardProps {
  message: string;
  background: string;
}

const GreetingCard: React.FC<GreetingCardProps> = ({ message, background }) => (
  <div className={`card ${background}`}>
    <h1>Happy New Year 2026!</h1>
    <p>{message}</p>
  </div>
);

export default GreetingCard;
