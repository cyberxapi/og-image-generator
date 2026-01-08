// For direct bot compatibility - same as og.js but ensuring proper PNG headers
import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get('name') || 'UNKNOWN';
    const id = searchParams.get('id') || '000000';
    const username = searchParams.get('username') || 'N/A';
    const members = searchParams.get('members') || '0';

    const initials = username?.charAt(0)?.toUpperCase() || 'U';

    const image = new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            width: '1200px',
            height: '630px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '90%',
              maxWidth: '1000px',
              background: 'white',
              borderRadius: '32px',
              padding: '60px',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '40px' }}>
              <div
                style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '64px',
                  fontWeight: 'bold',
                }}
              >
                {initials}
              </div>
              <div>
                <div style={{ fontSize: '48px', fontWeight: '800', color: '#1a1a1a', marginBottom: '12px' }}>
                  {name}
                </div>
                <div style={{ fontSize: '24px', color: '#666' }}>@{username}</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              <div style={{ padding: '20px', background: '#f5f5f5', borderRadius: '12px', borderLeft: '4px solid #667eea' }}>
                <div style={{ fontSize: '14px', color: '#888', marginBottom: '8px' }}>User ID</div>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a1a1a' }}>{id}</div>
              </div>
              <div style={{ padding: '20px', background: '#f5f5f5', borderRadius: '12px', borderLeft: '4px solid #764ba2' }}>
                <div style={{ fontSize: '14px', color: '#888', marginBottom: '8px' }}>Members</div>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#764ba2' }}>
                  {parseInt(members).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    );

    return image;
  } catch (e) {
    console.error('Image generation error:', e);
    return new Response('Failed to generate image', { status: 500 });
  }
}
