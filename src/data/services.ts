import { Monitor, GraduationCap, ShoppingCart, Boxes, Fingerprint, Code, Wrench, Server } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: typeof Monitor;
  features: string[];
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Aplikasi Website',
    description: 'Website modern dan responsive untuk berbagai kebutuhan bisnis Anda.',
    icon: Monitor,
    features: ['Landing Page', 'Company Profile', 'E-Commerce', 'Web Application'],
  },
  {
    id: '2',
    title: 'Aplikasi Skripsi & Tugas Kuliah',
    description: 'Bantuan pembuatan aplikasi untuk skripsi dan tugas kuliah dengan dokumentasi lengkap.',
    icon: GraduationCap,
    features: ['Sistem Informasi', 'Aplikasi CRUD', 'Machine Learning', 'IoT Project'],
  },
  {
    id: '3',
    title: 'Aplikasi Kasir (POS)',
    description: 'Sistem kasir lengkap untuk retail, restoran, dan berbagai jenis usaha.',
    icon: ShoppingCart,
    features: ['Manajemen Produk', 'Transaksi Cepat', 'Laporan Penjualan', 'Multi Cabang'],
  },
  {
    id: '4',
    title: 'Aplikasi Inventori',
    description: 'Sistem manajemen stok dan inventori untuk efisiensi operasional bisnis.',
    icon: Boxes,
    features: ['Stock Tracking', 'Purchase Order', 'Supplier Management', 'Reporting'],
  },
  {
    id: '5',
    title: 'Aplikasi Absensi',
    description: 'Sistem absensi modern dengan berbagai metode pengenalan identitas.',
    icon: Fingerprint,
    features: ['Face Recognition', 'GPS Tracking', 'Shift Management', 'Payroll Integration'],
  },
  {
    id: '6',
    title: 'API & Backend Development',
    description: 'Pengembangan API dan backend yang scalable dan secure untuk aplikasi Anda.',
    icon: Server,
    features: ['REST API', 'GraphQL', 'Authentication', 'Database Design'],
  },
  {
    id: '7',
    title: 'Aplikasi Lainnya',
    description: 'Berbagai jenis aplikasi custom sesuai kebutuhan spesifik bisnis Anda.',
    icon: Code,
    features: ['Mobile App', 'Desktop App', 'Automation Tools', 'Integration'],
  },
  {
    id: '8',
    title: 'Revisi & Maintenance',
    description: 'Layanan perbaikan bug, update fitur, dan maintenance aplikasi existing.',
    icon: Wrench,
    features: ['Bug Fixing', 'Feature Update', 'Performance Optimization', 'Security Patch'],
  },
];
