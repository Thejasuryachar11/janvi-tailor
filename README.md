# Luxor - Premium Bespoke Tailoring Website

A luxury fashion brand website featuring advanced 3D parallax effects, fabric wave animations, smooth page transitions, and optimized image galleries. Built with Next.js 16, React 19, and Tailwind CSS.

## ✨ Features

### Advanced Visual Effects
- **3D Parallax Hero Section** - Interactive mouse-tracking parallax with multiple depth layers
- **Fabric Wave Canvas Animation** - Custom HTML5 canvas with flowing fabric wave effect and animated particles
- **Smooth Page Transitions** - Elegant fade-in animations with staggered entrance effects
- **Scroll-Based Parallax** - Depth effects that respond to scroll position
- **Interactive Hover States** - Gallery items with smooth zoom and overlay transitions

### Premium Design System
- **Luxury Color Palette** - Black (#0d0d0d) with gold accents (#c9a961) and sophisticated grays
- **Serif Typography** - Playfair Display for headlines, Lora for body text (high-end aesthetic)
- **Refined Spacing** - Generous whitespace and elegant proportions throughout
- **Responsive Grid** - Mobile-first design that works seamlessly across all devices
- **Glass Morphism** - Frosted glass navigation bar with backdrop blur

### Performance Optimized
- **Image Optimization** - Next.js Image component with lazy loading and responsive srcsets
- **Dynamic Imports** - Canvas and 3D components loaded client-side for performance
- **Smooth Animations** - GPU-accelerated CSS transforms and canvas rendering
- **Minimal Dependencies** - Leverages native HTML5 Canvas and CSS animations

## 🚀 Getting Started

### Installation

```bash
# Using the shadcn CLI (recommended)
npx shadcn-init@latest

# Or clone and install manually
npm install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### Build for Production

```bash
npm run build
npm start
# or
pnpm build
pnpm start
```

## 📁 Project Structure

```
├── app/
│   ├── globals.css           # Design tokens & luxury color system
│   ├── layout.tsx            # Root layout with fonts
│   └── page.tsx              # Main home page
├── components/
│   ├── fabric-wave-canvas.tsx     # Canvas animation component
│   ├── parallax-hero.tsx           # 3D parallax hero section
│   ├── page-transition.tsx         # Page transition wrapper
│   ├── scroll-reveal.tsx           # Scroll-triggered animations
│   ├── optimized-image.tsx         # Image optimization component
│   └── ui/                         # shadcn UI components
├── public/
│   └── tailoring-*.jpg             # Gallery images (6 optimized images)
├── styles/                    # Additional styles
└── tailwind.config.ts        # Tailwind configuration
```

## 🎨 Design System

### Color Palette
- **Background**: `#0d0d0d` (Deep Black)
- **Foreground**: `#f5f5f5` (Off White)
- **Primary (Gold)**: `#c9a961` (Luxury Accent)
- **Secondary**: `#2a2a2a` (Dark Gray)
- **Gold Highlight**: `#d4af37` (Bright Gold)

### Typography
- **Headings**: Playfair Display (Serif, elegant)
- **Body**: Lora (Serif, readable)
- **Weights**: Regular (400), Semi-Bold (600), Bold (700)

### Spacing System
Built on Tailwind's scale (4px base unit):
- Tight: 4-8px
- Default: 16-24px
- Loose: 32-48px
- Extra: 64px+

## 🎬 Animation Features

### Hero Section
- Mouse-tracking parallax layers
- Scroll-responsive depth effects
- Staggered text entrance animations
- Interactive hover states

### Fabric Wave Section
- Custom HTML5 Canvas animation
- Wave frequency: 0.005
- Amplitude: 60px
- Multiple particle layers
- Infinite loop with time-based variations

### Gallery
- Hover-triggered image zoom (1.1x scale)
- Fade-in overlay with text
- Smooth transitions (500ms duration)
- Lazy-loaded images with blur-up placeholder

## 📸 Gallery Images

The project includes 6 optimized tailoring images:
1. **tailoring-1.jpg** - Fine hand-stitching detail
2. **tailoring-2.jpg** - Finished bespoke suit
3. **tailoring-3.jpg** - Premium fabric selection
4. **tailoring-4.jpg** - Luxury boutique interior
5. **tailoring-5.jpg** - Professional fitting service
6. **tailoring-6.jpg** - Fine menswear collection

Images are automatically optimized using Next.js Image component with:
- Quality: 85% (optimal balance)
- Lazy loading enabled
- Responsive srcsets
- Blur-up placeholder during load

## 🔧 Customization

### Updating Colors
Edit `/app/globals.css` CSS variables:

```css
:root {
  --background: #0d0d0d;
  --primary: #c9a961;
  /* ... other colors ... */
}
```

### Modifying Animations
- **Duration**: Edit animation `@keyframes` in `globals.css`
- **Parallax Speed**: Adjust multipliers in `parallax-hero.tsx`
- **Wave Effect**: Modify `frequency`, `amplitude`, `speed` in `fabric-wave-canvas.tsx`

### Replacing Content
1. Update gallery images in `/public`
2. Change company name and contact info in `page.tsx`
3. Modify service descriptions and sections
4. Update fonts in `layout.tsx`

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- **Mobile**: < 768px (single column, stacked layout)
- **Tablet**: 768px - 1024px (2-column grid)
- **Desktop**: 1024px+ (3-column grid, full features)

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

The project works with any Node.js hosting:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway
- etc.

## 📝 License

This project is open source and available under the MIT License.

## 🎯 Performance Tips

1. **Images**: All images are pre-optimized via Next.js Image component
2. **Animations**: Hardware-accelerated using CSS transforms
3. **Canvas**: Only runs when visible on viewport
4. **Fonts**: Using variable fonts loaded from Google Fonts
5. **Bundle**: Minimal dependencies - mostly built-in features

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [MDN Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

---

Built with passion for luxury brands. Transform your vision into elegant digital experiences. ✨
