import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: '#1D4ED8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 30,
        }}
      >
        <span
          style={{
            color: '#FFFFFF',
            fontSize: 76,
            fontWeight: 700,
            fontFamily: 'serif',
            letterSpacing: '-3px',
          }}
        >
          VT
        </span>
      </div>
    ),
    { width: 180, height: 180 }
  );
}
