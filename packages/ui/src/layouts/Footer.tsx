import React from 'react';
import * as styles from '../styles/footer.css';

export interface FooterProps {
  appName: string;
  appType: string;
  renderingMethod: string;
  framework?: string;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({
  appName,
  appType,
  renderingMethod,
  framework = 'Next.js App Router',
  className,
}) => {
  return (
    <div className={[styles.footer, className].filter(Boolean).join(' ')}>
      <p className={styles.copyright}>© 2024 {appName}. SSR 성능 실험 프로젝트입니다.</p>
      <div className={styles.details}>
        <span>{appType}</span>
        <span>•</span>
        <span>{framework}</span>
        <span>•</span>
        <span>{renderingMethod}</span>
      </div>
    </div>
  );
};

export default Footer;
