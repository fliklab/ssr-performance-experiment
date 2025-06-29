'use client';

import { Button } from '@ui/base/Button';
import { themeClass } from '@ui/styles';

export default function Home() {
  return (
    <div
      className={themeClass}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Feed CSR Next</h1>
      <Button onClick={() => alert('공통 Button 컴포넌트!')}>공통 Button</Button>
    </div>
  );
}
