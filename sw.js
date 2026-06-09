// Ini adalah Service Worker sederhana agar lulus standar PWA
self.addEventListener('install', (event) => {
    console.log('Service Worker: Terinstal');
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // Membiarkan semua koneksi berjalan normal ke internet (Supabase & Netlify)
    event.respondWith(fetch(event.request));
});