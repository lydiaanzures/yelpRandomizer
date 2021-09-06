//Heroku used to access YELP API and work within Chrome Console
const myurl = "https://cryptic-headland-94862.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=tatte&location=boston";


           
  
const promise = $.ajax({
    url: "https://afternoon-retreat-09280.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=tatte&location=boston",
    headers: {'Authorization':'Bearer XlzltG4iPKFAGfUYjN7BX1ZyUBj483J7zTsMxdoYV2xwjZdAdnTE638x01EtUOYeakHuixW1madxxDTF9KRkeLjS7t5s4YAjVN0DOEF6L0Gr9Ir2de_Uuj5R7kMqYXYx',
        },
        method: 'GET',
        dataType: 'json',
        // jsonp : false,
        // jsonpCallback: 'jsonCallback',
    // contentType: 'application/json', -- you can't set content type for a <script> tag, this option does nothing for jsonp | KevinB
        cache: 'true'
        
        // contentType: "application/json"
        });         
    promise.then(
        (data) => {
        console.log(data);
        },
        (error) => {
        console.log('bad request: ', error);
        }
    );



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