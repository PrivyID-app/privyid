import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

const WelcomeStep = ({ onNext }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    console.log('WelcomeStep mounted - initializing confetti canvas');
    
    if (canvasRef.current) {
      const myConfetti = confetti.create(canvasRef.current, {
        resize: true,
        useWorker: true
      });

      const timer = setTimeout(() => {
        console.log('Firing explicit confetti...');
        myConfetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 }
        });
      }, 500);

      return () => {
        clearTimeout(timer);
        myConfetti.reset();
      };
    }
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 10000
        }}
      />
      
      <div className="welcome_modal">

        <div className="welcome_header">
            <div className="custom_icon">
              <div className="correct_icon">
                  
              </div>
            </div>
        </div>

        <div className="welcome_body">

            <div className="welcome_title">
                  <p className="welcome_title_text_bg">Welcome Onboard!</p>
                  <p className="welcome_title_text_sm">We are thrilled to have you here. To maximise your experience and start enjoying the thrills of PrivyID, please click on the button below to complete your application.</p>
              </div>

              <button className="login_button" type="submit" onClick={onNext}>Let's Go</button>

        </div>
        
      </div>
    </>
  );
};

export default WelcomeStep;
