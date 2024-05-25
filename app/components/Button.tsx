import React, { ReactNode } from 'react';
import Cloud_rain from  '../icons/cloud_rain.svg';
import Sound_ico from  '../icons/cloud_rain.svg';
import Cloud from '../icons/cloud.svg';
import trees from '../icons/trees.svg';
import water from '../icons/water_ocean.svg';
import wocean from '../icons/water_ocean.svg';
import fan from '../icons/fan.svg';
import fire from '../icons/fire.svg';
import night from '../icons/night.svg';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  icc?: string;
  onClick?: () => void;
}
const ico_map: { [key: string]: string } = {
  sound: Sound_ico,
  clouds: Cloud,
  rain: Cloud_rain,
  trees: trees,
  water: water,
  fan: fan,
  ocean: wocean,
  fire: fire,
  night: night,
};
const Button = ({ icc, children, className, onClick, ...props } : ButtonProps) => {
  return (
    <div className={`flex flex-col items-center justify-center gap-2 ${className}`}>
      <button
        className={`flex items-center justify-center px-4 py-2 bg-[#B8C37E] text-white font-bold shadow-md hover:bg-[#9AAE6C]`}
        style={{
          borderRadius: '30px',
          width: 94,
          height: 94,
        }}
        onClick={onClick}
        {...props}>
          
      <img src={ico_map[icc!] || ico_map["sound"]} />

      </button>
      <p className="text-center text-white">{children}</p>
    </div>
  );
};
export default Button;