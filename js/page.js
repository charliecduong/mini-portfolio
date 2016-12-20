$(function(){
$('.code').each(function(){
    var txt = $(this).text();
    var html = '';
    for (t in txt)
    {
        html = html + '<span>' + txt[t] + '</span>';
    }
    $(this).html(html);
  });
});

$(document).on('hover', '.code span', function(event){
  var back = ["#8E0C24","#446ba7","#F37C3D"];
  var rand = back[Math.floor(Math.random() * back.length)];
  console.log(rand);
  if (event.type == 'mouseenter')
      $(this).css('color', rand);
  else
      $(this).css('color', rand);
});
