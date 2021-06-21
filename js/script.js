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


