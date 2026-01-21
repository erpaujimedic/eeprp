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

    // 4. LOGIC HALAMAN PORTFOLIO
    const portfolioList = document.getElementById('portfolio-list');
    if (portfolioList && typeof myData !== 'undefined') {
        myData.experience.forEach((exp, index) => {
            const hasDocs = exp.docs && exp.docs.length > 0;
            const clickAttr = hasDocs ? `onclick="openModal('exp', ${index})"` : "";
            const cursor = hasDocs ? "cursor-pointer hover:bg-slate-50 hover:border-teal-400" : "";
            const badge = hasDocs ? `<span class="hidden sm:inline-block ml-3 px-2 py-0.5 bg-teal-100 text-teal-700 text-[10px] rounded font-bold uppercase tracking-wide">Ada Dokumentasi 📸</span>` : "";

            portfolioList.innerHTML += `
            <div ${clickAttr} class="relative pl-8 md:pl-10 border-l-2 border-slate-200 pb-12 last:pb-0 group ${cursor} transition p-4 rounded-r-xl">
                <div class="absolute -left-[9px] top-6 w-4 h-4 bg-white border-4 border-teal-500 rounded-full group-hover:scale-125 transition shadow-sm"></div>
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <div>
                        <h3 class="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition">${exp.role} ${badge}</h3>
                        <div class="text-slate-500 font-medium">${exp.company}</div>
                    </div>
                    <span class="mt-2 sm:mt-0 text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">${exp.period}</span>
                </div>
                <ul class="list-disc list-outside ml-4 text-slate-600 text-sm space-y-1 mt-3">
                    ${exp.desc.map(d => `<li>${d}</li>`).join('')}
                </ul>
                ${hasDocs ? `<div class="mt-3 text-xs text-teal-600 font-bold sm:hidden">Tap untuk lihat foto &rarr;</div>` : ''}
            </div>`;
        });
    }

    // 5. LOGIC HALAMAN SERTIFIKASI
    const certList = document.getElementById('cert-list');
    if (certList && typeof myData !== 'undefined') {
        myData.certificates.forEach((cert, index) => {
            certList.innerHTML += `
            <div onclick="openModal('cert', ${index})" class="bg-white p-6 rounded-xl border border-slate-200 hover:border-teal-500 hover:shadow-xl hover:-translate-y-1 transition cursor-pointer group relative overflow-hidden">
                <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                    <svg class="w-16 h-16 text-teal-600" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" /></svg>
                </div>
                <div class="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 font-bold text-xl mb-4 group-hover:bg-teal-600 group-hover:text-white transition shadow-sm">${cert.icon}</div>
                <h3 class="text-lg font-bold text-slate-900 mb-1 leading-tight">${cert.title}</h3>
                <p class="text-xs text-slate-500 font-medium uppercase tracking-wide mb-3">${cert.issuer}</p>
                <div class="flex justify-between items-center mt-4 border-t border-slate-100 pt-3">
                    <span class="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded font-mono">${cert.exp}</span>
                    <span class="text-xs font-bold text-teal-600 group-hover:underline">Lihat Sertifikat &rarr;</span>
                </div>
            </div>`;
        });
    }
});

// === SYSTEM MODAL (POPUP) ===
function openModal(type, index) {
    const modal = document.getElementById('globalModal');
    const panel = document.getElementById('modalPanel');
    const content = document.getElementById('modalContent');
    
    modal.classList.remove('hidden');
    // Animasi Fade In
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        panel.classList.remove('scale-95');
    }, 10);

    if (type === 'exp') {
        const data = myData.experience[index];
        const images = data.docs.map(img => 
            `<img src="${img}" class="w-full h-auto rounded-lg shadow-md border border-slate-100" loading="lazy">`
        ).join('');
        
        content.innerHTML = `
            <div class="border-b border-slate-100 pb-4 mb-4">
                <h2 class="text-2xl font-bold text-slate-900">${data.role}</h2>
                <p class="text-slate-500">${data.company}</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                ${images}
            </div>
        `;
    } else if (type === 'cert') {
        const data = myData.certificates[index];
        // Cek ekstensi file
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
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                    Download
                </a>
            </div>
            <div class="flex justify-center bg-slate-50 rounded-lg p-2 border border-slate-100 border-dashed">
                ${mediaDisplay}
            </div>
        `;
    }
}

function closeModal() {
    const modal = document.getElementById('globalModal');
    const panel = document.getElementById('modalPanel');
    
    modal.classList.add('opacity-0');
    panel.classList.add('scale-95');
    
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}
