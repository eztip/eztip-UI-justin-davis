$(document).ready(function(){
  
  // Team Page Blurbs Default to Hide
  $('.hidden-blurb').slideUp(0);

  // When hovering over team pics the blurbs show
  $(function(){
      $('.team-pics').hover(function() {
        $(this).addClass('member-hover');
        $('.hidden-blurb').slideToggle(500);
      }, function() {
        $(this).removeClass('member-hover');
        $('.hidden-blurb').slideToggle(500);
      })
    })

    $(function(){
      $('.nav-logo').click(function() {
        $(this).fadeOut(750).fadeIn(500);
      })
    })

  });

 