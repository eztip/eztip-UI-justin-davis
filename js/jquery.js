$(document).ready(function(){
  
  // Team Page Blurbs Default to Hide
  $('.hidden-blurb').slideUp();

  // When hovering over team pics the blurbs show
  $(function(){
      $('.team-pics').hover(function() {
        $(this).addClass('member-hover');
        $('.hidden-blurb').slideDown(500);
      }, function() {
        $(this).removeClass('member-hover');
        $('.hidden-blurb').slideUp(500);
      })
    })

  });

 