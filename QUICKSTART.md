# Luxor - Quick Start Guide

## 🚀 5-Minute Setup

### Step 1: Start the Development Server
```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You'll see your luxury fashion website live!

---

## 📸 What You'll See

### Hero Section
- Interactive 3D parallax that responds to mouse movement
- Move your mouse around to see the depth effect
- Beautiful animated text with staggered entrance
- Scroll indicator at the bottom

### Fabric Wave Animation
- Flowing fabric wave effect using HTML5 Canvas
- Golden particles floating across waves
- Smooth, infinite animation
- Luxury aesthetic with premium colors

### Gallery Section
- 6 stunning tailoring images
- Hover over images to see zoom effect and text overlay
- Fully responsive grid layout
- Optimized image loading with blur-up effect

### Rest of the Page
- Services section with interactive cards
- About section with brand story
- Call-to-action sections
- Contact information and footer

---

## 🎨 Key Features Explained

### 1. **3D Parallax Effect**
Watch as you scroll or move your mouse - the background layers move at different speeds, creating a sense of depth. This is implemented with:
- Mouse tracking for interactive parallax
- Scroll-based depth effects
- Multiple animated gradient layers

### 2. **Fabric Wave Animation**
The fabric wave background in the middle section is created with HTML5 Canvas and features:
- Sine wave oscillations
- Multiple wave layers for depth
- Animated particles following the waves
- Real-time animation at 60fps

### 3. **Smooth Transitions**
All elements animate smoothly when:
- Page loads (fade-in effect)
- Scrolling (scroll-triggered reveals)
- Hovering (interactive states)
- Clicking (button interactions)

### 4. **Image Optimization**
All 6 gallery images are:
- Automatically optimized by Next.js
- Lazy loaded (only load when needed)
- Responsive (correct size for each device)
- Display with blur-up effect while loading

---

## 🎨 Customization Basics

### Change Colors
Edit `/app/globals.css` and look for the `:root` section:
```css
:root {
  --background: #0d0d0d;      /* Dark black */
  --primary: #c9a961;         /* Gold accent */
  --foreground: #f5f5f5;      /* Off white text */
}
```

### Change Brand Name
Edit `/app/page.tsx` and find the "LUXOR" text, replace with your brand name.

### Update Contact Info
In `/app/page.tsx`, find the contact section and update:
- Address
- Hours
- Email
- Phone number

### Replace Gallery Images
1. Save your images in `/public/` folder
2. Update the gallery images array in `/app/page.tsx`:
```javascript
const galleryImages = [
  { src: '/your-image-1.jpg', alt: 'Description' },
  { src: '/your-image-2.jpg', alt: 'Description' },
  // ...
]
```

---

## 📁 Project Structure

```
Luxor/
├── app/
│   ├── page.tsx              ← Main page (edit content here)
│   ├── layout.tsx            ← Root layout (fonts, metadata)
│   └── globals.css           ← Colors, animations, styles
├── components/
│   ├── fabric-wave-canvas.tsx    ← Fabric wave animation
│   ├── parallax-hero.tsx         ← 3D parallax section
│   ├── scroll-reveal.tsx         ← Scroll animations
│   └── (other components...)
├── public/
│   ├── tailoring-1.jpg       ← Gallery images
│   ├── tailoring-2.jpg
│   └── (more images...)
└── README.md                 ← Full documentation
```

---

## 🌐 Deploy to Vercel (Recommended)

### Option 1: One-Click Deploy
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"
6. Done! Your site is live!

### Option 2: CLI Deploy
```bash
npm install -g vercel
vercel
```
Follow the prompts and your site will be deployed.

---

## ✨ Pro Tips

### Improve Load Time
- The app already optimizes images automatically
- Hero and wave animations only run on the client
- Fonts are cached by browsers

### Mobile Testing
- Open your site on your phone
- All animations work smoothly on mobile
- Navigation becomes a hamburger menu on small screens

### Dark Mode
- Site is always in dark mode (luxury aesthetic)
- Colors are optimized for dark backgrounds
- Text is high contrast for readability

### Browser DevTools
Open browser DevTools (F12) and:
- Check Network tab to see optimized image sizes
- Use Performance tab to see smooth 60fps animations
- Inspect elements to understand structure

---

## 🔧 Common Tasks

### Change Section Backgrounds
Find the section in `page.tsx` and modify the `bg-` class:
```jsx
<section className="py-24 bg-background">  {/* bg-background = dark */}
  {/* ... */}
</section>

<section className="py-24 bg-secondary">   {/* bg-secondary = darker */}
  {/* ... */}
</section>
```

### Add New Sections
Copy the structure of an existing section and paste it. All styling will automatically match the luxury theme.

### Adjust Animation Speed
Edit `/app/globals.css` and find the `@keyframes` section:
```css
@keyframes slideUp {
  from { /* ... */ }
  to { /* ... */ }
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out;  /* Change 0.8s to faster/slower */
}
```

### Change Fonts
Edit `/app/layout.tsx`:
```javascript
import { YourFont1, YourFont2 } from 'next/font/google'

const yourFont1 = YourFont1({ subsets: ["latin"], variable: '--font-serif' });
const yourFont2 = YourFont2({ subsets: ["latin"], variable: '--font-sans' });
```

---

## 📱 Responsive Design

Your site looks perfect on:
- **Desktop** (1024px+): Full features, 3 column grid
- **Tablet** (768px-1024px): 2 column grid
- **Mobile** (<768px): Single column, hamburger menu

All images scale automatically. Test on mobile by:
1. Opening in Chrome DevTools (F12)
2. Clicking device icon (top left)
3. Selecting "iPhone" or other device

---

## 🐛 Troubleshooting

### Animations Look Janky
- Check your browser version (Chrome 90+, Firefox 88+)
- Close other browser tabs to free up CPU
- Disable browser extensions

### Images Look Blurry
- Wait for page to fully load
- Clear browser cache (Ctrl+Shift+Delete)
- Images should be sharp after a few seconds

### Colors Look Different
- This is expected on different monitors
- Monitor color calibration affects display
- Colors are verified to look good on most screens

### Mobile Menu Not Working
- Refresh the page
- Check browser console for errors (F12)
- Try a different browser

---

## 📞 Need Help?

### Check These Resources
1. **README.md** - Full technical documentation
2. **BUILD_SUMMARY.md** - Detailed implementation report
3. **Component files** - Well-commented code
4. **Tailwind Docs** - https://tailwindcss.com
5. **Next.js Docs** - https://nextjs.org

### Common Questions

**Q: Can I change the gold color?**
A: Yes! Edit `--primary: #c9a961` in `/app/globals.css`

**Q: How do I add more gallery images?**
A: Add images to `/public/` and update the `galleryImages` array in `/app/page.tsx`

**Q: Can I remove the parallax effect?**
A: Yes, but it's a key feature. Consider keeping it - users love it!

**Q: How do I change the company name?**
A: Find "LUXOR" in `/app/page.tsx` and replace it everywhere it appears.

---

## 🎉 You're Ready!

Your luxury fashion brand website is:
- ✅ Live and running
- ✅ Fully responsive
- ✅ Beautifully animated
- ✅ Production-ready
- ✅ Ready to customize

Start with small changes and explore the code. Everything is well-documented and easy to modify.

**Happy building! Your luxury brand awaits. ✨**

---

Next steps:
1. Customize colors and text
2. Add your own images
3. Deploy to Vercel
4. Share your site with the world!
