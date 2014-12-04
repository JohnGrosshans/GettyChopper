$( document ).ready(function() {
    //GET HEIGHT OF IFRAME
    var height = $('.getty').find('iframe').attr('height');
    var newHeight = height - 29;
    
    //ADD CSS TO PARENT DIV
    $('.getty').css({
	    height: newHeight + 'px',
	    overflow: "hidden",
	});
	
	$('.getty').css("pointer-events", "none");
});
