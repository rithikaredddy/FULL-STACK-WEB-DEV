var elem1 = document.querySelectorAll("#elem");
elem1.forEach(function(var1){
    var1.addEventListener("mouseenter",function(){
        var1.childNodes[3].style.opacity = "1"
    });
    var1.addEventListener("mouseremove",function(){
        var1.childNodes[3].style.opacity = "0"
    });
    var1.addEventListener("mousemove",function(dets){
        var1.childNodes[3].style.left = dets.x+"px";
        var1.childNodes[3].style.top = dets.y+"px";
    });
});