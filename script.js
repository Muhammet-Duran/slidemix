$(document).ready(function(){
    const owl=$('.slide');
    const prev=`<span class="icon-ifa ifa-138"></span>`
    const next=`<span class="icon-ifa ifa-139"></span>`
    owl.owlCarousel({
        navText:[prev,next],
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        items:4,
        autowidth:true,

        
        
        responsive:{
            0:{
                items:2,
                nav:false,
                margin:5,
                
               
                
                
                
                
                
                
            },
            
            
            540:{
                items:2,
                
            }
            ,1000:{
                items:3,
                nav:true
            }
            
        }
    })

})