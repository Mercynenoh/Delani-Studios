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
});

$(document).ready(function(){
$(".image").hover(function(){
    $(".text-block").toggle();

})
});

$(document).ready(function(){
$("contactForm").submit(function(event){
event.preventDefault();
$("submit").click(function(){
    showMessage("Sending message..");
    $("#output").text(showMessage);
})


});
});