export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQ[] = [
  {
    id: '1',
    question: 'Berapa lama waktu pengerjaan project aplikasi?',
    answer: 'Waktu pengerjaan bervariasi tergantung kompleksitas project. Website sederhana 1-2 minggu, aplikasi medium 2-4 minggu, dan aplikasi kompleks 1-3 bulan. Kami selalu memberikan estimasi yang jelas di awal project.',
  },
  {
    id: '2',
    question: 'Apakah bisa request fitur custom?',
    answer: 'Tentu! Kami sangat terbuka dengan request fitur custom. Tim kami akan menganalisa kebutuhan Anda dan memberikan solusi terbaik sesuai dengan budget dan timeline yang disepakati.',
  },
  {
    id: '3',
    question: 'Bagaimana sistem pembayarannya?',
    answer: 'Pembayaran dilakukan secara bertahap: 50% di awal sebagai DP untuk memulai pengerjaan, dan 50% sisanya setelah project selesai dan disetujui. Kami menerima transfer bank dan e-wallet.',
  },
  {
    id: '4',
    question: 'Apakah ada garansi dan maintenance setelah project selesai?',
    answer: 'Ya, kami memberikan garansi bug fix gratis selama 1 bulan setelah project selesai. Untuk maintenance berkelanjutan, tersedia paket maintenance bulanan yang mencakup update, backup, dan support.',
  },
  {
    id: '5',
    question: 'Apakah bisa membantu project skripsi atau tugas kuliah?',
    answer: 'Tentu! Kami berpengalaman membantu mahasiswa dalam project skripsi dan tugas kuliah. Kami memastikan source code original, dokumentasi lengkap, dan siap bantu penjelasan untuk sidang.',
  },
  {
    id: '6',
    question: 'Teknologi apa saja yang dikuasai tim SEPROX?',
    answer: 'Tim kami menguasai berbagai teknologi modern: React, Vue, Angular untuk frontend; Node.js, Laravel, Python untuk backend; React Native, Flutter untuk mobile; serta PostgreSQL, MySQL, MongoDB untuk database.',
  },
];
