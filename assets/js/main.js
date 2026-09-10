(function () {
    // Hide loading spinner
    window.addEventListener('load', function () {
        var spinner = document.getElementById('spinner');
        if (spinner) spinner.classList.remove('show');
    });

    // Back to top button
    var backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });
    if (backToTop) {
        backToTop.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Close mobile nav after clicking a link
    var navLinks = document.querySelectorAll('#navbarCollapse .nav-link');
    var navbarCollapseEl = document.getElementById('navbarCollapse');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (navbarCollapseEl.classList.contains('show') && window.bootstrap) {
                var bsCollapse = window.bootstrap.Collapse.getOrCreateInstance(navbarCollapseEl);
                bsCollapse.hide();
            }
        });
    });
})();
