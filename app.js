const ratingButtons = document.querySelectorAll('.button span');
const ratingPointDisplay = document.querySelector('#rating');
const defaultContainer = document.querySelector('.container');
const submitButton = document.querySelector('#submit');

let rating_buttonClicked_Or_Not = false;
let ratingValue = 0;


ratingButtons.forEach( span => {

   span.addEventListener( 'click', () => {
     
    // Reset the background color and content color of all rating button
      ratingButtons.forEach( span => {

        span.style.backgroundColor = '';
        span.style.color = '';

      })    

        ratingValue = parseInt(span.innerHTML);
        submitting(ratingValue);
        rating_buttonClicked_Or_Not = true;
        span.style.backgroundColor = 'hsl(217, 12%, 63%)';
        span.style.color = 'white';
   })
   
})

 function submitting(value1) {
     
    ratingPointDisplay.innerText = value1;   
    submitButton.addEventListener( 'click' , () => {

      defaultContainer.style.display = 'none';
    })
 }

