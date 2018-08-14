const app = {};

app.responsiveNav = function() {
    const icon = document.querySelector('.icon');
    const responsiveMenu = document.querySelector('.header__nav--responsive');
    const body = document.querySelector('body');
    let active = false;
    icon.addEventListener('click', () => {
        // active is false, add a class of active to icon, turning it from bars to x, and make active true. then use jquery to fade in responsive nav
        if (!active) {
            icon.classList.add('active');
            active = true;
            // jQuery effet for navigation overlay to fade in
            $(responsiveMenu).fadeIn();
        } else {
            // if active is true, remove class of active from icon, make active false, and fade out the responsive nav 
            icon.classList.remove('active');
            active = false;
            // jQuery effect for navigation overlay to fade out
            $(responsiveMenu).fadeOut();
        }
    });
    // when you click header nav responsive remove the class of active from the icon, making icon show bars again, and fade out the navigation. 
    responsiveMenu.addEventListener('click', () => {
        icon.classList.remove('active');
        $(responsiveMenu).fadeOut();
        // jQuery effect for navigation overlay to fade out
        active = false;
    })
};

app.smoothScroll = function(event) {
    // Add smooth scrolling to all links
    $('a').on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery’s animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
                });
        } // End if
    });          
};
        
// flickity slider
app.projectSlider = function () {
    $('.projects--container').flickity({
        wrapAround: true,
        watchCSS: true,
        freeScroll: true
    });
};
        
        // sticky logo
app.stickyLogo = function() {
    const logo = document.querySelector('#nav-logo');
    logo.onclick = function () {
        window.location.href = '#home';
    };
    const navContent = document.querySelector('.nav-contents');
    const heroTitle = document.querySelector('.title');
    const topOfLogo = logo.offsetTop;

    if (window.innerWidth > 1100) {
        function fixLogo() {
            if (window.scrollY >= topOfLogo && navContent) {
                logo.classList.add('fixed-logo');
                navContent.appendChild(logo); 
            } else if (navContent) {
                logo.classList.remove('fixed-logo');
                heroTitle.appendChild(logo); 
            }
        };
        window.addEventListener('scroll', fixLogo);
    }
     else {
        heroTitle.removeChild(logo); 
        $(navContent).prepend(logo);
    }
};

app.logoResize = function() {
    const logo = document.querySelector('#nav-logo');
    const navContent = document.querySelector('.nav-contents');
    
    const fixLogo = () => {
        console.log('hi')
    logo.classList.add('fixed-logo');
    navContent.appendChild(logo); 
    }

}

app.events = function () {
    app.smoothScroll();
    app.responsiveNav();
    app.projectSlider();
    app.stickyLogo();
    window.addEventListener('resize', app.logoResize())
};

app.init = function () {
  app.events();
}

$(function () {
  app.init();
});