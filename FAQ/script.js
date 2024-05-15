let accordion = document.querySelectorAll('.content-container');

accordion.forEach(container => {
    container.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});
