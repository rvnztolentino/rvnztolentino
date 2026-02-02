import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="relative z-10 select-none text-center">
        {/* Top Left Label */}
        <span className="absolute -top-12 left-1/2 -translate-x-1/2 md:-top-10 md:left-auto md:-left-12 md:translate-x-0 text-xs md:text-sm font-light tracking-[0.2em] text-gray-400 whitespace-nowrap transition-all duration-500">
          I AM
        </span>

        {/* Main Name */}
        <div className="relative inline-block cursor-default">
          <h1 className="font-display font-bold text-[12vw] leading-none tracking-tighter text-white mix-blend-overlay opacity-90 transition-opacity duration-300">
            RENZ
          </h1>
        </div>

        {/* Bottom Right Label */}
        <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 md:-bottom-10 md:left-auto md:-right-12 md:translate-x-0 text-xs md:text-sm font-light tracking-[0.2em] text-gray-400 text-center md:text-right md:whitespace-nowrap transition-all duration-500">
          SOFTWARE<br className="md:hidden" /> ENGINEER
        </span>
      </div>
    </section>
  );
};

export default Hero;