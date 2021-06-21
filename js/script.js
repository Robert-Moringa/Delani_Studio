$(document).ready(function() {
    $("#design-icon").click(function(){
        $("#toggle-design").show();
        $("#design-icon").hide();
    });
    $("#toggle-design").click(function(){
      $("#design-icon").show();
      $("#toggle-design").hide();
  });


    // hover
    $("#quickmax").hover(function(){
      $(this).css("background-color", "yellow");
      }, function(){
      $(this).css("background-color", "pink");
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


