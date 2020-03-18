$('.contacts--input').on('input', function() {
    if ((this.id === 'name') || (this.id === 'lastName')) {
        $('#name-o')[0].textContent = $('#name')[0].value + ' ' + $('#lastName')[0].value;
    } else {
        $('#' + this.id + '-o')[0].textContent = this.value;
    }
});

$('.section--main-btn').on('click', function() {
    $('html').animate({ 
        scrollTop: $('#makeOrderO').offset().top // прокручиваем страницу к требуемому элементу
    }, 500)
});

$('.navigation--link').on('click', function() {
    $('html').animate({ 
        scrollTop: $('#' + this.id + 'O').offset().top // прокручиваем страницу к требуемому элементу
    }, 500)
});