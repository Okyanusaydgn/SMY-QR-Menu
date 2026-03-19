# SMY-QR-Menu

> A modern QR-based digital menu system for cafes and small businesses — built by Simay Technology Club.

![Demo](https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80)

---

## ✨ Features

- 📱 **QR Code Access** — Customers scan and instantly reach the menu
- 🎨 **3 Ready Templates** — Menu / Service / Product pages
- 🖼️ **Real Food Photos** — Beautiful product cards with images
- 🔍 **Category Filter** — Filter by Coffee, Dessert, Sandwich, Cold Drinks
- 💫 **Scroll-Expand Hero** — Cinematic scroll animation on landing
- ⭐ **Testimonials Marquee** — Auto-scrolling customer reviews
- 💳 **Pricing Section** — Monthly / Yearly toggle with 3 plans
- 📊 **Analytics Ready** — Supabase integration for scan tracking
- 📱 **Mobile-First** — Fully responsive design
- ⚡ **Fast** — Next.js ISR + Vercel Edge Network

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 | Framework (App Router) |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Supabase | Database & Auth |
| Framer Motion | Animations |
| Lucide React | Icons |
| qrcode.js | QR generation |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/simayteknoloji/SMY-QR-Menu.git
cd SMY-QR-Menu
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
SMY-QR-Menu/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main landing page
│   └── globals.css
├── components/
│   ├── ui/
│   │   ├── Announcement.tsx       # Top banner
│   │   └── AuroraBackground.tsx   # Gradient effect
│   └── sections/
│       ├── Navbar.tsx             # Navigation bar
│       ├── HeroSection.tsx        # Scroll-expand hero
│       ├── CategorySection.tsx    # Category cards
│       ├── FeaturedSection.tsx    # Featured products
│       ├── MenuSection.tsx        # Filterable menu
│       ├── QRCtaSection.tsx       # QR call-to-action
│       └── Footer.tsx             # Site footer
├── lib/
│   ├── data.ts             # Demo data
│   └── utils.ts            # Helper functions
├── types/
│   └── index.ts            # TypeScript types
├── DEMO.html               # Standalone demo (open in browser)
└── tailwind.config.ts
```

---

## 🎯 How It Works

```
Business registers → QR code generated → Customer scans → Menu loads instantly
```

1. **Business signs up** — chooses a template and slug
2. **QR is generated** — unique link: `qrmenu.io/business-name`
3. **Customer scans** — Next.js dynamic route loads instantly
4. **Analytics logged** — every scan recorded in Supabase

---

## 📸 Preview

Open `DEMO.html` directly in your browser to see the full interactive demo — no installation needed.

---

## 🗺️ Roadmap

- [ ] Admin dashboard
- [ ] Supabase database integration
- [ ] Custom domain support
- [ ] WhatsApp order integration
- [ ] Analytics dashboard with Recharts
- [ ] Multi-language support

---

## 👥 Team

Built with ❤️ by **Simay Technology Club (SMY)**

---

## 📄 License

MIT License — free to use and modify.
