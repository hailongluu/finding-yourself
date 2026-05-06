import React from 'react';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  className = '',
  ...props
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary-navy to-accent-purple text-white hover:scale-105 focus:ring-accent-purple',
    secondary: 'bg-white text-primary-navy border-2 border-primary-navy hover:bg-primary-50 focus:ring-primary-navy',
    outline: 'bg-transparent text-primary-navy border-2 border-primary-200 hover:border-primary-navy hover:bg-primary-50 focus:ring-primary-navy',
    ghost: 'bg-transparent text-primary-navy hover:bg-primary-50 focus:ring-primary-navy'
  };

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
