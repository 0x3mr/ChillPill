import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
const Button = ({ children, className, onClick, ...props } : ButtonProps) => {
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

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12H6V14H12V12ZM18 12H12V14H18V12ZM20 10C20 10.5304 19.7893 11.0391 19.4142 11.4142C19.0391 11.7893 18.5304 12 18 12V14C19.0609 14 20.0783 13.5786 20.8284 12.8284C21.5786 12.0783 22 11.0609 22 10H20ZM18 8C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10H22C22 8.93913 21.5786 7.92172 20.8284 7.17157C20.0783 6.42143 19.0609 6 18 6V8ZM17.476 5.545C17.0023 4.48896 16.2333 3.59243 15.2618 2.96346C14.2902 2.33448 13.1574 1.99989 12 2V4C12.7719 3.99964 13.5275 4.22265 14.1755 4.64211C14.8235 5.06158 15.3363 5.65959 15.652 6.364L17.476 5.545ZM12 2C10.8426 1.99989 9.70984 2.33448 8.73825 2.96346C7.76666 3.59243 6.99769 4.48896 6.524 5.545L8.348 6.365C8.66367 5.66048 9.17643 5.06233 9.82443 4.64269C10.4724 4.22306 11.228 3.99985 12 4V2ZM6 6C4.93913 6 3.92172 6.42143 3.17157 7.17157C2.42143 7.92172 2 8.93913 2 10H4C4 9.46957 4.21071 8.96086 4.58579 8.58579C4.96086 8.21071 5.46957 8 6 8V6ZM2 10C2 11.0609 2.42143 12.0783 3.17157 12.8284C3.92172 13.5786 4.93913 14 6 14V12C5.46957 12 4.96086 11.7893 4.58579 11.4142C4.21071 11.0391 4 10.5304 4 10H2ZM6.524 5.545C6.369 5.89 6.129 6 6 6V8C7.15 8 7.979 7.188 8.348 6.365L6.524 5.545ZM18 6C17.87 6 17.631 5.89 17.476 5.545L15.652 6.364C16.02 7.185 16.849 8 18 8V6Z" fill="black"/>
<path d="M12 19V17M17 20V17M7 21V17" stroke="black" stroke-width="2" stroke-linecap="round"/>
</svg>

      </button>
      <p className="text-center text-white">{children}</p>
    </div>
  );
};
export default Button;