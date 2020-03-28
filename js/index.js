// Logo Toggle //

$(function(){
    $(".logo").hover(function(){ //on hover
        $(".logo").attr("src","../images/logo-hover.png");
    },function(){ //on out
        $(".logo").attr("src","../images/logo.png");
    })
})