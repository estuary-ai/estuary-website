import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rippleCount = 0;
    
    const handleScroll = () => {
      if (rippleCount % 100 === 0) {
        createRandomRipple();
      }
      rippleCount++;
    };

    const createRandomRipple = () => {
      if (!containerRef.current) return;
      
      const ripple = document.createElement('div');
      ripple.className = 'water-ripple';
      ripple.style.left = Math.random() * 100 + '%';
      ripple.style.top = Math.random() * 100 + '%';
      ripple.style.width = (20 + Math.random() * 40) + 'px';
      ripple.style.height = ripple.style.width;
      
      containerRef.current.appendChild(ripple);
      
      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.remove();
        }
      }, 4000);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Reeds */}
      <div className="reed" style={{ left: '5%', bottom: 0, height: '120px', animationDelay: '0s' }} />
      <div className="reed" style={{ left: '8%', bottom: 0, height: '100px', animationDelay: '-1s' }} />
      <div className="reed" style={{ left: '92%', bottom: 0, height: '140px', animationDelay: '-2s' }} />
      <div className="reed" style={{ left: '95%', bottom: 0, height: '110px', animationDelay: '-0.5s' }} />
      
      {/* Initial water ripples */}
      <div className="water-ripple" style={{ left: '20%', top: '70%', width: '60px', height: '60px', animationDelay: '0s' }} />
      <div className="water-ripple" style={{ left: '80%', top: '80%', width: '40px', height: '40px', animationDelay: '-2s' }} />
      
      {/* Floating character doodles */}
      <div className="floating-character character-doodle" style={{ left: '15%', top: '20%', animationDelay: '-1s' }} />
      <div className="floating-character character-doodle" style={{ right: '20%', top: '60%', animationDelay: '-3s' }} />
    </div>
  );
}
