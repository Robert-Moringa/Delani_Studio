$(document).ready(function() {
    // toggle-design
    $("#design-icon").click(function(){
        $("#toggle-design").show();
        $("#design-icon").hide();
    });
    $("#toggle-design").click(function(){
      $("#design-icon").show();
      $("#toggle-design").hide();
    });


    // toggle-developement
    $("#dev-icon").click(function(){
      $("#toggle-dev").show();
      $("#dev-icon").hide();
    });
    $("#toggle-dev").click(function(){
      $("#dev-icon").show();
      $("#toggle-dev").hide();
    });


    // toggle-project
    $("#project-icon").click(function(){
      $("#toggle-project").show();
      $("#project-icon").hide();
    });
    $("#toggle-project").click(function(){
      $("#project-icon").show();
      $("#toggle-project").hide();
    });

// hover-display-name
    // 1. row-one
    $("#portfolio-image1").mouseover(function(){
      $("#quickmax").show();
    });
    $("#portfolio-image1").mouseout(function(){
      $("#quickmax").hide();
    });

    $("#portfolio-image2").mouseover(function(){
      $("#ontario").show();
    });
    $("#portfolio-image2").mouseout(function(){
      $("#ontario").hide();
    });

    $("#portfolio-image3").mouseover(function(){
      $("#diamond").show();
    });
    $("#portfolio-image3").mouseout(function(){
      $("#diamond").hide();
    });

    $("#portfolio-image4").mouseover(function(){
      $("#webify").show();
    });
    $("#portfolio-image4").mouseout(function(){
      $("#webify").hide();
    });


    // 2. row-two
    $("#portfolio-image5").mouseover(function(){
      $("#mental").show();
    });
    $("#portfolio-image5").mouseout(function(){
      $("#mental").hide();
    });

    $("#portfolio-image6").mouseover(function(){
      $("#mixcrate").show();
    });
    $("#portfolio-image6").mouseout(function(){
      $("#mixcrate").hide();
    });

    $("#portfolio-image7").mouseover(function(){
      $("#burned").show();
    });
    $("#portfolio-image7").mouseout(function(){
      $("#burned").hide();
    });

    $("#portfolio-image8").mouseover(function(){
      $("#girrafe").show();
    });
    $("#portfolio-image8").mouseout(function(){
      $("#girrafe").hide();
    });


    $("form").submit(function(){
      var name= $("#names").val();
      alert(name + " we have received your message. Thank you for reaching out to u");
    });
       
});

$(document).ready(function() {
  $(".clickable").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
});


