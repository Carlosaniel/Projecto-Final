
$(document).ready(function(){
	
    
    $("#carta").animate({
        height: '750px',}, 2000);
    
    $("#painelhamb").hide();
    
    $("#hamburguer").click(function(){
            $("#painelhamb").slideToggle("slow");
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
    
    function Scroll(){
        var top = document.getElementById('header');
        var ypos = window.pageYOffset;
            if(ypos < 600) {
                top.style.height = "55px";
            }
            else {
                top.style.height = "35px";
            }
        
        var top = document.getElementById('botao');
        var ypos = window.pageYOffset;
            if(ypos < 600) {
                top.style.height = "45px";
                top.style.fontSize = "1em";
                top.style.paddingTop = "1em";
            }
            else {
                top.style.height = "30px";
                top.style.fontSize = "0.8em";
                top.style.paddingTop = "0.6em";
            }
        
        var top = document.getElementById('botao1');
        var ypos = window.pageYOffset;
            if(ypos < 600) {
                top.style.height = "45px";
                top.style.fontSize = "1em";
                top.style.paddingTop = "1em";
            }
            else {
                top.style.height = "30px";
                top.style.fontSize = "0.8em";
                top.style.paddingTop = "0.6em";
            }
        
        var top = document.getElementById('botao2');
        var ypos = window.pageYOffset;
            if(ypos < 600) {
                top.style.height = "45px";
                top.style.fontSize = "1em";
                top.style.paddingTop = "1em";
            }
            else {
                top.style.height = "30px";
                top.style.fontSize = "0.8em";
                top.style.paddingTop = "0.6em";
            }
        
        
        }
    
    window.addEventListener("scroll",Scroll);
    
    
    
    
});


