export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmad Fauzi',
    role: 'CEO',
    company: 'TechStart Indonesia',
    content: 'SEPROX membantu kami membangun platform yang scalable dan reliable. Tim yang sangat profesional dan responsif. Sangat recommended!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sarah Wijaya',
    role: 'Owner',
    company: 'Resto Nusantara',
    content: 'Aplikasi kasir yang dibuat SEPROX sangat membantu operasional resto kami. Mudah digunakan dan fiturnya lengkap. Terima kasih SEPROX!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    rating: 5,
  },
  {
    id: '3',
    name: 'Budi Santoso',
    role: 'Mahasiswa',
    company: 'Universitas Indonesia',
    content: 'Skripsi saya jadi lebih mudah dengan bantuan SEPROX. Aplikasi yang dibuat sesuai dengan requirement dosen. Lulus tepat waktu!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    rating: 5,
  },
  {
    id: '4',
    name: 'Dewi Lestari',
    role: 'HR Manager',
    company: 'PT Maju Bersama',
    content: 'Sistem absensi dari SEPROX sangat memudahkan kami mengelola kehadiran karyawan. Laporan otomatis dan akurat. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    rating: 5,
  },
  {
    id: '5',
    name: 'Rizky Pratama',
    role: 'Founder',
    company: 'StartupKu',
    content: 'API yang dibuat SEPROX sangat well-documented dan mudah di-integrate. Tim support yang responsif dan helpful. Great job!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    rating: 5,
  },
  {
    id: '6',
    name: 'Linda Kusuma',
    role: 'Owner',
    company: 'Toko Online Linda',
    content: 'Website e-commerce saya jadi sangat profesional berkat SEPROX. Penjualan meningkat 200% setelah launch. Amazing work!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100',
    rating: 5,
  },
];
