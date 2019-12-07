$(".toggle-button").click(function(){
  $(this).toggleClass("active");
  var modal = $('#myModal');
  var img = $(this).offsetParent('.imgCount').find('img').attr('src');
  var modalImage = $('#img01').attr('src', img);
  console.log(modalImage)
  modal.css('display' , 'block');
});

$(document).on('click' , ".image_upload" , function(){
  $(this).next().trigger('click');
  $(this).next().val('');
});



// When the user clicks on <span> (x), close the modal
$('.close').click(function(){
  $('#myModal').css('display' , 'none');
});
