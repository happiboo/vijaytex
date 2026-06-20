import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Vijay Tex — Cone Disks, Cone Inserts & Cone Washers for Textile Spinning Mills';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#FFFFFF',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px 80px',
          position: 'relative',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Left blue accent bar */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '6px',
          background: '#1D4ED8',
          display: 'flex',
        }} />

        {/* Right subtle grid texture */}
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '420px',
          background: 'linear-gradient(135deg, rgba(29,78,216,0.04) 0%, transparent 60%)',
          display: 'flex',
        }} />

        {/* Top label */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '13px',
          letterSpacing: '3px',
          color: '#9CA3AF',
          fontFamily: 'monospace',
          textTransform: 'uppercase',
        }}>
          <div style={{
            width: '20px',
            height: '1px',
            background: '#1D4ED8',
            marginRight: '12px',
            flexShrink: 0,
            display: 'flex',
          }} />
          Estd. 1996 · Coimbatore, Tamil Nadu, India
        </div>

        {/* Brand name — large, bold identity */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{
            fontSize: '148px',
            fontWeight: '400',
            letterSpacing: '-4px',
            color: '#111827',
            lineHeight: '0.85',
            display: 'flex',
          }}>
            VIJAY
          </div>
          <div style={{
            fontSize: '148px',
            fontWeight: '400',
            fontStyle: 'italic',
            letterSpacing: '-4px',
            color: '#1D4ED8',
            lineHeight: '0.85',
            display: 'flex',
          }}>
            TEX
          </div>
        </div>

        {/* Tagline */}
        <div style={{
          fontSize: '19px',
          color: '#6B7280',
          fontFamily: 'sans-serif',
          letterSpacing: '0.3px',
          display: 'flex',
          marginTop: '-8px',
        }}>
          Precision cone disks, cone inserts, PP twine &amp; cone covers for spinning mills.
        </div>

        {/* Bottom row: products + stat box */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '28px',
          borderTop: '1px solid #E5E7EB',
        }}>
          {/* Product list */}
          <div style={{ display: 'flex', gap: '0', alignItems: 'center' }}>
            {[
              'Yarn Cone Disc',
              'PP Plastic Twine',
              'Yarn Cone Cover',
            ].map((name, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '13px',
                  fontFamily: 'monospace',
                  letterSpacing: '1.5px',
                  color: '#374151',
                  textTransform: 'uppercase',
                  marginRight: i < 2 ? '36px' : '0',
                }}
              >
                <div style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#1D4ED8',
                  marginRight: '10px',
                  display: 'flex',
                  flexShrink: 0,
                }} />
                {name}
              </div>
            ))}
          </div>

          {/* Stat box */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '18px 32px',
            border: '1px solid #E5E7EB',
          }}>
            <div style={{
              fontSize: '44px',
              fontWeight: '500',
              color: '#111827',
              lineHeight: '1',
              display: 'flex',
            }}>
              150+
            </div>
            <div style={{
              fontSize: '11px',
              fontFamily: 'monospace',
              letterSpacing: '2.5px',
              color: '#9CA3AF',
              textTransform: 'uppercase',
              marginTop: '6px',
              display: 'flex',
            }}>
              MILLS SERVED
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
