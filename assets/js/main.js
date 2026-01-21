document.addEventListener("DOMContentLoaded", function() {
    
    // 1. INJECT NAVBAR
    const navHTML = `
    <nav class="bg-slate-900 shadow-lg sticky top-0 z-50 border-b border-slate-800">
        <div class="max-w-5xl mx-auto px-4">
            <div class="flex justify-between items-center h-16">
                <a href="index.html" class="text-white font-bold text-xl tracking-wider uppercase">
                    Eep Ridwan <span class="text-teal-500">Pauji</span>
                </a>
                <div class="hidden md:flex space-x-8">
                    <a href="index.html" class="text-slate-300 hover:text-teal-400 transition py-2 text-sm font-medium uppercase">Home & Blog</a>
                    <a href="career.html" class="text-slate-300 hover:text-teal-400 transition py-2 text-sm font-medium uppercase">Resume</a>
                    <a href="portfolio.html" class="text-slate-300 hover:text-teal-400 transition py-2 text-sm font-medium uppercase">Sertifikasi</a>
                </div>
            </div>
        </div>
    </nav>`;
    document.body.insertAdjacentHTML("afterbegin", navHTML);

    // 2. INJECT FOOTER
    const footerHTML = `
    <footer class="bg-slate-900 text-slate-500 py-8 text-center text-sm mt-auto border-t border-slate-800">
        <p>&copy; 2026 Eep Ridwan Pauji. All rights reserved.</p>
        <div class="mt-2 flex justify-center gap-4">
            <a href="mailto:erpauji.medic@gmail.com" class="hover:text-teal-500 transition">Email</a>
            <a href="https://linkedin.com/in/eepridwanpauji" class="hover:text-teal-500 transition">LinkedIn</a>
        </div>
    </footer>`;
    document.body.insertAdjacentHTML("beforeend", footerHTML);

    // 3. LOAD BLOG DATA (Khusus Halaman Home)
    const blogContainer = document.getElementById('blog-list');
    if (blogContainer && typeof myData !== 'undefined') {
        myData.blog.forEach(post => {
            const html = `
            <article class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-teal-500 transition group">
                <div class="text-xs text-teal-600 font-bold mb-2 uppercase">${post.date}</div>
                <h4 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition">${post.title}</h4>
                <p class="text-slate-600 mb-4 text-sm leading-relaxed">${post.summary}</p>
                <a href="${post.link}" class="text-sm font-bold text-slate-900 border-b-2 border-transparent group-hover:border-teal-500 transition">Baca Selengkapnya &rarr;</a>
            </article>`;
            blogContainer.innerHTML += html;
        });
    }

    // 4. LOAD CAREER DATA (Khusus Halaman Career)
    const careerContainer = document.getElementById('career-list');
    if (careerContainer && typeof myData !== 'undefined') {
        myData.experience.forEach(exp => {
            const descList = exp.desc.map(d => `<li>${d}</li>`).join('');
            const html = `
            <div class="relative pl-8 border-l-2 border-slate-200 pb-10 last:pb-0">
                <div class="absolute -left-2.5 top-0 w-5 h-5 bg-teal-600 rounded-full border-4 border-white shadow-sm"></div>
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h3 class="text-xl font-bold text-slate-800">${exp.role}</h3>
                    <span class="text-xs font-bold text-teal-700 bg-teal-50 px-2 py-1 rounded uppercase tracking-wide">${exp.period}</span>
                </div>
                <div class="text-lg font-semibold text-slate-500 mb-3">${exp.company}</div>
                <ul class="list-disc list-outside ml-4 text-slate-600 space-y-1 leading-relaxed">
                    ${descList}
                </ul>
            </div>`;
            careerContainer.innerHTML += html;
        });
    }
});
