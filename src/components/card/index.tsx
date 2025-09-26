import React, { FC, HTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.scss';

type CardProps = {
  children: ReactNode;
  background:
    | 'purple'
    | 'black'
    | 'gradientPurple'
    | 'gray'
    | 'green'
    | 'transparent';
  spacing: 'bigSpacing' | 'mediumSpacing' | 'none';
} & HTMLAttributes<HTMLDivElement>;

export const Card: FC<CardProps> = ({
  background,
  children,
  spacing,
  className,
  ...rest
}) => {
  return (
    <div
      className={`${styles.wrapper} ${styles[background]} ${styles[spacing]} ${
        className ?? ''
      }`}
      {...rest}
    >
      {children}
    </div>
  );
};
