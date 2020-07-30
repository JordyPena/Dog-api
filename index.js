'use strict';

function getDogImage(userInput) {
    
    fetch("https://dog.ceo/api/breeds/image/random/"+userInput)  
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong, we are working on a solution.'));
    
}



function displayResults(responseJson) {
    $("#images").empty();
   for (let i = 0; i < responseJson.message.length; i++) {
       
       $("#images").append(`<img src=${responseJson.message[i]}>`);
      
       console.log(responseJson);
   }

    $('.results').removeClass('.hidden');
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getDogImage($("#photos").val());
        
        
    });
}


$(function() {
    console.log('App loaded! Waiting for submit');
    watchForm();
});


$(document).ready(function() {

});