//Heroku used to access YELP API and work within Chrome Console
const myurl = "https://afternoon-retreat-09280.herokuapp.com/https://api.yelp.com/v3/businesses/search?term="

// const herokuYelpUrl = "https://afternoon-retreat-09280.herokuapp.com/https://api.yelp.com/v3/businesses/search?term="
// const myurl = `${herokuYelpUrl}${cuisineVal}&location=${locationVal}`



//"https://cryptic-headland-94862.herokuapp.com/https://api.yelp.com/v3/businesses/search?term="
// tatte&location=boston";

//ideally wouldn't be uplaoded to github but ok for scope of this project!
const fusionKey = 'XlzltG4iPKFAGfUYjN7BX1ZyUBj483J7zTsMxdoYV2xwjZdAdnTE638x01EtUOYeakHuixW1madxxDTF9KRkeLjS7t5s4YAjVN0DOEF6L0Gr9Ir2de_Uuj5R7kMqYXYx'


//set a variable where we can store our API response
let yelpData;

//what variables do we need and DOM elements to target
// const $weather = $('#weather');
// const $temp = $('#temp');
// const $feels = $('#feels');
const $inputCuisine = $('input[id="cuisine');
const $inputLocation = $('input[id="location');





// console.log('input value is ' + String($input.val()))
// const $description = $('#description')


//when submitting form, call function to get data
$('form').on('submit', getCurrentData);


//accessing form elements
// const form = document.getElementById('form');
// const cuisineResult = form.elements['cuisine'];
// const locationResult = form.elements['location'];

// // getting the element's value
// let cuisineVal = cuisineResult.value;
// let locationVal = locationResult.value;

// console.log("location value is" + locationVal)

//let's write a function that can get a random number from 1-20, 
//we'll use this to target a random result from our search results object!
function randomNumber(){
    const randNum = Math.floor(Math.random() * 20)
    return randNum
}



function getCurrentData(event) {
    //prevent page refresh
    event.preventDefault();

    $.ajax({
        url: `${myurl}${$inputCuisine.val()}&location=newyork`,
        // url: `${myurl}${$input.val()}&location=newyork`,
        //rocky-savannah-34948.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=tiger&location=boston`,
        //`${myurl}${$input.val()}&location=boston`,
        headers: {'Authorization':'Bearer ' + fusionKey,
            },
            method: 'GET',
            dataType: 'json',
            cache: 'true'

    }).then(
        function(data){
            
            // $weather.text(data.name)
            // $temp.text(data.main.temp)
            // $feels.text(data.main.feels_like);
            // $description.text(data.weather[0].main)
            
            console.log(data);
            console.log("data is: " + data.businesses[randomNumber()].name)
        
            yelpData = data;
            render();
        },
        function(error){
        console.log('bad request', error);
        }
    );
}

function render(){
    console.log(yelpData)
    // $weather.text("Results for " + yelpData);
    // $temp.text(weatherData.temp);
    // $feels.text(weatherData.feels_like);
    // $description.text(weatherData.weather[0].main);
}












  
// const promise = $.ajax({
//     url: "https://afternoon-retreat-09280.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=tatte&location=boston",
//     headers: {'Authorization':'Bearer ' + fusionKey,
//         },
//         method: 'GET',
//         dataType: 'json',
//         // jsonp : false,
//         // jsonpCallback: 'jsonCallback',
//     // contentType: 'application/json', -- you can't set content type for a <script> tag, this option does nothing for jsonp | KevinB
//         cache: 'true'
        
//         // contentType: "application/json"
//         });         
//     promise.then(
//         (data) => {
//         console.log(data);
//         },
//         (error) => {
//         console.log('bad request: ', error);
//         }
//     );



// let yelpAPI = require('yelp-api');

// // Create a new yelpAPI object with your API key
// let apiKey = 'XlzltG4iPKFAGfUYjN7BX1ZyUBj483J7zTsMxdoYV2xwjZdAdnTE638x01EtUOYeakHuixW1madxxDTF9KRkeLjS7t5s4YAjVN0DOEF6L0Gr9Ir2de_Uuj5R7kMqYXYx';
// let yelp = new yelpAPI(apiKey);

// // Set any parameters, if applicable (see API documentation for allowed params)
// let businessId = 'tatte';
// let params = [{ locale: 'en_US' }];

// // Call the endpoint
// yelp.query(`businesses/${businessId}`, params)
// .then(data => {
//   // Success
//   console.log(data);
// })
// .catch(err => {
//   // Failure
//   console.log(err);
// });