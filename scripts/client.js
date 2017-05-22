$(onReady);

var index = 0;
var time;

function resetTime() {
  time = setInterval(function() {
    cmdNext();
  }, 10000);
}

function arrayCounter() { // start of arrayCounter
  if (index >= peopleArray.length) {
    index = 0;
  } else if ((index + 1) < 1) {
    index = peopleArray.length - 1;
  }
} // end of arrayCounter

function carouselText() { // start of carouselText
  $('.carouselDisplay').fadeOut('slow', function() {
    $('.carouselDisplay').text(peopleArray[index].name + ': ' + peopleArray[index].weirdThing).fadeIn('slow');
  });
  $('.counter').text((index + 1) + ' of ' + peopleArray.length);
} // end of carouselText

function cmdNext() { // start of cmdNext
  index++;
  arrayCounter();
  carouselText();
  clearInterval(time);
  resetTime();
} // end of cmdNext

function cmdPrev() { // start of cmdPrev
  index--;
  arrayCounter();
  carouselText();
  clearInterval(time);
  resetTime();
} // end of cmdPrev

function onReady() { // start of onReady
  carouselText();
  resetTime();
  $('.next').on('click', cmdNext);
  $('.prev').on('click', cmdPrev);
} // end of onReady
