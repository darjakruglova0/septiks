$(function () {
  $('#myTab li:first-child a').tab('show')
})





$('.minus').click(function () {
  var $input = $(this).parent().find('input');
  var count = parseInt($input.val()) - 1;
  count = count < 1 ? 1 : count;
  $input.val(count);
  $input.change();
  return false;
  });
  $('.plus').click(function () {
  var $input = $(this).parent().find('input');
  $input.val(parseInt($input.val()) + 1);
  $input.change();
  return false;
  });



  
$('.main-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,               
  dots: false,
  arrows:false,
  infinite: true,
 fade:true,
  asNavFor: '.thumb-slider'
});  

$('.thumb-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,               
  dots: false,
  infinite: true,
  asNavFor: '.main-slider',
  focusOnSelect: true,
  centerMode: false,
  arrows:false,
 
});   


