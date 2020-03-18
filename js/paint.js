$('.c-color').on('mouseover', function() {
    let currentSel = $('.c-active');
    if (this.classList.contains('c-active')) {
    } else {
        currentSel.removeClass('c-active');
        this.classList.add('c-active');
    }
    let color = $(this).css('background-color');
    $('.paint--fill').attr('style','fill:'+color); 
    $('.detail--color-sel').attr('style','background-color:'+color); 
});

window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    $('.section--spray-img')[0].style.transform = 'translate(-' + x * 40 + 'px, -' + y * 40 + 'px)' + 'rotate(24deg)';
    $('.section--brick-img')[0].style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
    $('.about--img')[0].style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
    $('.colors--img')[0].style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
});