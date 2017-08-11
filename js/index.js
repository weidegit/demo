$(function() {

	$("#hdmenu1 li").each(function(index) {

		var list2Arr = $("#hdmenu1 .list2");
		$(this).hover(function() {
			var index = $(this).index();
			console.log(index)
			list2Arr.eq(index).removeClass("hide").siblings('#hdmenu1 .list2').addClass("hide");
			$(this).not(".li1").addClass('hover');

			list2Arr.hover(function() {

				/*console.log(index)*/
				list2Arr.eq(index).removeClass("hide").find(".list2l").css({'opacity': 0.8});
				$(this).parents('#hdmenu1').find('li').eq(index).addClass('hover').siblings().removeClass("hover");
			}, function() {
				list2Arr.eq(index).addClass("hide").end().addClass("hover");
				$(this).parents('#hdmenu1').find('li').eq(index).removeClass('hover')

			})

		}, function() {

			list2Arr.eq(index).addClass("hide");
			$(this).not(".li1").removeClass('hover');

		})

	})
	/*$('#hdmenu1').find('li').each(function(index){
		console.log($(this))
		
		$(this).mouseenter(function(){
			console.log(this)
			
			$(".list2").removeClass('hide')
		})
	})*/
	$(window).scroll(function (){
					
					var st = $(this).scrollTop();
				
					
					if(st >= 800){
						$('#LoutiNav').show();
					} else {
						$('#LoutiNav').hide();
					}
                 
				
					$('.louti').each(function (){
					
						var toTop = $(this).offset().top + 200;
						console.log(toTop)
						if(toTop >= st){
						
							var index = $(this).index();
						
							$('#LoutiNav li').eq(index).find('span').addClass('active')
							.end().siblings().find('span').removeClass('active');
							
							return false;
						}
					});
				});

				
				$('#LoutiNav li').not('.last').click(function (){
					
					var index = $(this).index();
				
					var target = $('.louti').eq(index).offset().top;
				
					$('html,body').animate({scrollTop:target}, 500);
				});

				
				$('#LoutiNav li.last').click(function (){
					
					$('html,body').animate({scrollTop:0}, 500);
				});

				$('#LoutiNav li').hover(function (){
					
					$(this).addClass('hover').siblings().removeClass('hover');
				}, function (){
					
					$(this).removeClass('hover');
				});
				
				
				
				
				var $hdmianimg = $('#hdmian .hdmian-c img')
				var index2 = 0
				function carousel2(){
					index2++;
					if(index2 >= 2){
						index2 = 0;
					}
					letShow2();
				}
				var timer2 = setInterval(carousel2,2000);
				letShow2();
				function letShow2(){
					$hdmianimg.eq(index2).fadeIn(0).siblings().fadeOut(0);
				}
				
				
				
				var $imgLi = $('#box .contain img');
                
                var index = 0;
                
                function carousel(){
                    index++;
                    if(index >= $imgLi.size()){
                        index = 0;
                    }
                    
                    letsShow();
                    
                    setNav();
                }
                var timer = setInterval(carousel, 3000);
                letsShow();
                
                function letsShow(){
                    
                    $imgLi.eq(index).fadeIn(500).siblings().fadeOut(500);
                   
                }

                
                function setNav(){
                    $('.navLi a').eq(index).addClass('select').siblings().removeClass('select');
                }

               
                $('.navLi a').click(function (){
                    
                    clearInterval(timer);
                   
                    index = $(this).index();
                    
                    letsShow();
                   
                    setNav();
                    
                    timer = setInterval(carousel, 3000);
                });
    $(".index-product").click(function(){
    	 window.location.href="product/product.html"
    })

			
		
})