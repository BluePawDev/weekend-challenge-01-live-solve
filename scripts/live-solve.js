$(onReady);

var currentPersonIndex = 0;

function onReady(){
  setCurrentShoutOut(currentPersonIndex);
  $('#nextButton').on('click', function(){
    // increment currentPersonIndex by one to go to next person
    currentPersonIndex++;
    // detect if end of array reached
    // go back to begining if end or array reached
    if (currentPersonIndex >= peopleArray.length) {
      currentPersonIndex = 0;
    }


    // set current shout out with new index
    setCurrentShoutOut(currentPersonIndex);
  });
  $('#previousButton').on('click', function(){
    // detect if end of array reached
    // go back to begining if end or array reached
    if (currentPersonIndex <= 0) {
      currentPersonIndex = peopleArray.length;
    }
    // increment currentPersonIndex by one to go to next person
    currentPersonIndex--;
    // set current shout out with new index
    setCurrentShoutOut(currentPersonIndex);
  });
}

function setCurrentShoutOut (currentIndex){
  console.log(peopleArray[currentIndex]);
}
