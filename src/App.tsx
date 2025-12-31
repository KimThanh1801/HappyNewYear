import { useState, useEffect, useMemo } from 'react';
import Confetti from 'react-confetti';
import './App.css';
import GreetingCard from './components/GreetingCard';
import Controls from './components/Controls';
import ShareButton from './components/ShareButton';
import Flower from './components/Flower';


function App() {
  const [message, setMessage] = useState('Wishing you a year full of joy and prosperity.');
  const [background, setBackground] = useState('bg1');
  const [showConfetti, setShowConfetti] = useState(false);
  const [playSound, setPlaySound] = useState(false);

  const audio = useMemo(() => new Audio('/firework.mp3'), []);

  useEffect(() => {
    if (playSound) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [playSound, audio]);

  // Read URL params on initial load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlMessage = params.get('message');
    const urlBackground = params.get('background');
    if (urlMessage) {
      setMessage(decodeURIComponent(urlMessage));
    }
    if (urlBackground) {
      setBackground(urlBackground);
    }
    setShowConfetti(true);
  }, []);

  return (
    <main style={{ backgroundImage: `url(/backgrounds/${background}.jpg)` }}>
      <Flower />
      {showConfetti && <Confetti />}
      <div className="app-container">
        <GreetingCard message={message} background={background} />
        <Controls message={message} setMessage={setMessage} setBackground={setBackground} />
        <div className="actions">
          <ShareButton message={message} background={background} />
          <button onClick={() => setPlaySound(!playSound)} title={playSound ? 'Mute Sound' : 'Play Sound'}>
            {playSound ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <line x1="23" y1="9" x2="17" y2="15"></line>
                <line x1="17" y1="9" x2="23" y2="15"></line>
              </svg>
            )}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
