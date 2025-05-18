import React from 'react';

const PizzaCrewLogo = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <span className="font-['Bungee_Shade'] text-[#ff6600] text-5xl md:text-6xl lg:text-8xl" 
        style={{
          textShadow: '4px 4px 0px rgba(0, 0, 0, 0.2)',
        }}>
        Pizza Crew
      </span>
    </div>
  );
};

export default PizzaCrewLogo;