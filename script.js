  // === State Global ===
        let currentPage = 'home';
        let currentLang = 'id';
        // State untuk Builder
        let builderState = {
            websiteType: '',
            companyName: '',
            colorScheme: 'blue',
            features: [],
            generatedCode: ''
        };

        // === Inisialisasi ===
        document.addEventListener('DOMContentLoaded', () => {
            // Render ikon Lucide
            renderLucideIcons();
            // Set halaman awal dan bahasa
            updateActivePage(currentPage);
            updateLanguage();
            // Buat bintang di hero
            createStars();
            // Listener untuk scroll navbar
            window.addEventListener('scroll', handleScroll);
        });

        // === Fungsi Render Ikon ===
        function renderLucideIcons() {
            // Ganti React.createElement dengan h (dari Lucide UMD)
            const h = React.createElement;
            // Temukan semua elemen dengan atribut data-lucide
            document.querySelectorAll('.lucide-icon').forEach(elem => {
                const iconName = elem.getAttribute('data-lucide');
                const icon = Lucide[iconName];
                if (icon) {
                    // Buat elemen SVG
                    const svg = h(icon, {
                        className: elem.className,
                        size: elem.getAttribute('width') || elem.getAttribute('height') || 24 
                    });
                    // Render SVG ke DOM
                    ReactDOM.render(svg, elem);
                }
            });
        }

        // === Fungsi Navigasi ===
        function navigateTo(page) {
            currentPage = page;
            updateActivePage(page);
            // Tutup menu mobile jika terbuka
            closeMobileMenu();
            // Scroll ke atas
            window.scrollTo(0, 0);
        }

        function updateActivePage(page) {
            // Sembunyikan semua halaman
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });
            // Tampilkan halaman yang aktif
            const activePage = document.getElementById(page + 'Page');
            if (activePage) {
                activePage.classList.add('active');
                activePage.classList.add('fade-in');
            }

            // Update style nav link desktop
            document.querySelectorAll('.nav-link').forEach(link => {
                if (link.getAttribute('data-page') === page) {
                    link.classList.add('text-indigo-400');
                    link.classList.remove('text-slate-300');
                } else {
                    link.classList.remove('text-indigo-400');
                    link.classList.add('text-slate-300');
                }
            });

            // Update style nav link mobile
            document.querySelectorAll('.nav-link-mobile').forEach(link => {
                if (link.getAttribute('data-page') === page) {
                    link.classList.add('bg-indigo-600');
                } else {
                    link.classList.remove('bg-indigo-600');
                }
            });
        }

        // === Fungsi Menu Mobile ===
        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            const menuIcon = document.getElementById('menuIcon');
            const xIcon = document.getElementById('xIcon');
            
            mobileMenu.classList.toggle('hidden');
            menuIcon.classList.toggle('hidden');
            xIcon.classList.toggle('hidden');
        }

        function closeMobileMenu() {
            document.getElementById('mobileMenu').classList.add('hidden');
            document.getElementById('menuIcon').classList.remove('hidden');
            document.getElementById('xIcon').classList.add('hidden');
        }

        // === Fungsi Ganti Bahasa ===
        function toggleLanguage() {
            currentLang = currentLang === 'id' ? 'en' : 'id';
            document.getElementById('langBtn').textContent = currentLang === 'id' ? 'EN' : 'ID';
            updateLanguage();
        }

        function updateLanguage() {
            document.querySelectorAll('[data-id]').forEach(elem => {
                const text = currentLang === 'id' 
                    ? elem.getAttribute('data-id') 
                    : elem.getAttribute('data-en');
                if (text) {
                    elem.textContent = text;
                }
            });

            // Update placeholder secara manual
            const companyNameInput = document.getElementById('companyNameInput');
            if(companyNameInput) {
                companyNameInput.placeholder = currentLang === 'id' ? 'Masukkan nama...' : 'Enter name...';
            }
            const contactNameInput = document.getElementById('name');
            if(contactNameInput) {
                contactNameInput.placeholder = currentLang === 'id' ? 'Masukkan nama Anda' : 'Enter your name';
            }
            const contactPhoneInput = document.getElementById('phone');
            if(contactPhoneInput) {
                contactPhoneInput.placeholder = currentLang === 'id' ? '+62 812-3456-7890' : '+1 (555) 123-4567';
            }
            const contactCompanyInput = document.getElementById('company');
            if(contactCompanyInput) {
                contactCompanyInput.placeholder = currentLang === 'id' ? 'Opsional' : 'Optional';
            }
            const contactMessageInput = document.getElementById('message');
            if(contactMessageInput) {
                contactMessageInput.placeholder = currentLang === 'id' ? 'Ceritakan tentang proyek Anda...' : 'Tell us about your project...';
            }
            const contactServiceSelect = document.getElementById('service').querySelector('option[value=""]');
            if(contactServiceSelect) {
                contactServiceSelect.textContent = currentLang === 'id' ? 'Pilih layanan...' : 'Select service...';
            }
        }

        // === Fungsi Efek Navbar Scroll ===
        function handleScroll() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('bg-slate-900/95', 'shadow-lg');
                navbar.classList.remove('bg-slate-900/80');
            } else {
                navbar.classList.remove('bg-slate-900/95', 'shadow-lg');
                navbar.classList.add('bg-slate-900/80');
            }
        }

        // === Fungsi Efek Bintang Hero ===
        function createStars() {
            const container = document.getElementById('starsContainer');
            if (!container) return;
            for (let i = 0; i < 50; i++) {
                const star = document.createElement('div');
                star.className = 'absolute w-1 h-1 bg-indigo-400 rounded-full pulse-dot';
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.animationDelay = `${Math.random() * 3}s`;
                star.style.animationDuration = `${2 + Math.random() * 3}s`;
                container.appendChild(star);
            }
        }

        // === Fungsi Form Kontak ===
        function handleContactSubmit(event) {
            event.preventDefault();
            const form = document.getElementById('contactForm');
            const successMsg = document.getElementById('formSuccess');
            
            form.classList.add('hidden');
            successMsg.classList.remove('hidden');
            
            // Reset form setelah 3 detik
            setTimeout(() => {
                form.reset();
                form.classList.remove('hidden');
                successMsg.classList.add('hidden');
            }, 3000);
        }

        // === Logika AI Web Builder ===
        function showBuilderStep(step) {
            if (step === 'input') {
                document.getElementById('builderInput').classList.remove('hidden');
                document.getElementById('builderPreview').classList.add('hidden');
            } else if (step === 'preview') {
                document.getElementById('builderInput').classList.add('hidden');
                document.getElementById('builderPreview').classList.remove('hidden');
            }
        }

        function selectWebsiteType(btnElement, type) {
            builderState.websiteType = type;
            // Update UI
            document.querySelectorAll('.website-type-btn').forEach(btn => {
                btn.classList.remove('border-indigo-500', 'bg-indigo-500/20');
                btn.classList.add('border-slate-700', 'hover:border-slate-600');
            });
            btnElement.classList.add('border-indigo-500', 'bg-indigo-500/20');
            btnElement.classList.remove('border-slate-700', 'hover:border-slate-600');
        }

        function selectColorScheme(btnElement, color) {
            builderState.colorScheme = color;
            // Update UI
            document.querySelectorAll('.color-scheme-btn').forEach(btn => {
                btn.classList.remove('border-indigo-500');
                btn.classList.add('border-slate-700', 'hover:border-slate-600');
            });
            btnElement.classList.add('border-indigo-500');
            btnElement.classList.remove('border-slate-700', 'hover:border-slate-600');
        }

        function toggleFeature(btnElement, feature) {
            const index = builderState.features.indexOf(feature);
            if (index > -1) {
                builderState.features.splice(index, 1); // Hapus
                btnElement.classList.remove('border-indigo-500', 'bg-indigo-500/20');
                btnElement.classList.add('border-slate-700', 'hover:border-slate-600');
            } else {
                builderState.features.push(feature); // Tambah
                btnElement.classList.add('border-indigo-500', 'bg-indigo-500/20');
                btnElement.classList.remove('border-slate-700', 'hover:border-slate-600');
            }
        }

        function generateWithAI() {
            const btn = document.getElementById('aiSuggestBtn');
            btn.disabled = true;
            btn.querySelector('span[data-id]').textContent = currentLang === 'id' ? 'Menganalisis...' : 'Analyzing...';
            
            // Simulasikan panggilan AI
            setTimeout(() => {
                const suggestions = [
                    `Berdasarkan website ${builderState.websiteType} Anda, saya merekomendasikan:\n• Hero section modern dengan tombol CTA\n• Navigasi responsif\n• Bagian fitur dengan ikon`,
                    `Untuk ${builderState.companyName || 'website Anda'}, pertimbangkan:\n• Palet warna ${builderState.colorScheme} yang profesional\n• Gambar berkualitas tinggi\n• Bagian testimoni untuk bukti sosial`,
                    `Saran AI untuk ${builderState.websiteType}:\n• Gunakan tema ${builderState.colorScheme} untuk kepercayaan\n• Tambahkan bagian: ${builderState.features.join(', ') || 'Kontak'}\n• Optimalkan untuk mobile-first`
                ];
                
                const suggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
                
                document.getElementById('aiSuggestionText').textContent = suggestion;
                document.getElementById('aiSuggestionBox').classList.remove('hidden');
                
                btn.disabled = false;
                btn.querySelector('span[data-id]').textContent = currentLang === 'id' ? 'Dapatkan Saran AI' : 'Get AI Suggestions';
            }, 1500);
        }

        function generateWebsite() {
            const btn = document.getElementById('generateSiteBtn');
            builderState.companyName = document.getElementById('companyNameInput').value;

            if (!builderState.websiteType || !builderState.companyName) {
                alert(currentLang === 'id' ? 'Silakan pilih Jenis Website dan masukkan Nama Perusahaan.' : 'Please select a Website Type and enter a Company Name.');
                return;
            }

            btn.disabled = true;
            btn.querySelector('span[data-id]').textContent = currentLang === 'id' ? 'Membuat Website...' : 'Creating Website...';

            // Simulasikan pembuatan website
            setTimeout(() => {
                const code = `<!DOCTYPE html>
<html lang="${currentLang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${builderState.companyName}</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
</head>
<body class="bg-gray-50 font-sans">
    <nav class="bg-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4 py-4">
            <div class="flex justify-between items-center">
                <h1 class="text-2xl font-bold text-${builderState.colorScheme}-600">${builderState.companyName}</h1>
                <div class="space-x-6">
                    <a href="#" class="text-gray-700 hover:text-${builderState.colorScheme}-600">Home</a>
                    <a href="#" class="text-gray-700 hover:text-${builderState.colorScheme}-600">About</a>
                    <a href="#" class="text-gray-700 hover:text-${builderState.colorScheme}-600">Contact</a>
                </div>
            </div>
        </div>
    </nav>

    <section class="bg-gradient-to-r from-${builderState.colorScheme}-500 to-${builderState.colorScheme}-700 text-white py-20">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <h2 class="text-5xl font-bold mb-6">Welcome to ${builderState.companyName}</h2>
            <p class="text-xl mb-8">Your trusted partner for ${builderState.websiteType} solutions</p>
            <button class="bg-white text-${builderState.colorScheme}-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Get Started
            </button>
        </div>
    </section>

    ${builderState.features.length > 0 ? `
    <section class="py-20">
        <div class="max-w-7xl mx-auto px-4">
            <h3 class="text-4xl font-bold text-center mb-12">Our Features</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                ${builderState.features.slice(0, 3).map(feature => `
                <div class="bg-white p-8 rounded-lg shadow-lg">
                    <h4 class="text-xl font-bold mb-4 text-${builderState.colorScheme}-600">${feature}</h4>
                    <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    ` : ''}

    <footer class="bg-gray-800 text-white py-8 mt-20">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <p>&copy; 2025 ${builderState.companyName}. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`;
                
                builderState.generatedCode = code;
                document.getElementById('generatedCode').textContent = code;
                document.getElementById('websitePreview').srcdoc = code;
                
                showBuilderStep('preview');

                btn.disabled = false;
                btn.querySelector('span[data-id]').textContent = currentLang === 'id' ? 'Generate Website' : 'Generate Website';
            }, 2500);
        }

        function downloadWebsite() {
            if (!builderState.generatedCode) return;
            const blob = new Blob([builderState.generatedCode], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${builderState.companyName.replace(/\s+/g, '-').toLowerCase() || 'website'}.html`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }