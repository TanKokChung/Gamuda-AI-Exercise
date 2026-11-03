import React, { useState } from 'react';



function Contact() {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <div>
        <h2>
            The contact number is 12301002921
        </h2>
        <button onClick={() => setIsOpen(true)}>
            Click here to contact me!
      </button>

      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)} // Close when clicking background
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}
        >
          <div style={{ position: 'relative' }}>
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '-30px',
                right: '0',
                background: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '25px',
                height: '25px',
                cursor: 'pointer'
              }}
            >
              ✕
            </button>
            <img 
              src="https://media.tenor.com/x7nB9sr4hvIAAAAM/sad-blackish.gif" 
              alt="Popup view" 
              style={{ maxWidth: '90vw', maxHeight: '80vh', borderRadius: '8px' }}
            />
            </div>
            </div>
      )}
    </div>
    );
}

export default Contact;