$(function(){
$('#green').mouseenter(function(){
$ ('#text').css('color','green');
});
$('#red').mouseenter(function(){
$('#text').css('color','red');
});
$('#blue').mouseenter(function(){
$('#text').css('color','blue');
});
$('div').mouseleave(function(){
$('#text').css('color','black');
});
});
