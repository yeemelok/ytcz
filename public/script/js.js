$(function(){
	//--
	$('.sNav').find('a:last').css('border','0px');
	$('.sNavA').each(function(i){
		$('.sNav').eq(i).css('left',$(this).offset().left);
		$(this).hover(
		   function(){
			   $('.sNav').eq(i).addClass('sNavon');
			   },
		   function(){
			   $('.sNav').eq(i).removeClass('sNavon');
			   }
		)
		$('.sNav').eq(i).hover(
		   function(){
			   $('.sNavA').eq(i).addClass('aNow1');
			   $(this).addClass('sNavon');
			   },
		   function(){
			   $('.sNavA').eq(i).removeClass('aNow1');
			   $(this).removeClass('sNavon');
			   }
		)
		})
	$('.navA').toggle(
	   function(){
		   $('.nav').slideDown(200);
		   },
	   function(){
		   $('.nav').slideUp(200);
		   }
	)
	//--
	$('.tabContentDiv').find('.tabContent:first').show();
	// $('.tab').each(function(i){
	// 	$(this).find('li').each(function(ii){
	// 		$(this).hover(
	// 		function(){
	// 			$('.tab').eq(i).find('li').removeClass('liNow');
	// 			$(this).addClass('liNow');
	// 			$('.tabContentDiv').eq(i).find('.tabContent').hide();
	// 			$('.tabContentDiv').eq(i).find('.tabContent').eq(ii).show();
	// 			},
	// 		function(){}	
	// 			)
	// 		})
	// 	})
	//--
	if($(window).width()>1024){
	$('.scroll').niceScroll({
		  cursorcolor:"#ce2b51",
		  cursorborder:"none",
		  cursorwidth:"3px",
		  scrollspeed:120,
		  background:"none",
		  cursoropacitymin:0.5,
		  cursoropacitymax:0.7,
		  mousescrollstep:10,
		  touchbehavior:true
	  });
	}
	//--
	$('.sideNavA').toggle(
	  function(){
		  $('.phoneSide').addClass('phoneSideon');
		  },
	  function(){
		  $('.phoneSide').removeClass('phoneSideon');
		  }
	)
	//--
	$('.phoneSide').find('li').each(function(i){
		$(this).find('.sideNavTA').click(function(){
			if($(this).hasClass('aNow1')){
			   $(this).removeClass('aNow1');
			   $('.phoneSide').find('li').eq(i).find('.list').fadeOut(200);
			   }else{
				   $(this).addClass('aNow1');
				   $('.phoneSide').find('li').eq(i).find('.list').stop(true,true).slideDown(200);
				   }
			})
		})
	$('.phoneSide').find('.list').find('li').hover(
	   function(){
		   $(this).find('a:first').addClass('aNow1');
		   $(this).find('.list2').addClass('list2on');
		   },
	   function(){
		   $(this).find('a:first').removeClass('aNow1');
		   $(this).find('.list2').removeClass('list2on');
		   }
	)
	//--
	$('.listHover').find('li').hover(
	   function(){
		   $(this).addClass('liNow');
		   $(this).find('.name').attr('style','background:#ce2b51;');
		   },
	   function(){
		   $(this).removeClass('liNow');
		   $(this).find('.name').attr('style','');
		   }
	)
	//
	
	

	

	


})