export default function handler(req, res) {
  const { name, id, username, members } = req.query;

  // Set default values
  const displayName = name || "UNKNOWN";
  const displayId = id || "000000";
  const displayUsername = username || "N/A";
  const displayMembers = members || "0";

  // Background pool
  const backgrounds = [
    "https://files.catbox.moe/apvuau.png",
    // Add more background URLs here
  ];

  const bg = backgrounds[Math.floor(Math.random() * backgrounds.length)];

  // Telegram DP URL
  const dp = displayUsername !== "N/A"
    ? `https://t.me/i/userpic/320/${displayUsername}.jpg`
    : "https://files.catbox.moe/default_dp.png";

  // SVG content
  const svg = `
<svg width="1280" height="720" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <image href="${bg}" width="1280" height="720"/>

  <!-- INFO CARD -->
  <defs>
    <linearGradient id="cardBorder" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#93c5fd"/>
      <stop offset="100%" stop-color="#fbcfe8"/>
    </linearGradient>

    <clipPath id="dpClip">
      <circle cx="210" cy="210" r="78"/>
    </clipPath>
  </defs>

  <!-- Card background -->
  <rect x="50" y="50" rx="26" ry="26"
    width="560" height="620"
    fill="#ffffff" opacity="0.92"/>

  <!-- Card border -->
  <rect x="50" y="50" rx="26" ry="26"
    width="560" height="620"
    fill="none" stroke="url(#cardBorder)" stroke-width="6"/>

  <!-- DP ring -->
  <circle cx="210" cy="210" r="90" fill="#93c5fd"/>
  <circle cx="210" cy="210" r="84" fill="#fbcfe8"/>
  <circle cx="210" cy="210" r="78" fill="#ffffff"/>

  <!-- Profile photo -->
  <image href="${dp}"
    x="132" y="132"
    width="156" height="156"
    clip-path="url(#dpClip)"
    preserveAspectRatio="xMidYMid slice"/>

  <!-- TEXT -->
  <g font-family="Segoe UI, Inter, Arial, sans-serif">

    <text x="110" y="350" font-size="34"
      fill="#2563eb" font-weight="700">
      ➻ NAME » <tspan fill="#0f172a">${displayName}</tspan>
    </text>

    <text x="110" y="410" font-size="30"
      fill="#475569">
      ➻ ID » ${displayId}
    </text>

    <text x="110" y="470" font-size="30"
      fill="#2563eb">
      ➻ U_NAME » <tspan fill="#0f172a">@${displayUsername}</tspan>
    </text>

    <text x="110" y="530" font-size="30"
      fill="#475569">
      ➻ TOTAL MEMBERS » ${displayMembers}
    </text>

  </g>

</svg>
  `;

  // Set response headers
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.status(200).send(svg);
}
