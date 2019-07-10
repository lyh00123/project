
//业务范围
$(".yw-box ul a").on('touchend click', function () {
	$(this).addClass("active").parent().siblings().find("a").removeClass("active");
})

//户型弹窗a标签
$(".hx-container ul  a").on('touchend click', function () {
	$(this).addClass("active").siblings().removeClass("active");
		var txt = $(".pop2 ul a.active").text();
		$(".hx-btn input").val(txt)
})

//户型按钮
$(".hx-btn").on('touchend click', function () {
	$(".pop2").addClass("show");
	if($(".pop2 ul a").hasClass("active")){
		$(".pop2 .pub-btn,.close").on('touchend click', function () {
			$(".pop2").removeClass("show");
		})
	}
})

//免费报价按钮
$("#bj-btn").on('touchstart', function () {
//	alert(111);
//	e.stopPropagation();
	var city= $("input[name='Addr']").val().length;
	var mj= $("input[name='mj']").val().length;
	var hx= $("input[name='hx']").val().length;
	var val = $("input[name='sj']").val();
	var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(16[0]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
	if(city==0 || mj==0 || hx==0){
		alert("内容不能为空");
		return false;
	}else if(val == '' || val.length !=11 || !myreg.test(val)){
		alert("请输入有效的手机号码！");
		return false;
	}else{
		$(".pop1").addClass("show");
	}
	
})
$(".pop1 .pub-btn").on('touchend click', function () {
	$(".pop1").removeClass("show");
})


