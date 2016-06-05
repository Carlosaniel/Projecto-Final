
$(document).ready(function(){
	
    
    $("#carta").animate({
        height: '750px',}, 2000);
    
    
    $("#paramais").animate({opacity: '1',}, 10000);
    
    $("#painelhamb").hide();
    
    $("#hamburguer").click(function(){
            $("#painelhamb").slideToggle("slow");
    });  
    
    $("#dia1").mouseover(function(){
            $("#descridia1").animate("slow");
    }); 
    
    $("#descridia1").hide();
    $("#descridia2").hide();
    $("#descridia3").hide();
    
    
    $("#dia1").click(function(){
        $("#descridia1").animate({width:'toggle'},350);  
    });  
    
    $("#dia2").click(function(){
        $("#descridia2").animate({width:'toggle'},350);  
    });   
    
    $("#dia3").click(function(){
        $("#descridia3").animate({width:'toggle'},350);  
    });    
    
});


