// DESKTOP: dropdowns open on hover (CSS handles this)

// MOBILE: dropdowns open on tap
const wrappers = document.querySelectorAll(".btn-wrapper");

wrappers.forEach(wrapper => {
    wrapper.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            // Close other dropdowns
            wrappers.forEach(w => {
                if (w !== wrapper) w.classList.remove("active");
            });

            // Toggle this one
            wrapper.classList.toggle("active");
        }
    });
});

// Close when clicking outside
window.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
        if (!e.target.closest(".btn-wrapper")) {
            wrappers.forEach(w => w.classList.remove("active"));
        }
    }
});
