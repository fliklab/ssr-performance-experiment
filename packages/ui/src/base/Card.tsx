import { ReactNode } from 'react';
import * as styles from '../styles/card.css';

export interface CardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Card = ({ children, className, style }: CardProps) => (
  <div className={[styles.card, className].filter(Boolean).join(' ')} style={style}>
    {children}
  </div>
);

export default Card;
