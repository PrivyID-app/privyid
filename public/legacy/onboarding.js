document.addEventListener('DOMContentLoaded', () => {
    // Flow Simulation Helper
    // Use window.showFlow('section_id') in console to switch flows
    window.showFlow = (id) => {
        document.querySelectorAll('.login_flow, .signup_flow, .verify_email, .welcome_step, .account_type')
            .forEach(flow => flow.classList.remove('active'));
        const target = document.getElementById(id);
        if (target) {
            target.classList.add('active');
            // Trigger fade-in animation
            target.classList.remove('visible');
            // Force reflow to restart animation
            void target.offsetWidth;
            target.classList.add('visible');
        }
    };

    // Account Type Selection Helper
    const cards = document.querySelectorAll('.account_type_container');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => c.classList.remove('is-selected'));
            card.classList.add('is-selected');
        });
    });

    // Flow Navigation Logic
    const signupLink = document.getElementById('signup_link');
    if (signupLink) {
        signupLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.showFlow('signup_flow');
        });
    }

    const registerBtn = document.getElementById('register_btn');
    if (registerBtn) {
        registerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const emailValue = document.getElementById('signup_email').value;
            const displaySpan = document.getElementById('user_email_display');
            if (displaySpan && emailValue) {
                displaySpan.textContent = emailValue;
            }
            window.showFlow('verify_email');
        });
    }

    const submitCodeBtn = document.getElementById('submit_code_btn');
    if (submitCodeBtn) {
        submitCodeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.showFlow('account_type');
        });
    }

    const backBtn = document.querySelector('.back_button');
    if (backBtn) {
        backBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.showFlow('verify_email');
        });
    }

    // Theme Loading (Re-implemented for root script)
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);

    // Initialize fade-in for active sections on page load
    const activeSections = document.querySelectorAll('.section-fade.active');
    activeSections.forEach(section => {
        section.classList.add('visible');
    });
});
