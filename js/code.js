$(document).on('scroll', function() {
    const windowHeight = $(window).height();
    const scroollValue = $(this).scrollTop();
    const $aboutText = $('.aboutText');
    const $aboutImage = $('.aboutImage');
    const  aboutTextFromTop = $aboutText.offset().top;
    const aboutTextHeight = $aboutText.outerHeight();

    if (scroollValue > aboutTextFromTop + aboutTextHeight - windowHeight) {
        $aboutText.addClass('active');
        $aboutImage.addClass('active');
    }

    if (scroollValue < 100) {
        $('.aboutText').removeClass('active');
        $('.aboutImage').removeClass('active');
    }
    
})