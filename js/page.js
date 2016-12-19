$(function(){
$('h1').each(function(){
    var txt = $(this).text();
    var html = '';
    for (t in txt)
    {
        html = html + '<span>' + txt[t] + '</span>';
    }
    $(this).html(html);
  });
});

$(document).on('hover', 'h1 span', function(event){
  if (event.type == 'mouseenter')
      $(this).css('color', 'red');
  else
      $(this).css('color', 'blue');
});
