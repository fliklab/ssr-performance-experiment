export const Footer = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        color: '#6b7280',
        fontSize: '14px',
        padding: '16px 0',
      }}
    >
      <p style={{ margin: 0 }}>© 2024 Feed CSR Next. SSR 성능 실험 프로젝트입니다.</p>
      <div
        style={{
          marginTop: '8px',
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
        }}
      >
        <span>CSR 방식</span>
        <span>•</span>
        <span>Next.js App Router</span>
        <span>•</span>
        <span>Client-side Rendering</span>
      </div>
    </div>
  );
};
