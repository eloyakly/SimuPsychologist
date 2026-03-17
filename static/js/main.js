/**
 * Simu Psychologist - Main UI Logic
 * Handles global interactions like theme toggling and common UI behaviors.
 */

document.addEventListener('DOMContentLoaded', () => {
    // === Theme Toggle Logic ===
    const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn, #theme-toggle');

    // Check local storage or default to dark
    // Check local storage or default to dark
    if (!('theme' in localStorage)) {
        localStorage.theme = 'dark';
    }

    // Apply theme based on preference
    if (localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // Attach click handlers to all toggle buttons found
    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');

            // Save preference
            if (document.documentElement.classList.contains('dark')) {
                localStorage.theme = 'dark';
            } else {
                localStorage.theme = 'light';
            }
        });
    });

    // === Password Visibility Toggle (Login Page) ===
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    passwordInputs.forEach(input => {
        // Find the toggle button related to this input (usually next sibling or parent wrapper)
        const wrapper = input.parentElement;
        const toggleBtn = wrapper.querySelector('button');

        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                const icon = toggleBtn.querySelector('.material-symbols-outlined');
                if (input.type === "password") {
                    input.type = "text";
                    if (icon) icon.textContent = "visibility_off";
                } else {
                    input.type = "password";
                    if (icon) icon.textContent = "visibility";
                }
            });
        }
    });
});
