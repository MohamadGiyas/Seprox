export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Website' | 'Mobile' | 'Backend' | 'Skripsi';
  description: string;
  techStack: string[];
  image: string;
  urlDemo?: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: '1',
    title: 'E-Commerce Fashion Store',
    category: 'Website',
    description: 'Platform e-commerce lengkap dengan fitur keranjang, checkout, dan payment gateway.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
    urlDemo: 'https://example.com',
  },
  {
    id: '2',
    title: 'Sistem Informasi Perpustakaan',
    category: 'Skripsi',
    description: 'Aplikasi manajemen perpustakaan dengan fitur peminjaman, pengembalian, dan katalog digital.',
    techStack: ['Laravel', 'MySQL', 'Bootstrap'],
    image: '/public/perpus.png',
    urlDemo: 'https://example.com',
  },
  {
    id: '3',
    title: 'Aplikasi Kasir Resto',
    category: 'Website',
    description: 'POS system untuk restoran dengan manajemen meja, menu, dan laporan penjualan.',
    techStack: ['Vue.js', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600',
    urlDemo: 'https://example.com',
  },
  {
    id: '4',
    title: 'Mobile Banking App',
    category: 'Mobile',
    description: 'Aplikasi mobile banking dengan fitur transfer, pembayaran, dan mutasi rekening.',
    techStack: ['React Native', 'Node.js', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600',
    urlDemo: 'https://example.com',
  },
  {
    id: '5',
    title: 'REST API Marketplace',
    category: 'Backend',
    description: 'API lengkap untuk marketplace dengan autentikasi, CRUD produk, dan order management.',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600',
    urlDemo: 'https://example.com',
  },
  {
    id: '6',
    title: 'Sistem Absensi Karyawan',
    category: 'Website',
    description: 'Aplikasi absensi dengan face recognition, laporan kehadiran, dan integrasi payroll.',
    techStack: ['Next.js', 'Python', 'TensorFlow', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600',
    urlDemo: 'https://example.com',
  },
  {
    id: '7',
    title: 'Inventory Management System',
    category: 'Website',
    description: 'Sistem inventori lengkap dengan tracking stok, purchase order, dan reporting.',
    techStack: ['React', 'Laravel', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600',
  },
  {
    id: '8',
    title: 'Food Delivery App',
    category: 'Mobile',
    description: 'Aplikasi delivery makanan dengan real-time tracking dan integrasi payment.',
    techStack: ['Flutter', 'Firebase', 'Google Maps API'],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600',
    urlDemo: 'https://example.com',
  },
];

export const categories = ['Semua', 'Website', 'Mobile', 'Backend', 'Skripsi'] as const;
export type Category = typeof categories[number];
