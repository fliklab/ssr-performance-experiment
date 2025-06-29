import React from 'react';
import * as styles from '../styles/title.css';

export interface TitleProps {
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Title: React.FC<TitleProps> = ({
  title,
  description,
  align = 'center',
  size = 'lg',
  className,
}) => {
  return (
    <div
      className={[styles.titleWrapper, styles.alignVariants[align], className]
        .filter(Boolean)
        .join(' ')}
    >
      <h1 className={[styles.title, styles.sizeVariants[size]].join(' ')}>{title}</h1>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default Title;
