export const data = {
    bride: {
        P: {
            id: 1,
            name: 'Elya Putri Erista Novita Sari',
            child: 'Putri ke 1',
            father: 'Alm. Bapak Agus Sugihardi (DPUPR)',
            mother: 'Endang Prihatin',
            image: './src/assets/images/cewe.png'
        },
        L: {
            id: 2,
            name: 'Andi Setioko <br>(Disdukcapil Magetan)',
            child: 'Putra ke 1',
            father: 'Bapak Sunaryo (Satpol PP)',
            mother: 'Rubingatun',
            image: './src/assets/images/cowo.png'
        },

        couple: './src/assets/images/couple.png',
        jawa: './src/assets/images/gunungan.webp'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'Agustus',
            date: '06',
            day: 'Rabu',
            hours: {
                start: '07.00',
                finish: 'Selesai'
            }
        },
        temumanten: {
            year: '2025',
            month: 'Agustus',
            date: '06',
            day: 'Rabu',
            hours: {
                start: '09.00',
                finish: 'Selesai'
            }
        },   
        reception: {
            year: '2025',
            month: 'Agustus',
            date: '06',
            day: 'Rabu',
            hours: {
                start: '13.00',
                finish: 'Selesai'
            }
        },
        address: 'Jl. Jawa no.60 RT 02 RW 04, Kel.Kepolorejo, Kec. Magetan, Kab. Magetan, Jawa Timur'
    },

    link: {
        calendar: 'https://calendar.app.google/QcGapfvCMe9PWk4A9',
        map: 'https://maps.app.goo.gl/ErPW7YZndo2CXQHu6',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.jpg'
        },
        {
            id: 2,
            image: './src/assets/images/2.jpg'
        },
        {
            id: 3,
            image: './src/assets/images/3.jpg'
        },
        {
            id: 4,
            image: './src/assets/images/4.jpg'
        },
        {
            id: 5,
            image: './src/assets/images/5.jpg'
        },
        {
            id: 5,
            image: './src/assets/images/6.jpg'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Andi Setioko',
            icon: './src/assets/images/jatim.png',
            rekening: '0306449877'
        },
        {
            id: 2,
            name: 'Elya Putri Erista Novita Sari',
            icon: './src/assets/images/bri.png',
            rekening: '636301018175532'
        },
    ],

    audio: './src/assets/audio/caknan.mp3',

    api: 'https://script.google.com/macros/s/AKfycbxq3CiAUsNVF6h5-3C9aB91t1i7Tav2ci9AZ98dw--p0RTLF0t2d-JAoOoE1b-lqnh5RA/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
