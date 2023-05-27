import React, { ReactNode } from 'react';

type buttonPlusProps = {
  children: ReactNode;
  className: string;
  onClick: () => void;
};

const Button = ({ children, className, onClick }: buttonPlusProps) => {
  return (
    <button onClick={onClick} className={className}>
      <span className='inline-flex items-center gap-2 ml-2'>{children}</span>
    </button>
  );
};

export default Button;
