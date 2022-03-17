$(document).ready(function(){
    $(".des").click(function(){
$(".design").show();
$(".des").hide();
$("#design").click(function(){
    $(".design").hide();
    $(".des").show();
  
  
});
});

$(".de").click(function(){
    $(".dev").show();
    $(".de").hide();
    $("#dev").click(function(){
        $(".dev").hide();
        $(".de").show();
      
      
    });
    });

    $(".prod").click(function(){
        $(".product").show();
        $(".prod").hide();
        $("#product").click(function(){
            $(".product").hide();
            $(".prod").show();
          
          
        });
        });
        $("#white").click(function(){
            $("body").removeClass();
            $("body").addClass("btn-light");
        });
        $("#black").click(function(){
            $("body").removeClass();
            $("body").addClass("btn-dark");
        });
        $("#one").hover(function(){
            $(".text-block1").toggle();
        
        });
        $("#two").hover(function(){
            $(".text-block2").toggle();
        });
        $("#three").hover(function(){
            $(".text-block3").toggle();
        });
        $("#four").hover(function(){
            $(".text-block4").toggle();
        });
        $("#five").hover(function(){
            $(".text-block5").toggle();
        });
        $("#six").hover(function(){
            $(".text-block6").toggle();
        });
        $("#seven").hover(function(){
            $(".text-block7").toggle();
        });
        $("#eight").hover(function(){
            $(".text-block8").toggle();
        });

        $("button").click(function(){
            $("#form")[0].reset();
        });
    });
   
    


  