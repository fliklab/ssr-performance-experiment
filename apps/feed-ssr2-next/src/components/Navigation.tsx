import Link from 'next/link';
import { Button } from '@ui/base/Button';

export const Navigation = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 0',
      }}
    >
      <Link
        href="/"
        style={{
          fontSize: '20px',
          fontWeight: '700',
          color: '#1f2937',
          textDecoration: 'none',
        }}
      >
        Feed SSR2
      </Link>

      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <Link
          href="/"
          style={{
            color: '#6b7280',
            textDecoration: 'none',
            fontWeight: '500',
          }}
        >
          홈
        </Link>
        <Link
          href="/feed"
          style={{
            color: '#6b7280',
            textDecoration: 'none',
            fontWeight: '500',
          }}
        >
          피드
        </Link>
        <Button variant="outline" size="sm">
          로그인
        </Button>
      </div>
    </nav>
  );
};
