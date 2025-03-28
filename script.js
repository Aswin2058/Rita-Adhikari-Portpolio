// Responsive Navbar Toggle
function OpenNav() {
    const mobileNav = document.querySelector(".mobile-nav");
    if (mobileNav) {
        mobileNav.style.display = "block"; // Show mobile nav
    }
}

function CloseNav() {
    const mobileNav = document.querySelector(".mobile-nav");
    if (mobileNav) {
        mobileNav.style.display = "none"; // Hide mobile nav
    }
}

// Attach event listeners once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navClose = document.querySelector(".nav-close");
    const mobileNav = document.querySelector(".mobile-nav");

    if (menuIcon) {
        menuIcon.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent closing immediately when opening
            OpenNav();
        });
    }

    if (navClose) {
        navClose.addEventListener("click", function (event) {
            event.stopPropagation();
            CloseNav();
        });
    }

    // Close when clicking outside the menu
    document.addEventListener("click", function (event) {
        if (mobileNav && !mobileNav.contains(event.target) && !menuIcon.contains(event.target)) {
            CloseNav();
        }
    });

    // Force close menu when screen size is greater than 800px
    window.addEventListener("resize", function () {
        if (window.innerWidth > 800) {
            CloseNav();
        }
    });

    // Ensure menu is hidden initially if screen size is greater than 800px
    if (window.innerWidth > 800) {
        CloseNav();
    }
});
