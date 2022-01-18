if (!Array.isArray(window.pageResize)) {
	window.pageResize = [];
}

function _close() {
    $(".menu_don ul li .img").css('opacity', '1');
        $('.menu_don > .bloc').css('opacity', '0');
        setTimeout(function() {
            $(".menu_don ul").css('width', '100%');
        }, 100);
    
    return false;
}
$(document).ready(function() {

    // Close Notification 
    $('#notification > .content .closeNotification').on('click' , function(){
        $('#notification').addClass('displaynone');
    });

    // CARROUSEL BOOKS
    $('.carrousel_book').slick({
        arrows: true,
        autoplay: false,
        centerMode: true,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true,
                autoplay: true,
                slidesToShow: 1
            }
        }]
    });

    

    $(window).resize(function(){
        _close();
    });
    //Menu don
    $(".menu_don ul > li").on('click', function() {
       if($(window).width() > 991){
           var padding = $(".menu_don ul").css('padding-left');
           var widthImg = $(".menu_don ul li .img").css('width');
           var sommeWidth = parseInt(padding,10) + parseInt(widthImg, 10) + 40;
           
            $(".menu_don ul").css('width', sommeWidth+'px');
           
       }else{
            $(".menu_don ul").css('width', '50px');
           
       }
         var id = $(this).data('id');
        $(".menu_don ul li .img").css('opacity', '0.3');
        $(this).find('.img').css('opacity', '1');
        $('.menu_don > .bloc').css({"opacity": 0, "z-index": 0});
        setTimeout(function() {
            $('.menu_don article[data-id="' + id + '"]').css({"opacity": 1, "z-index": 1});
        }, 100);
    });


});

$(document).ready(function()
{
    $('#thumbCarousel').carousel({
		interval: 3000
	})
});

$(document).on('click', 'a.moveto', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 700);
});

/* affix the Carousel Buttons to Carousel Item on scroll */
$('.nav-carousel').bind({
	offset:
	{
		top: $('#thumbCarousel').height()-$('.nav-carousel').height()
	}
});

$(document).ready( function(){
    $( window ).scroll(function() {
        var scrolltop = $(window).scrollTop();
        var $this = $(window);
        
        if ($this.width()>767){
            if (scrolltop > 1200){
                $('.btn_smooth').css({'opacity' : '1' , 'z-index' : '1000'});
                $('#notification').css({'opacity' : '1' , 'z-index' : '1000'});
            }else{
                $('.btn_smooth').css({'opacity' : '0' , 'z-index' : '-1000'}); 
                $('#notification').css({'opacity' : '0' , 'z-index' : '-1000'}); 
            }
        }else{
            if (scrolltop > 1800){
                $('.btn_smooth').css({'opacity' : '1' , 'z-index' : '1000'});
            }else{
                $('.btn_smooth').css({'opacity' : '0' , 'z-index' : '-1000'}); 
            }
        }
    });
    
	var carouselContainer = $('.carousel');
	var slideInterval = 2500;
	
	$('#carousel').carousel({
		interval:   slideInterval
	});
	
	var clickEvent = false;
	$('#thumbCarousel').on('click', '.nav-carousel a', function() {
			clickEvent = true;
			$('.nav-carousel li').removeClass('active');
			$(this).parent().addClass('active');	
	}).on('slid.bs.carousel', function(e)
	{
		if(!clickEvent)
		{
			var count = $('.nav-carousel').children().length -1;
			var current = $('.nav-carousel li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id)
			{
				$('.nav-carousel li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
});


// ----------------------------------- WINDOWS LOAD -----------------------------------
// --------------------------------------------------------------------------------------
$(window).on('load', function(){
	setClearfix();
	setNewsHeight();
});


// ----------------------------------- FUNCTIONS ----------------------------------------
// --------------------------------------------------------------------------------------

window.onresize = function(){
	setClearfix();
	setNewsHeight();
};


// HAUTEURS DE TILES NEWS
var setNewsHeight = function() {
	var $half = $('.half');
	var halfHeights = [];

	if(getDeviceKind() !== 'isMobile') {

		$half.each(function() {
			var $self = $(this);
			var $selfContainer = $self.parents('.line');

			$self.css('height', 'auto');

			halfHeights.push($self.outerHeight(true));

			if($selfContainer.index() % 3 == 0) {
				/*var $halfPrev 		= $selfContainer.prev().find('.half');
				var selfHeight 		= $self.outerHeight(true);
				var halfPrevHeight  = $halfPrev.outerHeight(true);*/
				var maxHeight  		= Math.max.apply(null, halfHeights);

				$half.css({'height': maxHeight + 'px'});
				//$halfPrev.css({'height': maxHeight + 'px'});
			}
		});

	} else {

		$half.css('height', 'auto');

	}
};


var setClearfix = function() {
    var $item = $('.tile-container .col-md-6.col-sm-6');
    var nbItems = $item.length;

    $('.tile-container .clearfix').remove();

    for(var i = 1; i < nbItems; i++) {
        if(i % 2 == 0 && getDeviceKind() !== 'isMobile') {
            $item.eq(i - 1).after('<div class="clearfix"></div>');
        
        }
    }
};

function getDeviceKind() {
    var widthDevice = window.innerWidth;
    var deviceKind = 'isDesktop';

    if (widthDevice <  768)                         deviceKind = 'isMobile';
    if (widthDevice >= 768 && widthDevice < 992)    deviceKind = 'isTablet';
    if (widthDevice >= 992)                         deviceKind = 'isDesktop';

    return deviceKind;
};

$(function () {
    $('#myCarousel').carousel({
        interval:5000,
        pause: "false"
    });
    $('#myCarousel').hover(function () {
        $('#myCarousel').carousel('pause');
    });
    $('#myCarousel').mouseleave(function () {
        $('#myCarousel').carousel('cycle');
    });
});