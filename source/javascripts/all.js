//= require_tree .
<script src="js/jquery-1.3.2.min.js" type="text/javascript"></script>
<script src="js/jquery.backgroundPosition.js" type="text/javascript"></script>
<script type="text/javascript">
$(function(){

  $('#midground').css({backgroundPosition: '0px 0px'});
  $('#foreground').css({backgroundPosition: '0px 0px'});
  $('#background').css({backgroundPosition: '0px 0px'});

  $('#midground').animate({
    backgroundPosition:"(-10000px -2000px)"
  }, 240000, 'linear');

  $('#foreground').animate({
    backgroundPosition:"(-10000px -2000px)"
  }, 120000, 'linear');

  $('#background').animate({
    backgroundPosition:"(-10000px -2000px)"
  }, 480000, 'linear');

});
</script>
