// MOBILE SUPPORT – tap to open/close
const wrappers = document.querySelectorAll('.btn-wrapper');

wrappers.forEach(w => {
    w.addEventListener('click', e => {
        if (window.innerWidth < 768) {
            const panel = w.querySelector('.panel');

            // Close all other panels
            document.querySelectorAll('.panel').forEach(p => {
                if (p !== panel) p.style.opacity = 0;
            });

            // Toggle this one
            panel.style.opacity = panel.style.opacity === "1" ? "0" : "1";

            e.stopPropagation();
        }
    });
});

// close on outside tap
document.addEventListener("click", () => {
    if (window.innerWidth < 768) {
        document.querySelectorAll('.panel').forEach(p => p.style.opacity = 0);
    }
});
