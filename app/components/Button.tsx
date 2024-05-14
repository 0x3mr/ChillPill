import React from 'react';

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full bg-teal-500 text-white font-bold shadow-md hover:bg-teal-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;