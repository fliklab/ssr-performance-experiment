import { ReactNode } from 'react';
import * as styles from '../styles/typography.css';

export type TypographyVariant = 'heading' | 'body' | 'caption';

export interface TypographyProps {
  children: ReactNode;
  variant?: TypographyVariant;
  weight?: 'normal' | 'bold';
  color?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  style?: React.CSSProperties;
}

export const Typography = ({
  children,
  variant = 'body',
  weight = 'normal',
  color,
  align = 'left',
  className,
  style,
}: TypographyProps) => (
  <span
    className={[styles.typography, styles[variant], weight === 'bold' ? styles.bold : '', className]
      .filter(Boolean)
      .join(' ')}
    style={{ color, textAlign: align, ...style }}
  >
    {children}
  </span>
);

export default Typography;
