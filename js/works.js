$(function() {
  var workCarousel = $('.work-carousel');
  workCarousel.owlCarousel({
      items: 1,
      nav: true,
      margin: 8,
      // slideTransition: 'none',
      smartSpeed: 50,
      animateOut: 'fadeOut',
      navText: ['<i class="icon-arrow-left"></i>', '<i class="icon-arrow-right"></i>']
  });
});