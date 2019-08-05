// Portfolio (venobox) //
$(document).ready(function(){
    $('.venobox').venobox(); 
});

$(document).ready(function(){

    var containerEl = document.querySelector('.prev-work');

    var mixer = mixitup(containerEl);
    
});
// venox ends//

$(function() {
      $( 'ul.select li' ).on( 'click', function() {
            $( this ).parent().find( 'li.active' ).removeClass( 'active' );
            $( this ).addClass( 'active' );
      });
});


// Testimonial slick //

$('.testimonial-sliderr').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
    arrows:false,
  adaptiveHeight: true,
    autoplay:true,
    responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// Navbar Fixed starts //

$navoffset=$('#navigation').offset().top;

$(window).scroll(function(){
    $scrolling=$(this).scrollTop();
    if($scrolling > $navoffset){
        $('#navigation').addClass('navfixed')
    }
    else{
        $('#navigation').removeClass('navfixed');
    }
    
    if($scrolling > 700){
        $('.upto-arrow-button').fadeIn();
        
    }
    else{
        $('.upto-arrow-button').fadeOut();
    }
});

// Navbar Fixed ends //

// Upto top button //

$('.upto-arrow-button').click(function(){
   $('html').animate({scrollTop:0},1000); 
});
	

//Upto top button ends//

// Smooth Scroll //

$('#navigation a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// Scroll Spy//

$('body').scrollspy({ target: '#navbarSupportedContent' })
