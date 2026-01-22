document.addEventListener("DOMContentLoaded", function() {
    
    // 1. GENERATE NAVBAR (Otomatis di semua halaman)
    const navHTML = `
    <nav class="fixed w-full z-50 transition-all duration-300 bg-slate-900/90 backdrop-blur-md border-b border-white/10">
        <div class="max-w-5xl mx-auto px-4">
            <div class="flex justify-between items-center h-16">
                <a href="index.html" class="text-white font-extrabold text-xl tracking-wider uppercase group">
                    Eep Ridwan <span class="text-teal-400 group-hover:text-teal-300 transition">Pauji</span>
                </a>
                <div class="hidden md:flex space-x-8">
                    <a href="index.html" class="text-slate-300 hover:text-teal-400 text-sm font-bold uppercase tracking-wide transition py-2">Home</a>
                    <a href="portfolio.html" class="text-slate-300 hover:text-teal-400 text-sm font-bold uppercase tracking-wide transition py-2">Portfolio</a>
                    <a href="sertifikasi.html" class="text-slate-300 hover:text-teal-400 text-sm font-bold uppercase tracking-wide transition py-2">Sertifikasi</a>
                </div>
            </div>
        </div>
    </nav>
    <div id="globalModal" class="fixed inset-0 z-[60] hidden flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 opacity-0 transition-opacity duration-300">
        <div class="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl relative transform scale-95 transition-transform duration-300" id="modalPanel">
            <button onclick="closeModal()" class="absolute top-4 right-4 text-slate-400 hover:text-red-500 z-10 bg-white rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div id="modalContent" class="p-6 md:p-8"></div>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML("afterbegin", navHTML);

    // 2. GENERATE FOOTER
    const footerHTML = `
    <footer class="bg-slate-950 text-slate-500 py-10 text-center text-sm mt-auto border-t border-slate-900">
        <p class="mb-2 font-medium">&copy; 2026 Eep Ridwan Pauji. All rights reserved.</p>
        <div class="flex justify-center gap-6">
            <a href="mailto:erpauji.medic@gmail.com" class="hover:text-teal-400 transition">Email</a>
            <a href="#" class="hover:text-teal-400 transition">LinkedIn</a>
        </div>
    </footer>`;
    document.body.insertAdjacentHTML("beforeend", footerHTML);

    // 3. LOGIC HALAMAN HOME
    const heroBg = document.getElementById('hero-bg');
    const blogList = document.getElementById('blog-list');
    
    if (heroBg && typeof myData !== 'undefined') {
        heroBg.style.backgroundImage = `url('${myData.profile.heroImage}')`;
    }
    
    if (blogList && typeof myData !== 'undefined') {
        myData.blog.forEach(post => {
            blogList.innerHTML += `
            <article class="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-lg hover:border-teal-500 transition group cursor-pointer">
                <div class="flex items-center gap-2 mb-3">
                    <span class="w-2 h-2 rounded-full bg-teal-500"></span>
                    <span class="text-xs text-slate-500 font-bold uppercase tracking-wider">${post.date}</span>
                </div>
                <h4 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition">${post.title}</h4>
                <p class="text-slate-600 text-sm leading-relaxed mb-4">${post.summary}</p>
                <span class="text-teal-600 text-sm font-bold flex items-center gap-1">Baca Selengkapnya <span class="group-hover:translate-x-1 transition">&rarr;</span></span>
            </article>`;
        });
    }

// 4. LOGIC HALAMAN PORTFOLIO (NEW LINKEDIN STYLE)
    const portfolioList = document.getElementById('portfolio-list');
    if (portfolioList && typeof myData !== 'undefined') {
        myData.experience.forEach((companyData, companyIndex) => {
            
            // Loop Jabatan (Roles)
            let rolesHTML = '';
            companyData.roles.forEach((role, roleIndex) => {
                const hasDocs = role.docs && role.docs.length > 0;
                
                // Style tombol dokumentasi (jika ada)
                const docBadge = hasDocs 
                    ? `<button onclick="openModal('exp', ${companyIndex}, ${roleIndex})" class="mt-2 text-xs flex items-center gap-1 text-teal-600 font-bold bg-teal-50 px-2 py-1 rounded hover:bg-teal-100 transition">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        Lihat Foto
                      </button>` 
                    : '';

                // Garis Timeline (Putus-putus jika jabatan lama, Solid jika jabatan terbaru)
                const lineStyle = roleIndex === companyData.roles.length - 1 ? '' : 'border-l-2 border-slate-200';
                
                rolesHTML += `
                <div class="relative pl-8 pb-8 ${lineStyle} last:pb-0 ml-2">
                    <div class="absolute -left-[5px] top-1.5 w-3 h-3 bg-slate-300 rounded-full border-2 border-white ring-1 ring-slate-100 group-hover:bg-teal-500 transition"></div>
                    
                    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                        <h4 class="text-lg font-bold text-slate-800">${role.title}</h4>
                        <span class="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">${role.period}</span>
                    </div>
                    <div class="text-xs text-slate-500 mb-2 font-medium">${role.type}</div>
                    
                    <ul class="list-disc list-outside ml-4 text-slate-600 text-sm space-y-1 mb-2">
                        ${role.desc.map(d => `<li>${d}</li>`).join('')}
                    </ul>
                    ${docBadge}
                </div>`;
            });

            // Bungkus per Perusahaan
            portfolioList.innerHTML += `
            <div class="mb-8 last:mb-0 group">
                <div class="flex items-start gap-4 mb-4">
                    <div class="w-12 h-12 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    </div>
                    <div>
                        <h3 class="text-xl font-extrabold text-slate-900 leading-tight">${companyData.company}</h3>
                        <p class="text-sm text-slate-500">${companyData.location}</p>
                    </div>
                </div>
                <div class="pl-6">
                    ${rolesHTML}
                </div>
            </div>`;
        });
    }

// === UPDATE SYSTEM MODAL (POPUP) ===
// Fungsi ini perlu diupdate karena strukturnya sekarang berubah (Ada Index Perusahaan & Index Role)
function openModal(type, index1, index2 = null) {
    const modal = document.getElementById('globalModal');
    const panel = document.getElementById('modalPanel');
    const content = document.getElementById('modalContent');
    
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        panel.classList.remove('scale-95');
    }, 10);

    if (type === 'exp') {
        // index1 = index perusahaan, index2 = index jabatan
        const data = myData.experience[index1].roles[index2];
        const companyName = myData.experience[index1].company;
        
        const images = data.docs.map(img => 
            `<img src="${img}" class="w-full h-auto rounded-lg shadow-md border border-slate-100 mb-2" loading="lazy">`
        ).join('');
        
        content.innerHTML = `
            <div class="border-b border-slate-100 pb-4 mb-4">
                <span class="text-xs font-bold text-teal-600 uppercase tracking-wide bg-teal-50 px-2 py-1 rounded mb-2 inline-block">Dokumentasi</span>
                <h2 class="text-2xl font-bold text-slate-900">${data.title}</h2>
                <p class="text-slate-500 font-medium text-lg">${companyName}</p>
                <p class="text-sm text-slate-400 mt-1">${data.period}</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                ${images}
            </div>
        `;
    } else if (type === 'cert') {
        // Logic Sertifikat TETAP SAMA seperti sebelumnya
        const data = myData.certificates[index1];
        const isPdf = data.file.toLowerCase().endsWith('.pdf');
        
        let mediaDisplay = '';
        if (isPdf) {
             mediaDisplay = `<iframe src="${data.file}" class="w-full h-[60vh] rounded bg-slate-100 border border-slate-200"></iframe>`;
        } else {
             mediaDisplay = `<img src="${data.file}" class="w-full h-auto max-h-[70vh] object-contain rounded bg-slate-50 border border-slate-100">`;
        }

        content.innerHTML = `
            <div class="flex justify-between items-start mb-4 border-b border-slate-100 pb-4">
                <div>
                    <h2 class="text-xl font-bold text-slate-900">${data.title}</h2>
                    <p class="text-sm text-slate-500">${data.issuer}</p>
                </div>
                <a href="${data.file}" target="_blank" class="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition shadow-sm flex items-center gap-2">
                    Download
                </a>
            </div>
            <div class="flex justify-center bg-slate-50 rounded-lg p-2 border border-slate-100 border-dashed">
                ${mediaDisplay}
            </div>
        `;
    }
}
