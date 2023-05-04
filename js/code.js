$(document).on('scroll', function() {
    const windowHeight = $(window).height();
    const scroollValue = $(this).scrollTop();

    const $aboutText = $('.aboutText');
    const $aboutImage = $('.aboutImage');
    const aboutTextFromTop = $aboutText.offset().top;
    const aboutTextHeight = $aboutText.outerHeight();

    const $weWork = $('.weWork');
    const weWorkFromTop = $weWork.offset().top;
    const weWorkHeight = $weWork.outerHeight();

    const $aboutTextPortfolio = $('.aboutTextPortfolio');
    const $aboutImagePortfolio = $('.aboutImagePortfolio');
    const aboutTextPortfolioFromTop = $aboutTextPortfolio.offset().top;
    const aboutTextPortfolioHeight = $aboutTextPortfolio.outerHeight();

    if (scroollValue > aboutTextFromTop + aboutTextHeight / 2 - windowHeight) {
        $aboutText.addClass('active');
        $aboutImage.addClass('active');
    }

    if (scroollValue > weWorkFromTop + weWorkHeight / 2 - windowHeight) {
        $weWork.addClass('active');
    }

    if (scroollValue > aboutTextPortfolioFromTop + aboutTextPortfolioHeight / 2 - windowHeight) {
        $aboutTextPortfolio.addClass('active');
        $aboutImagePortfolio.addClass('active');
    }

    if (scroollValue < 100) {
        $('.aboutText').removeClass('active');
        $('.aboutImage').removeClass('active');
        $('.weWork').removeClass('active');
        $('.aboutTextPortfolio').removeClass('active');
        $('.aboutImagePortfolio').removeClass('active');
    }
    
})