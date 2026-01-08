# 🎨 OG Image Generator API

Dynamic Open Graph Image Generator powered by Vercel Edge Functions. Generate custom social media cards with Telegram user profiles.

## Features

✅ **Fast & Lightweight** - Runs on Vercel Edge, no headless browser needed
✅ **Customizable** - Pass parameters for dynamic content generation
✅ **SVG-based** - Generates SVG images for Telegram profiles
✅ **Free Hosting** - Deploy on Vercel free tier
✅ **Easy Setup** - One-click Vercel deployment from GitHub

## API Usage

### Base URL
```
https://og-image-generator-vercel.vercel.app/api/og
```

### Query Parameters

| Parameter | Type | Description | Default |
|-----------|------|-------------|----------|
| `name` | string | User's display name | UNKNOWN |
| `id` | string | User ID | 000000 |
| `username` | string | Telegram username | N/A |
| `members` | number | Group/channel members | 0 |

### Example URL
```
https://og-image-generator-vercel.vercel.app/api/og?name=John%20Doe&id=123456&username=johndoe&members=500
```

## Deployment on Vercel

1. **Fork this repository**
2. **Connect to Vercel**: https://vercel.com/new
3. **Select this repository**
4. **Deploy** (automatic on each push)

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Access at http://localhost:3000/api/og?name=Test
```

## Project Structure

```
.
├── pages/
│   └── api/
│       └── og.js          # Main API route
├── public/
│   └── fonts/             # Custom fonts (optional)
├── vercel.json            # Vercel configuration
├── package.json
└── README.md
```

## Configuration

Edit `pages/api/og.js` to:
- Add more background images
- Customize styling & colors
- Add new parameters
- Support different card layouts

## Background Images

Add more backgrounds to the `backgrounds` array in `og.js`:

```javascript
const backgrounds = [
  "https://files.catbox.moe/apvuau.png",
  "https://your-image-url.com/bg2.png",
  "https://your-image-url.com/bg3.png",
];
```

## License

MIT - Feel free to use this project for personal or commercial purposes.

## Support

For issues or feature requests, open an issue on GitHub.
