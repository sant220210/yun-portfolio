$(document).ready(function() {
    //top滾動至頂端
        $('.top').click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0
         },500);
              
         });

})
