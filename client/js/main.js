function preload(arrayOfImages,callback,callback2){
    var loaded = 0;
    $(arrayOfImages).each(function(){
        var image = $("<img/>")[0];
        image.onload = function(){
            loaded++;
            callback2(loaded,arrayOfImages.length);
            if(loaded == arrayOfImages.length){
                callback();
            }
        }
        image.src = this;
    });
}

$(".preloader").show();
$(".preloader").html("Betöltés...");
preload([
    "http://gtvilag.hu/img/header_images/kezdolap.png",
    "http://gtvilag.hu/img/header_images/setup.png",
    "http://gtvilag.hu/img/header_images/rolunk.png"
],function(){
    $(".preloader").hide();
    $.getScript("js/game.js");
},function(loaded,max){
    console.log("Betöltve "+loaded+" elem a(z) "+max+"-ból/-ből");
    $(".preloader").html("Betöltés... "+loaded+"/"+max);
});