import React from 'react';
import * as styles from '../styles/layout.css';

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  className?: string;
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = 'xl',
  className,
  as: Component = 'div',
  ...props
}) => {
  const containerClasses = [styles.container, styles.maxWidthVariants[maxWidth], className]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={containerClasses} {...props}>
      {children}
    </Component>
  );
};

export default Container;
