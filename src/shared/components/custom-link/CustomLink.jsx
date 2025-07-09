import React from 'react';
import { Link } from 'react-router-dom'; 
import './CustomLink.scss';

const CustomLink = ({
  to,
  children,
  variant = 'primary',
  className = '',
  external = false,
}) => {
  const Component = external ? 'a' : Link;
  const linkProps = external
    ? {
        href: to,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {
        to,
      };

  return (
    <Component
      className={`custom-link ${variant} ${className}`}
      {...linkProps}
    >
      {children}
    </Component>
  );
};



export default CustomLink; 