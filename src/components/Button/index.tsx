import clsx from 'clsx';
import React from 'react';
import styles from './Button.module.scss'

interface ButtonProps {
    children: React.ReactNode;
    type: 'text' | 'contained' | 'outlined';
  } 

const Button: React.FC<ButtonProps & React.HTMLAttributes<HTMLSpanElement>> = ({children, type,  ...rest}) => {
  return (
    <button className={clsx(styles[type], styles.button)} {...rest}>
      {children}
    </button>
  )
}

export default Button
