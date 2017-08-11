$(function(){
	$(".backfirstpage").click(function(){
		console.log(1)
    	 window.location.href="../index.html"
    })
	
	
	$("#btn").click(function(){
		
		testPhone();
		
		testPass();
	})
	
	
	function testPhone(){
	var oPhone=document.getElementById('phoneNum');
	var re=/^[0-9]{11}$/;

	if(re.test(oPhone.value)){
		console.log('手机号格式正确')
		return true
	}
	else if(oPhone.value==''){
		console.log("请输入手机号")
	
		return false
	}
	else{
		console.log("手机格式错误")
		
		return false
	}
}
	//验证密码
function testPass(){

	var oPass=document.getElementById('passageNum');
	
	var re=/^[\w]{6,12}$/;
	
	if(re.test(oPass.value)){
		
		
		return true
	}
	else if(oPass.value==''){
		
		
		return false
	}
	else{
		console.log(1113333)
		
		return false
	}
}
})