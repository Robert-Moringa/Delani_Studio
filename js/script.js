$(document).ready(function() {
    $("#design-icon").click(function(){
        $("#toggle-design").show();
    });

    $("form").submit(function(){
      var name= $("#names").val();
      alert(name + " we have received your message. Thank you for reaching out to u");
    });
       
});

