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
	
				
				
				
				
				
				/*轮播图*/
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
				
				
	$(".contentnone").click(function(){
		console.log(1)
    	 window.location.href="../detail/detail.html"
    })
	
	$(".backfirstpage").click(function(){
		console.log(1)
    	 window.location.href="../index.html"
    })
	$("#delremember").click(function(){
		console.log(2222)
		$(".rememberinfo").hide()
	})
		
})