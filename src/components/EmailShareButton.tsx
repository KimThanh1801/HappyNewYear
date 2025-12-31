import React from 'react';

interface EmailShareButtonProps {
  message: string;
  background: string;
}

const EmailShareButton: React.FC<EmailShareButtonProps> = ({ message, background }) => {
  const handleClick = () => {
    const url = `${window.location.origin}${window.location.pathname}?message=${encodeURIComponent(message)}&background=${background}`;
    const subject = 'A New Year Greeting For You!';
    const body = `I've created a special New Year's greeting for you. Click the link to see it:\n\n${url}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <button onClick={handleClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
      Share via Email
    </button>
  );
};

export default EmailShareButton;
