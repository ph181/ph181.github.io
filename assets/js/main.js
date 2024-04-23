document.querySelector('#burger').addEventListener('click', function() {
    this.classList.toggle('clicked');
    var nav = document.querySelector('#navbar');
    var links = document.querySelectorAll('#navbar a');
    if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'block';
        links.forEach(function(link) {
            link.style.display = 'block';
        });
    } else {
        nav.style.display = 'none';
        links.forEach(function(link) {
            link.style.display = 'none';
        });
    }
});
