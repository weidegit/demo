$(function(){
	
	$(".del").click(function(){
		var $num = $(this).siblings(".purNum").val();
		$num--;
		if($num<=1){
			$num=1;
			
			 $(this).siblings(".purNum").val($num);
		    
		    if($num*109>=199){
		    $('#pay').find('.jiesheng').html('￥'+100.00);
		    $('#pay').find("strong").eq(0).html('￥'+$num*109+".00")
		    $('#pay').find(".paymoney").html('￥'+($num*109-100)+".00")
		     return false
		    	
		    }else{
		        $('#pay').find('.jiesheng').html('￥'+"0.00");
		     	$('#pay').find("strong").eq(0).html('￥'+$num*109+".00")
		    $('#pay').find(".paymoney").html('￥'+($num*109)+".00")
		    }

			
		}else{
			$(this).siblings(".purNum").val($num);
			if($num*109>=199){
		    $('#pay').find('.jiesheng').html('￥'+100+".00");
		    $('#pay').find("strong").eq(0).html('￥'+$num*109+".00")
		    $('#pay').find(".paymoney").html('￥'+($num*109-100)+".00")
		    return false
		    	
		    }else{
		        $('#pay').find('.jiesheng').html('￥'+0.00);
		     	$('#pay').find("strong").eq(0).html('￥'+$num*109+".00")
		    $('#pay').find(".paymoney").html('￥'+($num*109)+".00")
		    }
		    
		}
		
	})
	$(".add").click(function(){
		var $num = $(this).siblings(".purNum").val();
		$num++;
		$(this).siblings(".purNum").val($num);
		
		/*$('#pay').find("strong").eq(0).html('￥'+$num*109+".00")
		

		$('#pay').find(".paymoney").html('￥'+($num*109-100)+".00");*/
		
		if($num*109>=199){
		    $('#pay').find('.jiesheng').html('￥'+"100.00");
		    $('#pay').find("strong").eq(0).html('￥'+$num*109+".00")
		    $('#pay').find(".paymoney").html('￥'+($num*109-100)+".00")
		     return false
		    	
		    }else{
		        $('#pay').find('.jiesheng').html('￥'+"0.00");
		     	$('#pay').find("strong").eq(0).html('￥'+$num*109+".00")
		    $('#pay').find(".paymoney").html('￥'+($num*109)+".00")
		    }
		
	})
	 
	$("#jiesuan").click(function(){
			console.log(111)
			window.location.href="shopping cart2.html";
		}) 
	 
	
})