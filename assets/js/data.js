const myData = {
    // === BAGIAN 1: PROFIL UTAMA ===
    profile: {
        name: "Eep Ridwan Pauji",
        role: "Professional Medic & HSE",
        // Ganti URL ini dengan foto Anda nanti. (Ukuran Landscape/Lebar)
        heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
    },

    // === BAGIAN 2: BLOG / ARTIKEL ===
    blog: [
        {
            date: "21 Jan 2026",
            title: "Pentingnya K3 dalam Lingkungan Medis",
            summary: "Analisis mendalam mengenai penerapan HIPERKES sebagai standar wajib bagi paramedis perusahaan.",
            link: "#"
        },
        {
            date: "15 Jan 2026",
            title: "Update Prosedur BTCLS 2026",
            summary: "Review teknis mengenai perubahan algoritma penanganan trauma kardiak di lapangan.",
            link: "#"
        }
    ],

    // === BAGIAN 3: PORTFOLIO (PENGALAMAN KERJA) ===
    experience: [
        {
            id: "exp1",
            role: "Perawat / PIC Onsite",
            company: "Tirta Medical Centre",
            period: "Agustus 2023 - Saat ini",
            desc: [
                "Mengkoordinasikan tim MCU Perusahaan seluruh Indonesia.",
                "Melakukan pemeriksaan fisik dan penunjang medis.",
                "Manajemen data kesehatan karyawan."
            ],
            // Dokumentasi Foto (Ganti dengan foto asli Anda nanti)
            docs: [
                "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1584036561566-b930895d3052?q=80&w=800&auto=format&fit=crop"
            ]
        },
        {
            id: "exp2",
            role: "Paramedis Project",
            company: "PT. Kimberly-Clark Softex",
            period: "Maret 2023 - Desember 2023",
            desc: [
                "Standby klinik untuk penanganan kasus emergency.",
                "Melakukan hygiene inspection area pabrik.",
                "Promosi kesehatan kerja."
            ],
            docs: [
                "https://images.unsplash.com/photo-1516574187841-69301976e499?q=80&w=800&auto=format&fit=crop"
            ]
        },
        {
            id: "exp3",
            role: "Perawat Klinik",
            company: "Pondok Pesantren Al-Hassan",
            period: "Mar 2022 - Mar 2023",
            desc: [
                "Pelayanan kesehatan primer santri.",
                "Screening kesehatan berkala."
            ],
            docs: [] // Kosongkan jika tidak ada foto
        }
    ],

    // === BAGIAN 4: SERTIFIKASI ===
    certificates: [
        {
            title: "BTCLS",
            issuer: "Dinkes AGD DKI Jakarta",
            exp: "Valid until 2027",
            icon: "B",
            // Ganti dengan file sertifikat asli Anda
            file: "https://images.unsplash.com/photo-1589330694653-4d5c9533158c?q=80&w=800&auto=format&fit=crop" 
        },
        {
            title: "HIPERKES",
            issuer: "Hiperkes Asosiasi",
            exp: "Lifetime Validity",
            icon: "H",
            file: "https://images.unsplash.com/photo-1589330694653-4d5c9533158c?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Spirometri",
            issuer: "Training MIR",
            exp: "Teknis Alat",
            icon: "S",
            file: "https://images.unsplash.com/photo-1589330694653-4d5c9533158c?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "PPI Dasar",
            issuer: "Kemenkes RI",
            exp: "Nasional",
            icon: "P",
            file: "https://images.unsplash.com/photo-1589330694653-4d5c9533158c?q=80&w=800&auto=format&fit=crop"
        }
    ]
};
