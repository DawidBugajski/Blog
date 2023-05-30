import React, { ReactNode } from 'react';

type buttonProps = {
  children: ReactNode;
  className: string;
  onClick: () => void;
  disabled?: boolean;
};

function Button({ children, className, onClick }: buttonProps) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
