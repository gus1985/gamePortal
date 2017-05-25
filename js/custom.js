//ANIMATION FORM & SEARCH//

$( document ).ready(function() {
	$("#header-user").click(function(){
		$("#header-form").slideToggle("slow");
	});
	});

$( document ).ready(function() {
	$("#search").click(function(){
		$("#header-search").slideToggle("slow");
	});
	});

//MENU RESPONSIVE//

$( document ).ready(function() {
	$("#nav-user").click(function(){
		$("#nav-form").slideToggle("slow");
	});
	});

$(function(){

	$('#slide-submenu').on('click',function() {			        
        $(this).closest('.list-group').fadeOut('slide',function(){
        	$('.mini-submenu').fadeIn();	
        });
        
      });

	$('.mini-submenu').on('click',function(){		
        $(this).next('.list-group').toggle('slide');
        $('.mini-submenu').hide();
	})
})

