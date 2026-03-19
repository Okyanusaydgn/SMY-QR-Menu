# Kahve Durağı — QR Menü Sistemi

Kafeler ve küçük işletmeler için QR tabanlı modern landing page sistemi.

## Kurulum

```bash
npm install
npm run dev
```

## Teknolojiler
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Supabase** (veritabanı)
- **Vercel** (deploy)
- **qrcode** (QR oluşturma)
- **framer-motion** (animasyonlar)
- **lucide-react** (ikonlar)

## Proje Yapısı

```
kahve-duragi/
├── DEMO.html                    ← Canlı demo (tarayıcıda açın)
├── app/
│   ├── layout.tsx               ← Root layout
│   ├── page.tsx                 ← Ana sayfa
│   └── globals.css
├── components/
│   ├── ui/
│   │   ├── Announcement.tsx     ← Üst duyuru bandı
│   │   └── AuroraBackground.tsx ← Aurora gradient efekti
│   └── sections/
│       ├── Navbar.tsx           ← Navigasyon
│       ├── HeroSection.tsx      ← Scroll-expand hero
│       ├── CategorySection.tsx  ← Kategori kartları
│       ├── FeaturedSection.tsx  ← Öne çıkan ürünler
│       ├── MenuSection.tsx      ← Filtreli menü
│       ├── QRCtaSection.tsx     ← Premium QR CTA
│       └── Footer.tsx           ← Footer
├── lib/
│   ├── data.ts                  ← Demo verisi
│   └── utils.ts                 ← Yardımcı fonksiyonlar
└── types/
    └── index.ts                 ← TypeScript tipleri
```

## Demo

`DEMO.html` dosyasını doğrudan tarayıcınızda açarak tüm sayfayı görebilirsiniz.

## Deploy

```bash
npm run build
vercel deploy
```

## Özellikler

- ✅ 3 şablon: Menü / Hizmet / Ürün
- ✅ QR kod oluşturma
- ✅ Scroll-expand hero animasyonu
- ✅ Kategori sayfaları
- ✅ Testimonials marquee
- ✅ Pricing section
- ✅ Premium CTA section
- ✅ Responsive (mobile-first)
- ✅ Dark mode uyumlu footer

