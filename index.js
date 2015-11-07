$(document).ready(function(){
	$(".imagen1").click(function(){
		if($(this).attr("checado") == "no"){
			$(this).attr("checado","si");
//			$(this).css("opacity", 0.2);
			$(this).html("<img src='img/ojo.png'>");
		}else{
			$(this).attr("checado","no");
	//		$(this).css("opacity",1);
			$(this).html("<img src='img/ojot.png'>");
		}
	});
	$(".imagen2").click(function(){
		if($(this).attr("checado") == "no"){
			$(this).attr("checado","si");
//			$(this).css("opacity", 0.2);
			$(this).html("<img src='img/pulmones.png'>");
		}else{
			$(this).attr("checado","no");
	//		$(this).css("opacity",1);
			$(this).html("<img src='img/pulmonest.png'>");
		}
	});
	$(".imagen3").click(function(){
		if($(this).attr("checado") == "no"){
			$(this).attr("checado","si");
//			$(this).css("opacity", 0.2);
			$(this).html("<img src='img/rinon.png'>");
		}else{
			$(this).attr("checado","no");
	//		$(this).css("opacity",1);
			$(this).html("<img src='img/rinont.png'>");
		}
	});
	$(".imagen4").click(function(){
		if($(this).attr("checado") == "no"){
			$(this).attr("checado","si");
//			$(this).css("opacity", 0.2);
			$(this).html("<img src='img/hueso.png'>");
		}else{
			$(this).attr("checado","no");
	//		$(this).css("opacity",1);
			$(this).html("<img src='img/huesot.png'>");
		}
	});
	$(".imagen5").click(function(){
		if($(this).attr("checado") == "no"){
			$(this).attr("checado","si");
//			$(this).css("opacity", 0.2);
			$(this).html("<img src='img/corazon.png'>");
		}else{
			$(this).attr("checado","no");
	//		$(this).css("opacity",1);
			$(this).html("<img src='img/corazont.png'>");
		}
	});

	$("#form1").hide();
	$("#botones").hide();
	$("#form1").fadeIn();
	$("#bot").click(function(){
		$("#form1").fadeOut();
		$("#botones").fadeIn();
	});



	


});

