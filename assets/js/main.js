function renderHome() {
    // 1. Dapatkan Element
    const heroSection = document.getElementById('hero-section');
    const servicesGrid = document.getElementById('services-grid');
    
    // Pastikan kita berada di halaman Home
    if (!heroSection) return;

    // --- A. HERO SECTION BARU (PREMIUM STYLE) ---
    // Kita tambahkan class bg-grid-pattern ke parent section lewat JS
    heroSection.parentElement.classList.add('bg-grid-pattern'); 
    heroSection.parentElement.classList.remove('py-16'); // Reset padding default
    heroSection.parentElement.classList.add('pt-10', 'pb-20');

    heroSection.innerHTML = `
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div class="flex-1 text-center lg:text-left order-2 lg:order-1">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                    <span class="relative flex h-2 w-2">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                    </span>
                    <span class="text-xs font-bold text-slate-600 tracking-wide uppercase">Open for Hiring</span>
                </div>

                <h1 class="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                    Medical <br>
                    <span class="text-gradient">Professional</span> & HSE.
                </h1>
                
                <p class="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Mitra strategis perusahaan dalam menjamin kesehatan kerja (Occupational Health) dan kesiapsiagaan gawat darurat (Emergency Response).
                </p>

                <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                    <a href="mailto:${myData.profile.email}" class="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold transition hover:bg-slate-800 hover:scale-105 shadow-xl shadow-slate-900/20 flex items-center justify-center gap-2">
                        <span>Rekrut Saya</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                    <a href="portfolio.html" class="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold transition hover:border-teal-500 hover:text-teal-600 hover:shadow-lg flex items-center justify-center">
                        Lihat Portfolio
                    </a>
                </div>

                <div class="grid grid-cols-3 gap-4 border-t border-slate-200 pt-8 max-w-md mx-auto lg:mx-0">
                    <div>
                        <div class="text-3xl font-extrabold text-slate-900">3+</div>
                        <div class="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Years Exp</div>
                    </div>
                    <div>
                        <div class="text-3xl font-extrabold text-slate-900">4</div>
                        <div class="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Certifications</div>
                    </div>
                    <div>
                        <div class="text-3xl font-extrabold text-slate-900">10+</div>
                        <div class="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Projects</div>
                    </div>
                </div>
            </div>

            <div class="flex-1 relative w-full max-w-lg lg:max-w-full order-1 lg:order-2">
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-teal-200/50 to-slate-200/50 rounded-full blur-3xl opacity-60"></div>
                
                <div class="relative z-10">
                    <img src="${myData.profile.photo}" alt="Profile" class="w-full h-auto aspect-[4/5] object-cover rounded-3xl shadow-2xl border-4 border-white">
                    
                    <div class="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float max-w-[200px]">
                        <div class="bg-teal-50 p-2 rounded-full text-teal-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div>
                            <div class="font-bold text-slate-900 text-sm">Certified Medic</div>
                            <div class="text-xs text-slate-500">STR Aktif & Valid</div>
                        </div>
                    </div>

                    <div class="absolute top-10 -right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg border border-slate-100 animate-float-delayed hidden sm:block">
                        <div class="flex items-center gap-2">
                            <span class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                            <span class="text-sm font-bold text-slate-700">Jakarta Based</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // --- B. SERVICES GRID (TAMPILAN KARTU) ---
    if (servicesGrid) {
        servicesGrid.innerHTML = ''; // Reset dulu
        myData.services.forEach((svc, index) => {
            servicesGrid.innerHTML += `
            <div class="group bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition duration-300 relative overflow-hidden">
                <div class="absolute top-0 left-0 w-1 h-full bg-slate-200 group-hover:bg-teal-500 transition-all duration-300"></div>
                
                <div class="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-teal-50 group-hover:scale-110 transition duration-300">
                    ${svc.icon}
                </div>
                <h3 class="text-xl font-bold text-slate-900 mb-3">${svc.title}</h3>
                <p class="text-slate-500 leading-relaxed text-sm">${svc.desc}</p>
            </div>
            `;
        });
    }
}
