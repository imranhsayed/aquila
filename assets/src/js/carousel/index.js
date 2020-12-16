(function( $ ){
  class SlickCarousel {
    init() {
      this.initialCarousel();
    }

    initialCarousel() {
      $('.your-class').slick();
    }
  }

  new SlickCarousel();

  $('.your-class').slick();
  console.log( 'came', $ );
})(jQuery)
