# LuxWash Shoes - Premium Shoe Laundry

LuxWash Shoes adalah website landing page untuk jasa cuci sepatu premium. Website ini menampilkan layanan, harga, lokasi, dan fitur chatbot AI interaktif untuk membantu pelanggan.

## Fitur Utama

*   **Desain Modern & Responsif**: Tampilan menarik yang menyesuaikan dengan berbagai ukuran layar (desktop & mobile).
*   **Informasi Lengkap**: Beranda, Layanan, Daftar Harga, Kontak & Lokasi.
*   **AI Chatbot Widget**: Asisten virtual "LuxBot" yang dapat menjawab pertanyaan umum seputar harga, lokasi, dan layanan.
    *   *Simulated Mode*: Menjawab keyword tertentu secara otomatis.
    *   *Real AI Ready*: Kode sudah siap untuk dihubungkan ke API LLM (seperti OpenRouter/OpenAI).
*   **Smooth Scrolling**: Navigasi yang nyaman antar bagian halaman.
*   **Contact Form**: Formulir pemesanan (UI Only) dan tombol WhatsApp.

## Struktur Project

```
d:/project portofolio/shoe-laundry-minimal/
├── css/
│   ├── style.css       # Style utama website
│   └── ai-chat.css     # Style khusus widget chatbot
├── js/
│   ├── main.js         # Logic utama (scroll, navbar, animations)
│   └── ai-chat.js      # Logic chatbot (open/close, message handling)
├── img/                # Aset gambar
└── index.html          # Halaman utama
```

## Cara Menjalankan

Karena ini adalah proyek website statis (HTML/CSS/JS), Anda tidak perlu menginstall dependencies server.

1.  **Buka Folder**: Masuk ke direktori `d:/project portofolio/shoe-laundry-minimal`.
2.  **Jalankan**: Klik dua kali file `index.html` untuk membukanya di browser default Anda (Chrome, Edge, Firefox, dll).

## API Chatbot (Opsional)

Secara default, Chatbot menggunakan mode simulasi (keyword matching). Jika ingin mengubahnya menjadi AI sungguhan:

1.  Buka `js/ai-chat.js`.
2.  Cari fungsi `getAIResponse`.
3.  Ganti logika `return` dengan panggilan `fetch()` ke API pilihan Anda.

## Kredit

Dibuat untuk portofolio LuxWash Shoes.
