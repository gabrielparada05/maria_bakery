window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var button = document.getElementById('whatsappButton');
    var windowHeight = window.innerHeight;

    // Adjust the position of the WhatsApp button based on scroll position
    if (scrollPosition > windowHeight / 2) {
        button.style.display = 'block';
        button.style.bottom = '20px';
    } else {
        button.style.display = 'none';
    }

    
});
