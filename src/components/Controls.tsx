import React from 'react';

interface ControlsProps {
  message: string;
  setMessage: (message: string) => void;
  setBackground: (background: string) => void;
}

const Controls: React.FC<ControlsProps> = ({ message, setMessage, setBackground }) => (
  <div className="controls">
    <label htmlFor="custom-message">Customize your wish:</label>
    <textarea
      id="custom-message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Write your personal greeting..."
    />
    <div className="background-options">
      <button onClick={() => setBackground('bg1')} title="Crimson Red">
        <span className="color-swatch bg1"></span> Red
      </button>
      <button onClick={() => setBackground('bg2')} title="Sunset Orange">
        <span className="color-swatch bg2"></span> Orange
      </button>
      <button onClick={() => setBackground('bg3')} title="Royal Purple">
        <span className="color-swatch bg3"></span> Purple
      </button>
    </div>
  </div>
);

export default Controls;
