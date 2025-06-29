import React from 'react';
import * as styles from '../styles/layout.css';
import { Container } from './Container';

export interface PageLayoutProps {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  maxWidth = 'xl',
  header,
  footer,
  className,
}) => {
  return (
    <div className={[styles.pageWrapper, className].filter(Boolean).join(' ')}>
      {header && (
        <header className={styles.header}>
          <Container maxWidth={maxWidth}>{header}</Container>
        </header>
      )}

      <main className={styles.mainContent}>
        <Container maxWidth={maxWidth}>{children}</Container>
      </main>

      {footer && (
        <footer className={styles.footer}>
          <Container maxWidth={maxWidth}>{footer}</Container>
        </footer>
      )}
    </div>
  );
};

export default PageLayout;
