import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 48, height: 48 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 48,
          height: 48,
          background: '#1D4ED8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
        }}
      >
        <span
          style={{
            color: '#FFFFFF',
            fontSize: 19,
            fontWeight: 700,
            fontFamily: 'serif',
            letterSpacing: '-0.5px',
          }}
        >
          VT
        </span>
      </div>
    ),
    { width: 48, height: 48 }
  );
}
