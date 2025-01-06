import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';

type ButtonProps = {
  color?: 'primary' | 'red' | 'white'; // Define button colors
  radius?: 'rounded' | 'pill'; // Define border radius options
  size?: 'small' | 'large';
  icon?: boolean;
  link?: string;
  cssClass?: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  radius = 'rounded',
  size = 'large',
  icon = false,
  link,
  cssClass,
  children,
}) => {
  
  // Define color styles
  const colorClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600',
    white: 'bg-white text-primary-500 border-2 hover:bg-primary-600 hover:text-white',
    red: 'bg-red text-white border-2 border-red hover:bg-white hover:text-red hover:border-2 ',
  };

  // Define radius styles
  const radiusClasses = {
    rounded: 'rounded-md', // Slightly rounded corners
    pill: 'rounded-full',  // Fully rounded corners
  };

  const sizeClasses = {
    large: "px-40 py-12",
    small: "px-40 py-8",
  }

  // Combine styles
  const classes = clsx(
    'bg-primary-500 font-bold text-center hover:bg-primary-700 transition flex w-fit h-fit gap-8 items-center', // Common styles
    sizeClasses[size],
    colorClasses[color],
    radiusClasses[radius],
    cssClass,
  );

  return (
    <Link href={link ?? '/'} className={classes}>
      {children}
      { icon && (
        <Image 
        src="/icons/hugeicons_link-circle white.svg"
        width={27}
        height={27}
        alt="Link Icon" 
        className="object-contain h-full"
      />
      )}
      </Link>        
  );
};

export default Button;
