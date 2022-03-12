$(document).ready(function(){
    $("#design").click(function(){
$(".design").toggle();
});
$("#dev").click(function(){
    $(".dev").toggle();
        });
      $("#product").click(function(){
        $(".product").toggle();
          });
});

$(document).ready(function(){
    $("#white").click(function(){
        $("body").removeClass();
        $("body").addClass("btn-light");
    });
    $("#black").click(function(){
        $("body").removeClass();
        $("body").addClass("btn-dark");
    });
});

$(document).ready(function(){
$(".image").hover(function(){
    $(".text-block").toggle();

})
});