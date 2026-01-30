document.addEventListener("DOMContentLoaded", function() {
    renderNavbar();
    renderFooter();
    
    // Router sederhana berdasarkan ID elemen yang ada di halaman
    if (document.getElementById('home-content')) renderHome();
    if (document.getElementById('portfolio-list')) renderPortfolio();
    if (document.getElementById('cert-list')) renderCertificates();
});

// --- RENDER FUNCTIONS ---

function renderNavbar() {
    // Deteksi halaman aktif
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";

    const navHTML = `
    <nav class="fixed w-full z-50 glass-nav transition-all duration-300">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <a href="index.html" class="font-extrabold text-2xl tracking-tight text-slate-800">
                    ERP<span class="text-teal-600">.Medic</span>
                </a>
                <div class="hidden md:flex space-x-8">
                    <a href="index.html" class="${page === 'index.html' ? 'text-teal-600' : 'text-slate-500'} font-semibold hover:text-teal-600 transition">Home</a>
                    <a href="portfolio.html" class="${page === 'portfolio.html' ? 'text-teal-600' : 'text-slate-500'} font-semibold hover:text-teal-600 transition">Experience</a>
                    <a href="sertifikasi.html" class="${page === 'sertifikasi.html' ? 'text-teal-600' : 'text-slate-500'} font-semibold hover:text-teal-600 transition">Licenses</a>
                </div>
                <div class="md:hidden">
                    <a href="mailto:${myData.profile.email}" class="text-teal-600 font-bold text-sm">Contact Me</a>
                </div>
            </div>
        </div>
    </nav>
    <div class="h-20"></div>
    `;
    document.body.insertAdjacentHTML("afterbegin", navHTML);
}

function renderFooter() {
    const footerHTML = `
    <footer class="bg-slate-900 text-slate-400 py-12 mt-auto border-t border-slate-800">
        <div class="max-w-6xl mx-auto px-4 text-center">
            <h2 class="text-white text-xl font-bold mb-4">Ready to Hire?</h2>
            <p class="mb-6">Available for Full-time or Project-based Medical/HSE Roles.</p>
            <a href="mailto:${myData.profile.email}" class="inline-block bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                Hubungi Via Email
            </a>
            <p class="mt-8 text-sm opacity-50">&copy; 2026 ${myData.profile.name}. All Rights Reserved.</p>
        </div>
    </footer>
    <div id="modalOverlay" class="fixed inset-0 z-[60] hidden bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 opacity-0 transition-opacity duration-300">
        <div id="modalPanel" class="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden transform scale-95 transition-transform duration-300 max-h-[90vh] flex flex-col">
            <div class="p-4 border-b border-slate-100 flex justify-between items-center">
                <h3 id="modalTitle" class="font-bold text-slate-800 text-lg">Documentation</h3>
                <button onclick="closeModal()" class="text-slate-400 hover:text-red-500">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            <div id="modalContent" class="p-6 overflow-y-auto"></div>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML("beforeend", footerHTML);
}

function renderHome() {
    // Hero Section Injection
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
        heroSection.innerHTML = `
            <div class="flex flex-col md:flex-row items-center gap-12">
                <div class="flex-1 text-center md:text-left animate-fade-in-up">
                    <span class="inline-block py-1 px-3 rounded-full bg-teal-50 text-teal-600 text-xs font-bold tracking-widest uppercase mb-4 border border-teal-100">
                        Open for Recruitment
                    </span>
                    <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                        Menjamin <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">Kesehatan Kerja</span> yang Produktif.
                    </h1>
                    <p class="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl">
                        ${myData.profile.summary}
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a href="portfolio.html" class="bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 rounded-lg font-bold transition shadow-lg shadow-slate-900/20">
                            Lihat Experience
                        </a>
                        <a href="sertifikasi.html" class="bg-white text-slate-700 border border-slate-200 hover:border-teal-500 hover:text-teal-600 px-8 py-4 rounded-lg font-bold transition">
                            Cek Lisensi
                        </a>
                    </div>
                </div>
                <div class="flex-1 relative w-full max-w-md md:max-w-full">
                    <div class="absolute inset-0 bg-teal-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
                    <img src="${myData.profile.photo}" alt="Profile" class="relative z-10 w-full h-[500px] object-cover rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition duration-700 ease-out border-4 border-white">
                </div>
            </div>
        `;
    }

    // Services / Competencies Injection
    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid) {
        myData.services.forEach(svc => {
            servicesGrid.innerHTML += `
            <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-teal-100 transition duration-300 group">
                <div class="text-4xl mb-4 group-hover:scale-110 transition duration-300">${svc.icon}</div>
                <h3 class="text-xl font-bold text-slate-900 mb-2">${svc.title}</h3>
                <p class="text-slate-500 leading-relaxed">${svc.desc}</p>
            </div>
            `;
        });
    }
}

function renderPortfolio() {
    const list = document.getElementById('portfolio-list');
    myData.experience.forEach((exp, idx) => {
        let rolesHTML = '';
        exp.roles.forEach((role) => {
            rolesHTML += `
            <div class="relative pl-8 pb-8 border-l-2 border-slate-200 last:border-0 last:pb-0">
                <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-teal-500"></div>
                <h4 class="text-lg font-bold text-slate-800">${role.title}</h4>
                <p class="text-sm font-mono text-slate-500 mb-2">${role.period}</p>
                <p class="text-slate-600 mb-3">${role.desc}</p>
            </div>
            `;
        });

        // Cek apakah ada dokumentasi
        const docBtn = (exp.docs && exp.docs.length > 0) 
            ? `<button onclick="showExpModal(${idx})" class="mt-4 text-sm font-bold text-teal-600 hover:text-teal-800 flex items-center gap-2">
                 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                 Lihat Bukti Foto
               </button>` 
            : '';

        list.innerHTML += `
        <div class="mb-10 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <div class="flex flex-col md:flex-row md:items-center justify-between mb-6 border-b border-slate-100 pb-4">
                <div>
                    <h3 class="text-2xl font-bold text-slate-900">${exp.company}</h3>
                    <div class="flex items-center gap-2 text-slate-500 mt-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <span>${exp.location}</span>
                    </div>
                </div>
                <span class="mt-2 md:mt-0 bg-slate-100 text-slate-600 px-3 py-1 rounded text-sm font-bold">${exp.period}</span>
            </div>
            <div class="pl-2">
                ${rolesHTML}
                ${docBtn}
            </div>
        </div>
        `;
    });
}

function renderCertificates() {
    const list = document.getElementById('cert-list');
    myData.certificates.forEach((cert, idx) => {
        list.innerHTML += `
        <div class="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition group relative overflow-hidden">
            <div class="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                ${cert.icon || 'Official'}
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-1 pr-6">${cert.title}</h3>
            <p class="text-sm text-slate-500 mb-4">${cert.issuer} • <span class="text-teal-600">${cert.validity}</span></p>
            
            <button onclick="showCertModal(${idx})" class="w-full py-2 border border-slate-200 rounded-lg text-slate-600 font-bold text-sm hover:bg-slate-50 hover:text-teal-600 transition flex items-center justify-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                Lihat Sertifikat
            </button>
        </div>
        `;
    });
}

// --- MODAL LOGIC ---

function showExpModal(index) {
    const data = myData.experience[index];
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    modalTitle.textContent = `Dokumentasi: ${data.company}`;
    modalContent.innerHTML = `
        <div class="grid grid-cols-1 gap-4">
            ${data.docs.map(img => `<img src="${img}" class="w-full rounded-lg shadow-md">`).join('')}
        </div>
    `;
    openModal();
}

function showCertModal(index) {
    const data = myData.certificates[index];
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    modalTitle.textContent = data.title;
    modalContent.innerHTML = `
        <div class="text-center mb-4">
            <p class="text-slate-500">Penerbit: <b>${data.issuer}</b></p>
        </div>
        <img src="${data.file}" class="w-full rounded-lg border border-slate-100 shadow-sm">
        <div class="mt-4 text-center">
            <a href="${data.file}" target="_blank" class="text-teal-600 font-bold hover:underline">Buka File Asli</a>
        </div>
    `;
    openModal();
}

function openModal() {
    const overlay = document.getElementById('modalOverlay');
    const panel = document.getElementById('modalPanel');
    overlay.classList.remove('hidden');
    setTimeout(() => {
        overlay.classList.remove('opacity-0');
        panel.classList.remove('scale-95');
    }, 10);
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    const panel = document.getElementById('modalPanel');
    overlay.classList.add('opacity-0');
    panel.classList.add('scale-95');
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 300);
}
