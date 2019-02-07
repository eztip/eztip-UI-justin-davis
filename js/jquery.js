$(document).ready(function(){
    // $(".member").hover(function(){
    //   $(this).css("background-color", "#f1f1f1")();
    // });
    $(function(){
        $('.member').hover(function() {
          $(this).addClass('member-hover');
        }, function() {
          $(this).removeClass('member-hover');
        })
      })
  });

 