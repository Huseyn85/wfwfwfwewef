$('.category-slider').slick({
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 2000,
});

$('.elan-asagi').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplaySpeed: 900,
  speed: 700,
});



$('#login').click(function() {

$('#loginModal').modal('show');
  
});


  $('#register').click(function() {

  $('#registerModal').modal('show');
    
  });



    