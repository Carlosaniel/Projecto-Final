
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
    
    
    $("#dia1").mouseover(function(){
        $("#descridia1").animate({width:'toggle'},350);  
    });  
    
    $("#dia1").mouseout(function(){
        $("#descridia1").animate({width:'toggle'},350);  
    });  
    
    $("#dia2").mouseover(function(){
        $("#descridia2").animate({width:'toggle'},350);  
    });     
    
    $("#dia2").mouseout(function(){
        $("#descridia2").animate({width:'toggle'},350);  
    });   
    
    $("#dia3").mouseover(function(){
        $("#descridia3").animate({width:'toggle'},350);  
    });    
    
    $("#dia3").mouseout(function(){
        $("#descridia3").animate({width:'toggle'},350);  
    });  
    
    $("#paramais").mouseover(function(){
        $("#paramais").css({background:'#D0D0D0'});  
    }); 
    
    $("#paramais").mouseout(function(){
        $("#paramais").css({background:'none'});  
    });  
    
    $("#provedor").hide();
    
    $("#question").mouseover(function(){
        $("#question").css({background: "-webkit-gradient(linear, left top, left bottom, from(#3A5FCD), to(#27408B)"});  
    });      
    
    $("#question").mouseout(function(){
        $("#question").css({background: "#3A5FCD"}); 
    });      
    
    $("#question").click(function(){
        $("#provedor").slideToggle(1000);
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
                top.style.height = "51px";
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
                top.style.height = "51px";
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
                top.style.height = "51px";
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


