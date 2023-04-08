$(document).on('scroll', function() {
    const scroollValue = $(this).scrollTop();
    const $aboutText = $('.aboutText');
    const  aboutTextFromTop = $aboutText.offset().top;
    const aboutTextHeight = $aboutText.outerHeight();
    console.log(aboutTextHeight);
})