document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.mainlink');
    let activeLink = document.querySelector('.mainlink.active');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior
            if (activeLink) {
                activeLink.classList.remove('active');
            }
            this.classList.add('active');
            activeLink = this;

            // Scroll to the corresponding section
            const targetId = this.getAttribute('href').substring(1); // Get the target section's ID
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const yOffset = targetSection.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top: yOffset, behavior: 'smooth' });
            }
        });
    });
});
