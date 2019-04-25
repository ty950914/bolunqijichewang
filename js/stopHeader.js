 //回到顶部 顶部悬浮
 function topStop(){
	window.onscroll=function(){
		// var topId=my$("#returnTop");
        var scorllBox1=my$("#stop_header");
        var scorllBox2=my$("#stop_header_one")
		var scrollAs=document.body.scrollTop || document.documentElement.scrollTop;
		if(scrollAs>0){
			scorllBox1.style.position="fixed";
			scorllBox1.style.top=0;
			// scorllBox1.style.zIndex=3;
            scorllBox1.style.background="white";
            scorllBox1.style.width="100%";
            scorllBox2.style.position="fixed";
            scorllBox2.style.top=0;
            scorllBox2.style.width="100%";
			// if(scrollAs>300){
			// 	topId.style.display="block";
			// }
		}else{
                scorllBox1.style.position="";
                scorllBox1.style.background="";
				// scorllBox1.style.zIndex=1;
				// topId.style.display="none";
			}
		// my$("#returnTop").onclick=function(){
		// 	document.body.scrollTop=0;
		// 	document.documentElement.scrollTop=0;
		// }	
	}
}

function btn2(){
	$(".lists_one_a").click(function(){
		$(".lists_one_a").css({
			"display":"none"
		})
		$(".lists_one_b").css({
			"display":"block"
		})
	})	
}
function btn1(){
	$("#btn").click(function(){
		$(".lists_one_b").css({
			"display":"none"
		})
		$(".lists_one_a").css({
			"display":"block"
		})
	})	
}
function btn3(){
	$(".header_top_m").click(function(){
		$(".side").css({
			"display":"block"
		})
	})
	$("#side_btn").click(function(){
		$(".side").css({
			"display":"none"
		})
	})
}

$(function(){
	$(window).resize(function(){
		if($("body").width()>1100){
			$(".side").css({
				"display":"none"
			})
		}
	})
})






// /* 显示遮罩层 */
// function showOverlay() {
// 	$("#overlay").height(pageHeight());
// 	$("#overlay").width(pageWidth());
   
// 	// fadeTo第一个参数为速度，第二个为透明度
// 	// 多重方式控制透明度，保证兼容性，但也带来修改麻烦的问题
// 	$("#overlay").fadeTo(200, 0.5);
//   }
   
//   /* 隐藏覆盖层 */
//   function hideOverlay() {
// 	$("#overlay").fadeOut(200);
//   }
   
//   /* 当前页面高度 */
//   function pageHeight() {
// 	return document.body.scrollHeight;
//   }
   
//   /* 当前页面宽度 */
//   function pageWidth() {
// 	return document.body.scrollWidth;
//   }


window.onload=function(){
	topStop();
	btn2()
	btn1()
	btn3()
}
function my$(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}
