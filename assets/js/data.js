const myData = {
    // === BAGIAN 1: PROFILE & HERO ===
    profile: {
        name: "Eep Ridwan Pauji",
        role: "Professional Medic & HSE",
        // Ganti nama file ini dengan foto background kamu nanti
        heroImage: "assets/img/hero-bg.jpg" 
    },

    // === BAGIAN 2: BLOG ===
    blog: [
        {
            date: "20 Jan 2026",
            title: "Pentingnya K3 dalam Lingkungan Medis",
            summary: "Mengapa HIPERKES menjadi standar wajib bagi paramedis perusahaan.",
            link: "#" // Bisa link ke LinkedIn post atau file PDF artikel
        },
        {
            date: "15 Jan 2026",
            title: "Prosedur BTCLS Terbaru",
            summary: "Update prosedur penanganan trauma kardiak di lapangan.",
            link: "#"
        }
    ],

    // === BAGIAN 3: PORTFOLIO (PENGALAMAN KERJA) ===
    // 'docs' adalah daftar foto dokumentasi kerja. Kosongkan [] jika tidak ada.
    experience: [
        {
            id: "exp1",
            role: "Perawat/PIC Onsite",
            company: "Tirta Medical Centre",
            period: "Agustus 2023 - Saat ini",
            desc: [
                "Mengkoordinasikan tim MCU Perusahaan seluruh Indonesia.",
                "Melakukan medical check up karyawan."
            ],
            docs: [
                "assets/img/tirta_1.jpg", 
                "assets/img/tirta_2.jpg"
            ]
        },
        {
            id: "exp2",
            role: "Paramedis Project",
            company: "PT. Kimberly-Clark Softex",
            period: "Maret 2023 - Desember 2023",
            desc: [
                "Standby klinik emergency.",
                "Hygiene inspection area pabrik."
            ],
            docs: [
                "assets/img/softex_1.jpg"
            ]
        }
    ],

    // === BAGIAN 4: SERTIFIKASI ===
    certificates: [
        {
            title: "BTCLS",
            issuer: "Dinkes AGD DKI Jakarta",
            exp: "Exp: 2027",
            icon: "B",
            file: "assets/doc/sertifikat_btcls.jpg" // File sertifikat asli
        },
        {
            title: "HIPERKES",
            issuer: "Hiperkes Asosiasi",
            exp: "Lifetime",
            icon: "H",
            file: "assets/doc/sertifikat_hiperkes.pdf"
        },
        {
            title: "Spirometri",
            issuer: "Training MIR",
            exp: "Teknis",
            icon: "S",
            file: "assets/doc/sertifikat_spiro.jpg"
        }
    ]
};
