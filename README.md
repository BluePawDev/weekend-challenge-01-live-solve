# WEEKEND CHALLENGE 01
## GOAL
Create a carousel to allow user to move through an array of objects.
### Technologies
* jQuery
* JavaScript

## MODE: Base
* Enclosed is a JavaScript file (data.js) that has an array of objects, `peopleArray`
* Each cohort member is represented as an object within the array
1. One person at a time should be shown on the DOM represented by showing their name and their shout out
2. Include "Prev" and "Next" buttons, that when pressed, show the information for the previous or next person, respectively
3. These should wrap; clicking "Prev" when on the first person should wrap to show the last person and vice versa
4. The DOM should display the number of people and which is being currently viewed (eg. 2/20)

## MODE: Hard
1. Include fade-out/fade-in animation in-between transitioning people
* **HINT**: Google "jquery fadein"

## MODE: Pro
1. Include a timer that moves to the next person if the user does not click "Next" or "Prev"
2. If the user clicks on "Next" or "Prev", the timer should be reset
3. The timer should transition between people every 10 seconds
