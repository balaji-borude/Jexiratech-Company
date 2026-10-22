import React, { useState, useEffect } from 'react';

export const ScrollPrompt: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let idleTimer: ReturnType<typeof setTimeout>;

    const isNearBottom = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      return scrollY + windowHeight >= docHeight - 120;
    };

    const resetIdle = () => {
      setIsVisible(false);
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        if (!isNearBottom()) {
          setIsVisible(true);
        }
      }, 2500);
    };

    const handleScroll = () => {
      if (isNearBottom()) {
        setIsVisible(false);
      } else {
        resetIdle();
      }
    };

    // User activity listeners across the entire window
    window.addEventListener('mousemove', resetIdle, { passive: true });
    window.addEventListener('keydown', resetIdle, { passive: true });
    window.addEventListener('click', resetIdle, { passive: true });
    window.addEventListener('touchstart', resetIdle, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial trigger when page loads/lands
    idleTimer = setTimeout(() => {
      if (!isNearBottom()) {
        setIsVisible(true);
      }
    }, 2500);

    return () => {
      clearTimeout(idleTimer);
      window.removeEventListener('mousemove', resetIdle);
      window.removeEventListener('keydown', resetIdle);
      window.removeEventListener('click', resetIdle);
      window.removeEventListener('touchstart', resetIdle);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight * 0.75,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-hidden={!isVisible}
    >
      <button
        type="button"
        onClick={handleScrollDown}
        className="flex flex-col items-center gap-1.5 group cursor-pointer bg-transparent border-0 p-2 select-none transition-transform hover:scale-110 active:scale-95"
        title="Scroll down"
        aria-label="Scroll down to explore"
      >
        {/* Transparent Mouse Icon with animated wheel */}
        <div className="relative flex flex-col items-center">
          <svg
            className="w-6 h-10 text-[#124045] dark:text-white transition-colors"
            style={{
              filter:
                'drop-shadow(0 0 6px rgba(255, 255, 255, 0.9)) drop-shadow(0 2px 10px rgba(0, 0, 0, 0.35)) drop-shadow(0 0 12px rgba(43, 179, 190, 0.6))',
            }}
            viewBox="0 0 24 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="2"
              width="20"
              height="36"
              rx="10"
              stroke="currentColor"
              strokeWidth="2.4"
            />
            <line
              x1="12"
              y1="8"
              x2="12"
              y2="15"
              stroke="#2bb3be"
              strokeWidth="2.8"
              strokeLinecap="round"
              className="animate-bounce"
            />
          </svg>

          <span
            className="text-[10px] font-extrabold tracking-widest uppercase text-[#124045] dark:text-white transition-colors mt-1"
            style={{
              textShadow:
                '0 0 6px rgba(255, 255, 255, 0.9), 0 1px 4px rgba(0, 0, 0, 0.5), 0 0 10px rgba(43, 179, 190, 0.5)',
            }}
          >
            Scroll
          </span>
          <svg
            className="w-3.5 h-3.5 text-[#2bb3be] animate-bounce -mt-0.5"
            style={{
              filter: 'drop-shadow(0 0 4px rgba(43, 179, 190, 0.8))',
            }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
    </div>
  );
};
