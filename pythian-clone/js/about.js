$(document).ready(function() {
  $(function(){
    // if (window.matchMedia('(min-width: 768px)').matches) {

        $('#services-link').on('click', function() {
          $('#services-list').slideToggle('fast');
          $('.nav-list:not(#services-list)').css('display', 'none');
          $('#services-list').css('padding-left', $('#services-link').position().left);
        });
        // $('#services-link').on('mouseleave', function() {
        //   $('#services-list').slideUp('fast');
        // });

        $('#resources-link').on('click', function() {
          $('#resources-list').slideToggle('fast');
          $('.nav-list:not(#resources-list)').css('display', 'none');
          $('#resources-list').css('padding-left', $('#resources-link').position().left);
        });
        // $('#resources-link').on('mouseleave', function() {
        //   $('#resources-list').slideUp('fast');
        // });

        $('#technologies-link').on('click', function() {
          $('#technologies-list').slideToggle('fast');
          $('.nav-list:not(#technologies-list)').css('display', 'none');
          $('#technologies-list').css('padding-left', $('#technologies-link').position().left);
        });
        // $('#technologies-link').on('mouseleave', function() {
        //   $('#technologies-list').slideUp('fast');
        // });
    // } else {
    //
    // }
  });

  $( ".fa-angle-down" ).click(function() {
      if ($( this).css( "transform" ) == 'none' ){
          $(this).css("transform","rotate(180deg)");
      } else {
          $(this).css("transform","" );
      }
  });

	// clearfix for fixed header
	$('#first-section').css('margin-top', $('#menu').height());
	if($(window).width() <= 768){
		$('#first-section').css('margin-top', '0');
	}
	$(window).on('resize', function(){
      var win = $(this); //this = window
      if (win.width() > 768) {
				$('#first-section').css('margin-top', $('#menu').height());
			}
      if (win.width() <= 768) {
				$('#first-section').css('margin-top', '0');
			}
	});

  // auto close bootstrap navbar when link is clicked
  $('.navbar-nav>li>a:not(.drop)').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });
  $('.navbar-toggler').on('click', function(){
      $('.nav-list').slideUp('fast');
  });

  // owl carousel
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    // nav:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:3
      }
    }
  });

});
