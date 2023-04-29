function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;

}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

$(document).ready(function() {
    
    $('a[href*="#"]').on('click', function(e) {
      e.preventDefault();
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 1400); 
    });
  });
  