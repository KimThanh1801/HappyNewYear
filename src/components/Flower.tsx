import React from 'react';

const Flower: React.FC = () => {
  const flowers = Array.from({ length: 15 }).map((_, i) => {
    const style = {
      left: `${Math.random() * 100}vw`,
      animationDelay: `${Math.random() * 10}s`,
      animationDuration: `${5 + Math.random() * 5}s`,
      fontSize: `${1 + Math.random()}rem`
    };
    const type = Math.random() > 0.5 ? 'mai' : 'dao'; // dao is the default
    const flowerChar = '🌸'; // Peach blossom
    const className = `flower ${type === 'mai' ? 'mai' : ''}`;
    
    return (
      <div key={i} className={className} style={style}>
        {type === 'mai' ? '🌼' : flowerChar}
      </div>
    );
  });

  return <div className="flower-container">{flowers}</div>;
};

export default Flower;
