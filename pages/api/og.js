import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const { name, id, username, members } = req.nextUrl.searchParams;

  try {
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            width: '1280px',
            height: '720px',
            backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          {/* Card */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '600px',
              background: 'white',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            }}
          >
            {/* Profile Section */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '30px',
              }}
            >
              {/* DP Placeholder */}
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '20px',
                  color: 'white',
                  fontSize: '50px',
                  fontWeight: 'bold',
                }}
              >
                {username?.charAt(0)?.toUpperCase() || 'U'}
              </div>

              {/* Info */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2 style={{ margin: '0', fontSize: '32px', color: '#333' }}>
                  {name || 'UNKNOWN'}
                </h2>
                <p style={{ margin: '5px 0 0 0', fontSize: '18px', color: '#666' }}>
                  @{username || 'N/A'}
                </p>
              </div>
            </div>

            {/* Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '12px 0',
                  borderBottom: '1px solid #eee',
                }}
              >
                <span style={{ fontSize: '18px', color: '#666' }}>ID:</span>
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
                  {id || '000000'}
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '12px 0',
                }}
              >
                <span style={{ fontSize: '18px', color: '#666' }}>Members:</span>
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#667eea' }}>
                  {members || '0'}
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1280,
        height: 720,
      }
    );
  } catch (error) {
    return new Response('Error generating image', { status: 500 });
  }
}
