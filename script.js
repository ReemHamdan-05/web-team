 tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            orange: '#F3923E',
                            'orange-dark': '#E07D2B',
                            'orange-glow': '#FFB876',
                            teal: '#194E61',
                            'teal-dark': '#0F3442',
                            'teal-deep': '#071A22',
                            red: '#992225',
                            accent: '#F3923E'
                        }
                    },
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                        mono: ['"Fira Code"', 'monospace']
                    },
                    animation: {
                        'float-slow': 'float 6s ease-in-out infinite',
                        'float-medium': 'float 4s ease-in-out infinite',
                        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
                         'gradient-x': 'gradientX 15s ease infinite',
                        'spin-slow': 'spin 12s linear infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                            '50%': { transform: 'translateY(-15px) rotate(3deg)' }
                        },
                        pulseGlow: {
                            '0%, 100%': { opacity: '0.4', filter: 'blur(30px)' },
                            '50%': { opacity: '0.8', filter: 'blur(45px)' }
                        },
                        gradientX: {
                            '0%, 100%': { 'background-position': '0% 50%' },
                            '50%': { 'background-position': '100% 50%' }
                        }
                    }
                }
            }
        }



        // 1. Mobile Menu Toggle
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // 2. Google Form Link Modal & Clipboard Logic
        const defaultGoogleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSethQK2Jls0SQbYw811BVpRbzFBucFLpr8sad8GYfDIV7I7kg/viewform?usp=dialog";

        function openGoogleFormModal(e) {
           
        // 1. Mobile Menu Toggle
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        const defaultGoogleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSethQK2Jls0SQbYw811BVpRbzFBucFLpr8sad8GYfDIV7I7kg/viewform?usp=dialog";

        function openGoogleFormModal(e) {
            // Optional: If you want direct link without modal, comment out e.preventDefault()
            // e.preventDefault();
             // document.getElementById('modal-google-link').href = defaultGoogleFormUrl;
            // document.getElementById('google-form-modal').classList.remove('hidden');
        }

        function closeGoogleFormModal() {
            document.getElementById('google-form-modal').classList.add('hidden');
        }

        function copyGoogleFormLink() {
            const tempInput = document.createElement('input');
            tempInput.value = defaultGoogleFormUrl;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);

            const toast = document.getElementById('copy-toast');
            toast.classList.remove('hidden');
            setTimeout(() => {
                toast.classList.add('hidden');
            }, 4000);
        }

            // 3. Playground Switcher
        const playgroundSnippets = {
            html: `<!-- HTML5 Semantic Structure -->\n<div class="iweb-card">\n  <h1>iWeb Coding Club</h1>\n  <p>Powered by iTeam</p>\n  <button id="joinBtn">Join Now</button>\n</div>`,
            css: `/* CSS3 & Tailwind Styles */\n.iweb-card {\n  background: #194E61;\n  border-radius: 1rem;\n  padding: 2rem;\n  color: #F3923E;\n  transition: all 0.3s ease;\n}`,
            js: `// JavaScript ES6+ Interactive Logic\nconst joinBtn = document.getElementById('joinBtn');\njoinBtn.addEventListener('click', () => {\n  console.log('Redirecting to Google Form...');\n  window.open('https://forms.google.com', '_blank');\n});`,
            react: `// React Component (JSX)\nexport default function WebClub() {\n  return (\n    <button className="bg-brand-orange text-white px-6 py-3 rounded-xl">\n      Join iWeb Coding Club\n    </button>\n  );\n}`
        };

        function setPlaygroundTab(tech) {
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('bg-brand-orange', 'text-white');
                btn.classList.add('bg-white/5', 'text-slate-300');
            });
               const activeBtn = document.getElementById(`tab-${tech}`);
            if (activeBtn) {
                activeBtn.classList.remove('bg-white/5', 'text-slate-300');
                activeBtn.classList.add('bg-brand-orange', 'text-white');
            }

            document.getElementById('playground-code-display').innerHTML = `<code>${playgroundSnippets[tech].replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code>`;
        }

        // 4. Member Profile Modal
        function openMemberModal(name, role, bio, skills, imgSrc) {
            document.getElementById('modal-name').innerText = name;
            document.getElementById('modal-role').innerText = role;
            document.getElementById('modal-bio').innerText = bio;
            document.getElementById('modal-img').src = imgSrc;

            const skillsContainer = document.getElementById('modal-skills');
            skillsContainer.innerHTML = '';
            skills.forEach(skill => {
                const badge = document.createElement('span');
                badge.className = 'px-3 py-1 rounded-xl bg-white/10 text-xs font-mono font-bold text-brand-orange border border-brand-orange/30';
                badge.innerText = skill;
               skillsContainer.appendChild(badge);
            });

            document.getElementById('member-modal').classList.remove('hidden');
        }

        function closeMemberModal() {
            document.getElementById('member-modal').classList.add('hidden');
        }

        // 5. Dynamic Background Canvas Animation (Particles + Code Icons)
        const canvas = document.getElementById('bg-canvas');
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const symbols = ['< />', '{ }', 'HTML', 'CSS', 'JS', 'React', 'iWeb', '=>'];
        const particles = [];
              for (let i = 0; i < 35; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                symbol: symbols[Math.floor(Math.random() * symbols.length)],
                size: Math.random() * 14 + 10,
                speedY: Math.random() * 0.6 + 0.2,
                opacity: Math.random() * 0.4 + 0.1
            });
        }

        function animateCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.y -= p.speedY;
                if (p.y < -20) {
                    p.y = canvas.height + 20;
                    p.x = Math.random() * canvas.width;
                }

                ctx.font = `${p.size}px "Fira Code", monospace`;
                ctx.fillStyle = `rgba(243, 146, 62, ${p.opacity})`;
                ctx.fillText(p.symbol, p.x, p.y);
            });
requestAnimationFrame(animateCanvas);
        }
        animateCanvas();
    }

    