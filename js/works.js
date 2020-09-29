$(function() {
  var workCarousel = $('.work-carousel:not(.more-works-carousel)');
  workCarousel.owlCarousel({
      items: 1,
      nav: true,
      margin: 8,
      smartSpeed: 50,
      animateOut: 'fadeOut',
      navText: ['<i class="icon-arrow-left"></i>', '<i class="icon-arrow-right"></i>']
  });

  $('.more-works-carousel').owlCarousel({
    items: 3,
    nav: true,
    slideBy: 'page',
    margin: 30,
    smartSpeed: 50,
    navText: ['<i class="icon-arrow-left"></i>', '<i class="icon-arrow-right"></i>']
  });
});