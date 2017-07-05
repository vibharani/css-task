
window.onscroll = function() {
                   myFunction();
 };
 
 
function myFunction() {
    if (document.body.scrollTop < 1600) {
        $("#s1").css({"display":"none","transform":"translate3d(50px,100px,0px)","position":"absolute"});
        $("#s1").fadeIn(1000,function(){
		$("#s1").animate({'right': '95px'});
		});
		
		$("#v1").css({"display":"none","transform":"translate3d(50px,140px,0px)","position":"absolute"}); 
        $("#v1").fadeIn(1000,function(){
	    $("#v1").animate({'top': '-20px'}); 
		 }); 
		
		
	   }	
};
	   

 
 

 
	   
$(document).ready(function() {
        $(".image1").css({"display":"none","transform":"translate3d(50px,150px,0px)","position":"absolute"});
        $(".image1").fadeIn(1000,function(){
		$(".image1").animate({'top': '-=123px'});
		});
		
		$(".image2").css({"display":"none","transform":"translate3d(10px,10px,0px)"});
        $(".image2").fadeIn(2000);
		
		$(".image3").css({"display":"none","transform":"translate3d(10px,10px,0px)"});
        $(".image3").fadeIn(2000);
	}); 
	
	

	
	   
	   $(document).ready(function() {
	   $("#i1").css({"transform":"translate3d(50px,140px)","position":"absolute","visibility":"visible"});
	   $("#i1").fadeIn(function(){
	   $("#i1").animate({'bottom': '-=20px'}); 
       });	
	   });
	   
	   
	   
	  $(document).ready(function() {
         $("#i2").css({"transform":"translate3d(50px,140px)","position":"absolute"});
        $("#i2").fadeIn(1000,function(){
		$("#i2").animate({'bottom': '-=10px'});
		});
	   
	   });	
	   
	   $(document).ready(function() {
      $("#i3").css({"transform":"translate3d(50px,140px)","position":"absolute"});
        $("#i3").fadeIn(1000,function(){
		$("#i3").animate({'bottom': '-=30px'});
		});
	   
	   });

	   $(document).ready(function() {
       $("#r1").css({"display":"none","transform":"translate3d(50px,140px)","position":"absolute"});
        $("#r1").fadeIn(1000,function(){
		$("#r1").animate({'top': '-=30px'});
		});
	   
	   });
	   $(document).ready(function() {
       $("#r2").css({"display":"none","transform":"translate3d(50px,140px)","position":"absolute"});
        $("#r2").fadeIn(1000,function(){
		$("#r2").animate({'top': '+=100px'});
		});
	   
	   });
	   
	   $(document).ready(function() {
       $("#r3").css({"display":"none","transform":"translate3d(50px,140px)","position":"absolute"});
        $("#r3").fadeIn(1000,function(){
		$("#r3").animate({'top': '+=250px'});
		});
	   
	   
	 });

	 
	 
	   
	   
	   
	   
	    $(document).ready(function() {
       $("#v2").css({"display":"none","transform":"translate3d(50px,140px,0px)","position":"absolute"});
        $("#v2").fadeIn(1000,function(){
		$("#v2").animate({'top': '+=20px'});
		});
		});
	   
	   $(document).ready(function() {
        $("#v3").css({"display":"none","transform":"translate3d(50px,140px,0px)","position":"absolute"});
        $("#v3").fadeIn(1000,function(){
		$("#v3").animate({'top': '+=20px'});
		});
	   });	
	
	   $(document).ready(function() {
       $("#b1").css("display","none");
	   $("#b1").fadeIn(2000);
	   
	   });	
	   
	   $(document).ready(function() {
       $("#b2").css("display","none");
	   $("#b2").fadeIn(2000);
	   
	   });	
	   
	   $(document).ready(function() {
       $("#b3").css("display","none");
	   $("#b3").fadeIn(2000);
	   
	   });	
	   
	   
	   
	   