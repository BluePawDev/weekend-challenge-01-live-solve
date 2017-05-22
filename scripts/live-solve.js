$(onReady);

var currentPersonIndex = 0;

function onReady() {
  setCurrentShoutOut(currentPersonIndex);

  // start of nextButton
  $('#nextButton').on('click', function() {
    // increment currentPersonIndex by one to go to next person
    currentPersonIndex++;
    // detect if end of array reached
    // go back to begining if end or array reached
    if (currentPersonIndex >= peopleArray.length) {
      currentPersonIndex = 0;
    }
    // set current shout out with new index
    setCurrentShoutOut(currentPersonIndex);
  }); // end of nextButton

  // start of previousButton
  $('#previousButton').on('click', function() {
    // detect if end of array reached
    // go back to begining if end or array reached
    if (currentPersonIndex <= 0) {
      currentPersonIndex = peopleArray.length;
    }
    // decrement currentPersonIndex by one to go to previous person
    currentPersonIndex--;
    // set current shout out with new index
    setCurrentShoutOut(currentPersonIndex);
  }); // end of previousButton

  $('.container').on('click', '.orderButton', function() {
    console.log('order button was clicked!');
    $('.container').append('<p>' + (currentPersonIndex + 1) + '/' + peopleArray.length + '</p>');
    $(this).remove();
  });
}

function setCurrentShoutOut(currentIndex) {
  var currentPerson = peopleArray[currentIndex];
  console.log(currentPerson);
  $shoutLine = $('<p></p>');
  $shoutLine.append(currentPerson.name);
  $shoutLine.append(': ');
  $shoutLine.append(currentPerson.weirdThing);

  $('.container').empty();
  $('.container').html($shoutLine);
  $('.container').append('<button class="orderButton">Click to show order</button>');


}
