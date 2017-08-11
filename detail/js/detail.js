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
				list2Arr.eq(index).removeClass("hide").find(".list2l").css({
					'opacity': 0.8
				});
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

	function carousel2() {
		index2++;
		if(index2 >= 2) {
			index2 = 0;
		}
		letShow2();
	}
	var timer2 = setInterval(carousel2, 2000);
	letShow2();

	function letShow2() {
		$hdmianimg.eq(index2).fadeIn(0).siblings().fadeOut(0);
	}

	$('#aposition a').click(function() {
		$(this).css({
			'opacity': .7
		})
	})
	
	$('#magnify').hover(function(){
           	   $(this).find('#bigDiv').css({display:"block"})
           	   $(this).find('#move').css({display:"block"})
           },function(){
           	   $(this).find('#bigDiv').css({display:"none"})
           	   $(this).find('#move').css({display:"none"})
           	  
           })
	/*var moveX = evt.pageX - $('#move').offsetWidth / 2 - this.offsetLeft;
        var moveY = evt.pageY - $('#move').offsetHeight / 2 - this.offsetTop;*/

	$('#magnify').mousemove(function(e) {
		
		
		var $movex = e.pageX - $('#magnify').offset().left - $("#move").width()/2;
		/*console.log($movex)*/
		var $movey = e.pageY - $('#magnify').offset().top - $("#move").height()/2;
		/*console.log($movey)*/
		
		var $maxmoveX = $('#smallImg').width() - $('#move').width();
		if($movex > $maxmoveX) {
			$movex = $maxmoveX;
		} else if($movex < 0) {
			$movex = 0;
		}
		var $maxmoveY = $('#smallImg').height() - $('#move').height();
		if($movey > $maxmoveY) {
			$movey = $maxmoveY;
		} else if($movey < 0) {
			$movey = 0;
		}
		$('#move').css({
			left: $movex
		});
		$('#move').css({
			top: $movey
		});

		var rateL = ($('#bigImg').width() - $('#bigDiv').width()) / ($('#smallImg').width() - $('#move').width());
		var rateT = ($('#bigImg').height() - $('#bigDiv').height()) / ($('#smallImg').height() - $('#move').height());

		$('#bigImg').css({
			left: -$movex * rateL
		});
		$('#bigImg').css({
			top: -$movey * rateT
		});
	})
	
	
	$("#smallImg").attr("src",$('#contain img').eq(0).attr("src"));
	
	$("#bigImg").attr("src",$('#contain img').eq(0).attr("src"));
	$('#contain img').each(function(index){
		console.log(index);
		var $index = $(this).index();

		
		$('#contain img').click(function(){
			$(this).eq($index).addClass('active').siblings().removeClass('active');
			$("#smallImg").attr("src",$(this).attr("src"));
			$("#bigImg").attr("src",$(this).attr("src"));
		})
	})
	
	$('#selcolor a').click(function(){
		var $index = $(this).index()-1;
		console.log($index);
			$(this).addClass('active').siblings().removeClass('active');
		
		$(this).find('button').each(function(index){
		/*console.log(index);*/
			
		    $('#contain img').eq(index).attr("src",$(this).attr("name"));
		    $("#smallImg").attr("src",$('#contain img').eq(0).attr("src"));
	
	        $("#bigImg").attr("src",$('#contain img').eq(0).attr("src"));
			
		})
		

	})
	$('#selsize a').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
	        
    })
	
	var $purnum = 1;
	$("#addnum").click(function(){
		$purnum ++;
		$("#pay input").val($purnum);
		return false;
		
	})
	$("#subnum").click(function(){
		$purnum --;
		if($purnum <= 1){
			$purnum = 1;
		}
		$("#pay input").val($purnum);
		return false;
		
		
	})	
	$("#delremember").click(function(){
		console.log(2222)
		$(".rememberinfo").hide()
	})
	
	
		
			$("#purnow").click(function(){
				if(!($('#selcolor a').hasClass("active")&&$('#selsize a').hasClass("active"))){
					alert("请选择颜色或尺寸");
		            
		        
	            }else{
	            	window.location.href="../shopping cart/shopping cart1.html"
					console.log(444)
	            	
	            }
    		})
		

	$.ajax({
		type:"get",
		url:"detail.json",
		async:true,
		success:function(data){
			creatImg(data);
		}
	});
	
	function creatImg(data){
		
		var imgUl = document.getElementById('imgUl');
		var html = '';
		for(var i = 0;i<data.length;i++){
			html += "<li><img src="+data[i].img+" /><p>"+data[i].title+"</p><p><span>"+data[i].price+"</span><i>"+data[i].disprice+"</i></p></li>"
			
		}
		imgUl.innerHTML = html
	}
})