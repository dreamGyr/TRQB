
$(function() {
	//用户名判断
    $(".mingzi").blur(function () {
		var ming = $(".mingzi").val();
		if ("" == ming || ming.length > 6 || ming.length < 2 || !/^[\u4e00-\u9fa5]*$/.test(ming)) {
			alert("名字不能为空或错误格式,请输入2~6个汉字！");
		}
	});
	//邮箱判断
	$(".youxiang").blur(function () {
		var youxiang = $(".youxiang").val();
		if ("" == youxiang || !/(^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/.test(youxiang)) {
			$(".youxiangcuowu").show();
		}else{
			$(".youxiangcuowu").hide();
		}
	});
	$(".youxiang").focus(function () {
		$(".youxiangcuowu").hide();
	});
	//管理人手机判断
	$(".shouji").blur(function () {
		var shouji = $(".shouji").val();
		if ("" == shouji || !/^1[3|4|5|6|7|8|][0-9]\d{4,8}$/.test(shouji) || shouji.length != 11) {
			$(".shoujicuowu").show();
		}else{
			$(".shoujicuowu").hide();
		}
	});
	$(".shouji").focus(function () {
		$(".shoujicuowu").hide();
	});
	//管理人手机再次判断确认
	$(".shoujizai").blur(function () {
		var shoujizai = $(".shoujizai").val();
		var shouji = $(".shouji").val();
		if ("" == shoujizai || !/^1[3|4|5|6|7|8|][0-9]\d{4,8}$/.test(shoujizai) || shoujizai.length != 11 || shoujizai != shouji) {
			$(".shoujibu").show();
		}else{
			$(".shoujibu").hide();
		}
	});
	$(".shoujizai").focus(function () {
		$(".shoujibu").hide();
	});
	//身份证验证
	$(".shenfen").blur(function () {
		var shenfen = $(".shenfen").val();
		if ("" == shenfen || !/^(\d{15}|\d{17}[\dXx])$/.test(shenfen) || shenfen.length != 18) {
			$(".shenfencuo").show();
		}else{
			$(".shenfencuo").hide();
		}
	});
	$(".shenfen").focus(function () {
		$(".shenfencuo").hide();
	});
	//紧急联系人
	$(".lianxiren").blur(function () {
		var lianxiren = $(".lianxiren").val();
		var ming = $(".mingzi").val();
		if ("" == lianxiren || lianxiren.length > 6 || lianxiren.length < 2 || !/^[\u4e00-\u9fa5]*$/.test(lianxiren)) {
			alert("名字不能为空或错误格式,请输入2~6个汉字！");
		}else if(lianxiren == ming){
			alert("紧急联系人与管理人不能为同一人");
		}
	});
	//紧急联系人电话
	$(".dianhua").blur(function () {
		var dianhua = $(".dianhua").val();
		var shouji = $(".shouji").val();
		if ("" == dianhua || !/^1[3|4|5|6|7|8|][0-9]\d{4,8}$/.test(dianhua) || dianhua.length != 11 ) {
			$(".dianhuacuowu").show();
		}else if(dianhua == shouji){
			$(".dianhuacuowu").hide();
			alert("紧急联系人号码与管理人号码不能相同");
		}
	});
	$(".dianhua").focus(function () {
		$(".dianhuacuowu").hide();
	});
	//紧急联系人电话再次判断确认
	$(".dianhuazai").blur(function () {
		var dianhuazai = $(".dianhuazai").val();
		var dianhua = $(".dianhua").val();
		if ("" == dianhuazai || !/^1[3|4|5|6|7|8|][0-9]\d{4,8}$/.test(dianhuazai) || dianhuazai.length != 11 || dianhuazai != dianhua) {
			$(".dianhuabu").show();
		}else {
			$(".dianhuabu").hide();
		}
	});
	$(".dianhuazai").focus(function () {
		$(".dianhuabu").hide();
	});

	// // 企业信息的公司名称下面  未判断
	$(".g-gsmc").blur(function () {
		var gsmc = $(".g-gsmc").val();
		if ("" == gsmc ||gsmc.length > 15 || gsmc.length < 5 ||!/^[A-Za-z0-9_()（）\-\u4e00-\u9fa5]+$/.test(gsmc)) {
			alert("公司名称不能为空或错误格式,请输入5~20个汉字！");
		}
	});

	// 营业执照注册号   \d{15} 15位数字
	$(".yingyezhizhao").blur(function () {
		var yingyezhizhao = $(".yingyezhizhao").val();
		if ("" == yingyezhizhao ||!/\d{15}/.test(yingyezhizhao)) {
			alert("营业执照注册号必须为15位数字！");
		}
	});

		// 组织结构代码   [a-zA-Z0-9]{8}-[a-zA-Z0-9]
	$(".zuzhijigou").blur(function () {
		var zuzhijigou = $(".zuzhijigou").val();
		if ("" == zuzhijigou ||!/[a-zA-Z0-9]{8}-[a-zA-Z0-9]/.test(zuzhijigou)) {
			alert("如：12345678-1！");
		}
	});
		// 纳税人识别码   \d{15} 15位数字
	$(".shuinaren").blur(function () {
		var shuinaren = $(".shuinaren").val();
		if ("" == shuinaren ||!/\d{15}/.test(shuinaren)) {
			alert("请输入15位纳税人识别码");
		}
	});

	// 统一信用代码  [1-9A-GY]{1}[1239]{1}[1-5]{1}[0-9]{5}[0-9A-Z]{10}
	$(".xinyongdaima").blur(function () {
		var xinyongdaima = $(".xinyongdaima").val();
		if ("" == xinyongdaima ||!/[1-9A-GY]{1}[1239]{1}[1-5]{1}[0-9]{5}[0-9A-Z]{10}/.test(xinyongdaima)) {
			alert("请输入统一信用代码");
		}
	});





});