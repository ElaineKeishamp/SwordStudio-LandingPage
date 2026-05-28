/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FAQItem, ServiceItem, PortfolioItem, TestimonialItem } from "./types";

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Berapa lama durasi pengerjaan proyek?",
    answer: "Durasi bergantung pada kompleksitas. Proyek identitas brand biasanya memakan waktu 3-6 minggu, sedangkan website premium memakan waktu 6-10 minggu dari riset hingga peluncuran."
  },
  {
    id: "faq-2",
    question: "Berapa biaya jasa di Sword Studio?",
    answer: "Kami menawarkan solusi kustom. Biaya ditentukan berdasarkan lingkup pekerjaan dan kebutuhan spesifik brand Anda. Hubungi kami untuk penawaran harga yang disesuaikan dengan tujuan Anda."
  },
  {
    id: "faq-3",
    question: "Bagaimana proses kerja kreatif kami?",
    answer: "Kami memulai dengan fase Discovery (riset & strategi), diikuti oleh Creation (eksekusi desain), dan diakhiri dengan Refinement (revisi & finalisasi) untuk memastikan hasil yang sempurna."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "service-brand",
    icon: "branding_watermark",
    title: "Brand Identity",
    description: "Logo, sistem visual, dan panduan gaya yang konsisten untuk membangun otoritas brand yang tak tertandingi.",
    features: ["Logo Architecture", "Visual Guidelines", "Typography System"],
    isGoldIcon: true
  },
  {
    id: "service-digital",
    icon: "web",
    title: "Digital Design",
    description: "Website dan interface UI/UX yang memadukan estetika mewah dengan pengalaman pengguna yang intuitif.",
    features: ["UX Research", "Premium UI Design", "Web Development"],
    isGoldIcon: false
  },
  {
    id: "service-strategy",
    icon: "lightbulb",
    title: "Creative Strategy",
    description: "Rencana induk untuk pertumbuhan brand, kampanye kreatif, dan positioning pasar yang presisi.",
    features: ["Market Positioning", "Content Direction", "Brand Tone of Voice"],
    isGoldIcon: false
  }
];

export const PORTFOLIOS: PortfolioItem[] = [
  {
    id: "portfolio-chronos",
    tag: "BRAND IDENTITY",
    title: "Chronos Luxury Watch",
    description: "Pendekatan visual eksklusif dan materialistik untuk brand jam tangan titanium artisan kelas atas.",
    longDescription: "Proyek prestisius untuk mendesain ulang brand jam tangan titanium mewah Chronos, menciptakan sistem identitas noir-emas yang merepresentasikan ketepatan astronomis dan warisan artistik bernilai tinggi.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWkBQQnw5XZVVPv9pT8WdwpScxA1LGkmmRDB4LeVDJscKQT2ja1hWLJ6d-PzAUt9QcX_YIKb4mGyWJ4f9VzYEGT5aOyAX-QM586t8Sx4ulKgsJAvN8B8bujdZ53CBen2c21QZ7HvfE4C4-oBW8YKPNq3c2eC8p2xVse-cP73G94Cbg_gkPQGdwbwtCFLxBhqLb60sk8gkQ7OQc01CvX5OBavGXEzjGBtTpfy82drub0-pk2xvKVuIKn29bzf_2uv-m4IeKKsV3VxI",
    client: "Chronos Group Ltd.",
    year: "2024",
    challenge: "Chronos membutuhkan transisi visual dari jam tangan olahraga tradisional ke segmen arloji ultra-mewah yang bersaing dengan merek Swiss legendaris.",
    solution: "Kami memadukan tipografi serif klasik dengan tekstur metal obsidian yang misterius dan kemewahan gold foil mikro untuk mewujudkan aura prestise.",
    results: [
      "Peningkatan 42% dalam pesanan preorder eksklusif",
      "Pengakuan merek meningkat tajam di wilayah Asia Pasifik",
      "Panduan visual setebal 125 halaman diimplementasikan secara internasional"
    ]
  },
  {
    id: "portfolio-axis",
    tag: "DIGITAL DESIGN",
    title: "Axis Architecture",
    description: "Website interaktif dinamis yang mengimplementasikan keindahan modernis arsitektur perkotaan.",
    longDescription: "Platform digital imersif yang menjadi portofolio hidup karya arsitektur futuristik Axis, menampilkan transisi berkecepatan tinggi, tata letak fluid, dan mode navigasi multidimensi.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaqNeYpWbvUy8zK3kmWL50wi1maBkHo74SF6QSCTyK5cWYiKAzS2B-i-rjVDAgu-47EWz351_qF0JIgfz7Dg2BFe5r8X-kcee1_l3vu2tOs29Vs-_bqJ4cRYHc4VBUFGP4WN1-qUJzpguRDbVvCNuRZ8ld-_dJQ72gIDS_pEuHXw1wAvb_iLAvvUp13VmJtb6fYcKdFHWs4c9GKtdhz33ds8C2Lc8pYOtfzFqZckjPPdaV4mhLXXp_AaZv-rMr_nFRNV8ccXlje5g",
    client: "Axis Architectural Firm",
    year: "2024",
    challenge: "Menampilkan struktur desain gedung tinggi yang kompleks tanpa mengorbankan kecepatan akses di perangkat seluler.",
    solution: "Arsitektur static-site dengan kompresi visual tingkat tinggi, transisi WebGL mikro, dan tata letak minimalis geometris.",
    results: [
      "Kecepatan muat halaman di bawah 0.8 detik secara global",
      "Penghargaan Best Architecture Showcase dari Awwwards",
      "Mendapatkan 15+ prospek klien internasional baru dalam 3 bulan pertama"
    ]
  },
  {
    id: "portfolio-velvet",
    tag: "CREATIVE STRATEGY",
    title: "Velvet Interior Group",
    description: "Sebuah strategi positioning baru yang memotong kebisingan pasar showroom butik premium.",
    longDescription: "Kami mendesain ulang strategi komunikasi ruang Velvet Interior, sebuah butik furnitur beludru dan metalik gelap. Kami mengintegrasikan narasi eksklusivitas 'The Secret Salon' untuk meningkatkan porsi penjualan tertutup.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRcWWfBTAQvFpe-wZRdU8JzpGkAcERr8jhAb0KlcjfkDIvuBtDiDZW9TGNAi9kVAvpypt1Twc603MRRzXM15D73s7CWXI_7mwipus1NU0Fv2gP4949CMN3zvFZzPDYPwHQ25pHjhJOPx5k3B3-X35TEoqDiUpV66_SosOKO1XYrT4t46-G2ZayP_OYsUtCRn6zqbFIvsnFHJyzvD2IpRr5EOuegyhUm9GgXiaU0b-dGUkL1NYr9SgW4I1CF5IdTWUOJSAQlSjbYm4",
    client: "Velvet Interior Group",
    year: "2023",
    challenge: "Penjualan showroom butik stagnan akibat strategi pemasaran massal yang merusak citra eksklusivitas furnitur custom.",
    solution: "Pembuatan kampanye terbatas undangan-saja, kurasi katalog beraroma editorial tinggi, dan pameran malam privat terkurasi.",
    results: [
      "Tiket rata-rata transaksi naik sebesar 75%",
      "Meningkatkan engagement loyalitas pelanggan VIP hingga 90%",
      "Seluruh koleksi awal terjual habis dalam 14 hari pameran tertutup"
    ]
  },
  {
    id: "portfolio-sovereign",
    tag: "UI/UX DESIGN",
    title: "Sovereign Fintech App",
    description: "Sistem keuangan yang aman, berkelas tinggi, dengan dashboard modern.",
    longDescription: "Aplikasi seluler perbankan privat Sovereign. Menghadirkan interface dashboard layaknya jam tangan mekanikal bernilai tinggi untuk nasabah ultra-wealthy, memadukan fungsi analitik real-time dengan sentuhan prestise.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4xiZi20Dm_wVsXLKTAT0BKmtrK57s4ushobruuUNsX5RbbZDz0J_a9rGUVyXzl5gCPUiXe5_xDZiSQXpmKfuKa33Xazbb9-8rQpBHi4ICOLtGctO_bHCqcjb3Q8eNfbvcFtEYk_JgEqB8RbuDfh3zpj1UaSie2RB1PeuePrPiUZF-SeLOiiUCSF-F6-ma7_m46mUMLN08wGczKKkyzre4ZcKnmRiX83d1ZD4u5ToloBi0f04okoTlEOmxARxlymhE9X9HQikw5gQ",
    client: "Sovereign Union Wealth",
    year: "2024",
    challenge: "Aplikasi keuangan tradisional terlihat kaku, tidak ramah pada nasabah privat kelas atas, dan tidak mencerminkan level kekayaan mereka.",
    solution: "Sistem interface gelap dengan garis-garis tipis kemilau emas, visualisasi grafik interaktif custom, dan keamanan yang sangat disederhanakan secara visual.",
    results: [
      "94% skor kepuasan dari nasabah private banking",
      "Volume transaksi kumulatif melalui aplikasi meningkat sebesar $1.2B",
      "Mengurangi laporan kendala interface sebesar 80%"
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "testimonial-adrian",
    name: "Adrian Wijaya",
    role: "CEO, Chronos Group",
    quote: "Bekerja dengan Sword Studio adalah investasi terbaik untuk brand kami. Mereka tidak hanya memberikan desain yang indah, tetapi juga identitas yang benar-benar mewakili visi masa depan perusahaan kami.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQydwc6bQRDf8z1eiOQTE6BGo5E-AKRnvNB5n6a7jG2dEHXpNCjZ8AS6LRuWoGEAhF_NO0Q7m8wLtqnU_lLuN4QJSKEIQ7MNGOg3LAifZr_gUnQQd7F6Pszofov8jvQXg_zGvy1-0dtIkDUoXM4hiTLKklrqnQZnCF7RNRNebwYRGyzH7yVn-pqeTrYdbTipAS78xQxrjCqWmLEZyRydJpIoGOzHMNf8-XT9umHEYkfWUf1Q2CfhOA8Y4PvENaGt55jdqZqwBMfxI"
  },
  {
    id: "testimonial-siska",
    name: "Siska Pratama",
    role: "Creative Director, Axis Arch",
    quote: "Presisi adalah kata kunci yang tepat. Tim Sword Studio berhasil mengubah konsep abstrak kami menjadi sistem visual yang tajam dan fungsional di seluruh platform digital kami.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDv_ZngTybSTsYusEoIM5IO86HzzIfDZFnEFgmlzmr1GY-uUfqi7t0PBewEctPfxZEoGM9c9ywPSp_E52pu3uEPgAu0OgHiCYPtpqzO-cVAt6U0Tur_nVseO5R5wmxHtZeU2DWMDrKylyPLlXvj7hmfSlWcKYWC6PxKO02or5YfurC3sCXgrZYLPzzP0aE1nKqMiCpFmopkQ3luAkyhM9rmxQlvJTzJTKQA_ZEZqOrTyj-rGTASKDTmN-SPUKWYjBtjgFRyD2V9TkI"
  }
];

export const BRANDING_MOTTOS: Record<string, string[]> = {
  Teknologi: [
    "Satu Algoritma, Sejuta Solusi.",
    "Membelah Masa Depan dengan Presisi Mutlak.",
    "Inovasi Tajam Tanpa Henti."
  ],
  "Gaya Hidup & Butik": [
    "Kemewahan dalam Setiap Serat Meticulous.",
    "Temukan Karakter Tersembunyi Anda.",
    "Estetika Abadi untuk Generasi Penerus."
  ],
  "F&B Premium": [
    "Cita Rasa yang Menembus Kebiasaan.",
    "Sajian Ningrat, Jiwa Modern.",
    "Kemurnian Alami dalam Setiap Seduhan."
  ],
  "Properti & Finansial": [
    "Pondasi Kokoh Untuk Kemakmuran Abadi.",
    "Kekayaan yang Dikelola dengan Ketenangan Jiwa.",
    "Arsitektur Masa Depan, Legasi Hari Ini."
  ]
};
