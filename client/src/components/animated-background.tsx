import { useEffect, useRef, useState } from "react";

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let rippleCount = 0;
    
    const handleScroll = () => {
      // Find the hero section
      const hero = document.getElementById('home');
      if (hero) {
        const rect = hero.getBoundingClientRect();
        // Fade out over half the hero section height
        let fade = 1;
        if (rect.top < 0) {
          fade = Math.max(0, 1 - Math.abs(rect.top) / (rect.height / 2));
        }
        setOpacity(fade);
      }
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
    window.addEventListener('resize', handleScroll);
    handleScroll(); // set initial opacity
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      style={{ opacity, transition: 'opacity 0.5s' }}
    >
      {/* Reeds */}
      <div className="reed" style={{ left: '5%', bottom: 0, height: '120px', animationDelay: '0s' }} />
      <div className="reed" style={{ left: '8%', bottom: 0, height: '100px', animationDelay: '-1s' }} />
      <div className="reed" style={{ left: '92%', bottom: 0, height: '140px', animationDelay: '-2s' }} />
      <div className="reed" style={{ left: '95%', bottom: 0, height: '110px', animationDelay: '-0.5s' }} />
      {/* Additional reeds for more visibility */}
      <div className="reed" style={{ left: '15%', bottom: 0, height: '90px', animationDelay: '-1.5s' }} />
      <div className="reed" style={{ left: '85%', bottom: 0, height: '130px', animationDelay: '-0.8s' }} />
      {/* Initial water ripples */}
      <div className="water-ripple" style={{ left: '20%', top: '70%', width: '60px', height: '60px', animationDelay: '0s' }} />
      <div className="water-ripple" style={{ left: '80%', top: '80%', width: '40px', height: '40px', animationDelay: '-2s' }} />
    </div>
  );
}
