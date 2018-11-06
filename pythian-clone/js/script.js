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
	$('#hero-section').css('margin-top', $('#menu').height());
	if($(window).width() <= 768){
		$('#hero-section').css('margin-top', '0');
	}
	$(window).on('resize', function(){
      var win = $(this); //this = window
      if (win.width() > 768) {
				$('#hero-section').css('margin-top', $('#menu').height());
			}
      if (win.width() <= 768) {
				$('#hero-section').css('margin-top', '0');
			}
	});

  // auto close bootstrap navbar when link is clicked
  $('.navbar-nav>li>a:not(.drop)').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });
  $('.navbar-toggler').on('click', function(){
      $('.nav-list').slideUp('fast');
  });

	// convert svg
	$(function(){
	    jQuery('img.svg').each(function(){
	        var $img = jQuery(this);
	        var imgID = $img.attr('id');
	        var imgClass = $img.attr('class');
	        var imgURL = $img.attr('src');

	        jQuery.get(imgURL, function(data) {
	            // Get the SVG tag, ignore the rest
	            var $svg = jQuery(data).find('svg');

	            // Add replaced image's ID to the new SVG
	            if(typeof imgID !== 'undefined') {
	                $svg = $svg.attr('id', imgID);
	            }
	            // Add replaced image's classes to the new SVG
	            if(typeof imgClass !== 'undefined') {
	                $svg = $svg.attr('class', imgClass+' replaced-svg');
	            }

	            // Remove any invalid XML tags as per http://validator.w3.org
	            $svg = $svg.removeAttr('xmlns:a');

	            // Check if the viewport is set, else we gonna set it if we can.
	            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
	                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
	            }

	            // Replace image with new SVG
	            $img.replaceWith($svg);

	        }, 'xml');

	    });
	});

});
