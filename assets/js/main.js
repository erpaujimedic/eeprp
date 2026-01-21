document.addEventListener("DOMContentLoaded", function() {
    
    // 1. RENDER NAVBAR
    const navHTML = `
    <nav class="bg-slate-900/90 backdrop-blur-md shadow-lg sticky top-0 z-40 border-b border-slate-800">
        <div class="max-w-5xl mx-auto px-4">
            <div class="flex justify-between items-center h-16">
                <a href="index.html" class="text-white font-bold text-xl tracking-wider uppercase">
                    Eep Ridwan <span class="text-teal-500">Pauji</span>
                </a>
                <div class="hidden md:flex space-x-8">
                    <a href="index.html" class="text-slate-300 hover:text-teal-400 text-sm font-bold uppercase transition">Home</a>
                    <a href="portfolio.html" class="text-slate-300 hover:text-teal-400 text-sm font-bold uppercase transition">Portfolio</a>
                    <a href="sertifikasi.html" class="text-slate-300 hover:text-teal-400 text-sm font-bold uppercase transition">Sertifikasi</a>
                </div>
            </div>
        </div>
    </nav>
    
    <div id="globalModal" class="fixed inset-0 z-50 hidden flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
        <div class="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl relative">
            <button onclick="closeModal()" class="absolute top-4 right-4 text-slate-500 hover:text-red-500 text-2xl font-bold">&times;</button>
            <div id="modalContent" class="p-6"></div>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML("afterbegin", navHTML);

    // 2. LOGIC HALAMAN HOME (HERO IMAGE)
    const heroBg = document.getElementById('hero-section');
    if (heroBg && typeof myData !== 'undefined') {
        // Set background image dari data.js
        heroBg.style.backgroundImage = `url('${myData.profile.heroImage}')`;
    }

    // 3. LOGIC HALAMAN PORTFOLIO (PENGALAMAN)
    const careerContainer = document.getElementById('portfolio-list');
    if (careerContainer && typeof myData !== 'undefined') {
        myData.experience.forEach((exp, index) => {
            const hasDocs = exp.docs && exp.docs.length > 0;
            const cursorStyle = hasDocs ? "cursor-pointer hover:bg-slate-50" : "";
            const iconDoc = hasDocs ? `<span class="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded ml-2">📸 Lihat Dokumentasi</span>` : "";
            
            const html = `
            <div onclick="${hasDocs ? `showExpModal(${index})` : ''}" class="relative pl-8 border-l-2 border-slate-200 pb-10 last:pb-0 ${cursorStyle} transition p-4 rounded-r-lg group">
                <div class="absolute -left-2.5 top-4 w-5 h-5 bg-teal-600 rounded-full border-4 border-white shadow-sm group-hover:scale-125 transition"></div>
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h3 class="text-xl font-bold text-slate-800 flex items-center gap-2">
                        ${exp.role} ${iconDoc}
                    </h3>
                    <span class="text-xs font-bold text-teal-700 bg-teal-50 px-2 py-1 rounded uppercase">${exp.period}</span>
                </div>
                <div class="text-lg font-semibold text-slate-500 mb-3">${exp.company}</div>
                <ul class="list-disc list-outside ml-4 text-slate-600 space-y-1 text-sm">
                    ${exp.desc.map(d => `<li>${d}</li>`).join('')}
                </ul>
            </div>`;
            careerContainer.innerHTML += html;
        });
    }

    // 4. LOGIC HALAMAN SERTIFIKASI
    const certContainer = document.getElementById('cert-list');
    if (certContainer && typeof myData !== 'undefined') {
        myData.certificates.forEach((cert, index) => {
            const html = `
            <div onclick="showCertModal(${index})" class="bg-white p-6 rounded-xl border border-slate-200 hover:border-teal-500 hover:shadow-lg transition cursor-pointer group text-center relative overflow-hidden">
                <div class="bg-teal-50 w-16 h-16 mx-auto flex items-center justify-center rounded-full text-teal-600 mb-4 font-bold text-2xl group-hover:bg-teal-600 group-hover:text-white transition">
                    ${cert.icon}
                </div>
                <h3 class="font-bold text-slate-900 text-lg">${cert.title}</h3>
                <p class="text-sm text-slate-500 mb-2">${cert.issuer}</p>
                <span class="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded font-mono">${cert.exp}</span>
                <div class="absolute inset-0 bg-teal-600/10 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <span class="bg-white text-teal-700 px-4 py-2 rounded-full font-bold shadow-sm text-sm">Buka Sertifikat</span>
                </div>
            </div>`;
            certContainer.innerHTML += html;
        });
    }
    
    // 5. LOGIC BLOG (HOME)
    const blogContainer = document.getElementById('blog-list');
    if (blogContainer && typeof myData !== 'undefined') {
        myData.blog.forEach(post => {
            blogContainer.innerHTML += `
            <article class="bg-white/90 backdrop-blur p-6 rounded-xl border border-slate-200 shadow-sm hover:border-teal-500 transition">
                <div class="text-xs text-teal-600 font-bold mb-2 uppercase">${post.date}</div>
                <h4 class="text-xl font-bold text-slate-900 mb-2">${post.title}</h4>
                <p class="text-slate-600 text-sm mb-4">${post.summary}</p>
                <a href="${post.link}" class="text-sm font-bold text-teal-700 hover:underline">Baca Selengkapnya &rarr;</a>
            </article>`;
        });
    }
});

// FUNGSI MODAL (POPUP)
function closeModal() {
    document.getElementById('globalModal').classList.add('hidden');
}

function showExpModal(index) {
    const data = myData.experience[index];
    const modal = document.getElementById('globalModal');
    const content = document.getElementById('modalContent');
    
    // Generate Galeri Foto
    const imagesHTML = data.docs.map(img => 
        `<img src="${img}" class="w-full rounded-lg shadow-md mb-4 border border-slate-200">`
    ).join('');

    content.innerHTML = `
        <h2 class="text-2xl font-bold text-slate-900 mb-1">Dokumentasi Kerja</h2>
        <p class="text-teal-600 font-medium mb-6">${data.role} di ${data.company}</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${imagesHTML}
        </div>
    `;
    modal.classList.remove('hidden');
}

function showCertModal(index) {
    const data = myData.certificates[index];
    const modal = document.getElementById('globalModal');
    const content = document.getElementById('modalContent');
    
    // Cek apakah file PDF atau Gambar
    let fileView = '';
    if (data.file.includes('.pdf')) {
        fileView = `<iframe src="${data.file}" class="w-full h-[60vh] rounded-lg border border-slate-200"></iframe>`;
    } else {
        fileView = `<img src="${data.file}" class="w-full h-auto max-h-[70vh] object-contain rounded-lg border border-slate-200">`;
    }

    content.innerHTML = `
        <div class="flex justify-between items-center mb-4">
            <div>
                <h2 class="text-2xl font-bold text-slate-900">${data.title}</h2>
                <p class="text-slate-500 text-sm">${data.issuer}</p>
            </div>
            <a href="${data.file}" download class="bg-teal-600 text-white px-4 py-2 rounded text-sm font-bold hover:bg-teal-700">Download</a>
        </div>
        <div class="bg-slate-100 p-2 rounded-xl flex justify-center">
            ${fileView}
        </div>
    `;
    modal.classList.remove('hidden');
}
