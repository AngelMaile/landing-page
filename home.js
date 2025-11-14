document.addEventListener('DOMContentLoaded', () => {
    
    // --- Dark Mode Toggle Logic ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Function to set the theme and save preference
    const set_theme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
        localStorage.setItem('theme', theme); // Save preference
    };

    // Click event for the toggle
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            set_theme('light');
        } else {
            set_theme('dark');
        }
    });

    // Check for saved theme in local storage on page load
    const currentTheme = localStorage.getItem('theme') || 'light';
    set_theme(currentTheme);

    // --- End of Dark Mode Logic ---


    // Your original code
    console.log('Angel Maile website loaded'); // Updated this to match your HTML
    
    const allLinks = document.querySelectorAll('a');
    
    allLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            // You could add a class here
        });
        
        link.addEventListener('mouseleave', () => {
            // And remove it here
        });
    });
});