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

// === BAGIAN 3: PORTFOLIO (PENGALAMAN KERJA - LINKEDIN STYLE) ===
    experience: [
        {
            company: "Tirta Medical Centre",
            location: "Jakarta, Indonesia",
            // Daftar Jabatan di perusahaan ini (Urutkan dari yang TERBARU di atas)
            roles: [
                {
                    title: "PIC Onsite (Promosi)",
                    period: "Jan 2024 - Saat ini",
                    type: "Full-time",
                    desc: [
                        "Naik jabatan menjadi koordinator tim MCU seluruh Indonesia.",
                        "Supervisi operasional medis di lapangan."
                    ],
                    // Dokumentasi khusus jabatan ini
                    docs: [
                        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
                    ]
                },
                {
                    title: "Perawat Medis",
                    period: "Agustus 2023 - Des 2023",
                    type: "Contract",
                    desc: [
                        "Melakukan pemeriksaan fisik karyawan.",
                        "Input data hasil MCU."
                    ],
                    docs: [] // Kosongkan jika tidak ada foto
                }
            ]
        },
        {
            company: "PT. Kimberly-Clark Softex",
            location: "Karawang, Jawa Barat",
            roles: [
                {
                    title: "Paramedis Project",
                    period: "Maret 2023 - Desember 2023",
                    type: "Project Based",
                    desc: [
                        "Standby klinik emergency 24 jam.",
                        "Hygiene inspection area pabrik."
                    ],
                    docs: [
                        "https://images.unsplash.com/photo-1516574187841-69301976e499?q=80&w=800&auto=format&fit=crop"
                    ]
                }
            ]
        },
        {
            company: "Pondok Pesantren Al-Hassan",
            location: "Bekasi",
            roles: [
                {
                    title: "Perawat Klinik",
                    period: "Mar 2022 - Mar 2023",
                    type: "Full-time",
                    desc: [
                        "Pelayanan kesehatan primer santri.",
                        "Program promosi kesehatan."
                    ],
                    docs: []
                }
            ]
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
