import { ComponentProps } from 'react';

import clsx from 'clsx';

import { buttonVariants, type ButtonStyles } from './button-variants';

type ButtonProps = ComponentProps<'button'> &
  ButtonStyles & {
    size?: 'small' | 'medium' | 'large';
  };

export const Button = ({
  className,
  size = 'medium',
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button className={buttonVariants({ size, variant, className: clsx(className) })} {...props} />
  );
};
