export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  emoji: string;
  badge?: "Yeni" | "Popüler" | "Özel";
  rating?: number;
  reviewCount?: number;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  count: number;
  gradient: string;
}

export interface Business {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  logo: string;
  coverEmoji: string;
  phone: string;
  address: string;
  hours: string;
  rating: number;
  reviewCount: number;
  categories: Category[];
  featuredItems: MenuItem[];
  menuItems: MenuItem[];
}
