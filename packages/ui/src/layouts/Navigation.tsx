import React from 'react';
import Link from 'next/link';
import { Button } from '../base/Button';
import * as styles from '../styles/navigation.css';

export interface NavigationProps {
  appName: string;
  isClient?: boolean;
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ appName, isClient = false, className }) => {
  return (
    <nav className={[styles.navigation, className].filter(Boolean).join(' ')}>
      <Link href="/" className={styles.logo}>
        {appName}
      </Link>

      <div className={styles.navLinks}>
        <Link href="/" className={styles.navLink}>
          홈
        </Link>
        <Link href="/feed" className={styles.navLink}>
          피드
        </Link>
        <Button variant="outline" size="sm">
          로그인
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
