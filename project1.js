//keeping api keys in config type file so we can gitignore the keys when uploading to github
// require('dotenv').config();
// process.env.WEATHER_KEY;

const weatherKey = '3b0f7528249550bcb27b5d85727ab526'


console.log(weatherKey)


//set a variable where we can store our API response
let weatherData;

//what variables do we need and DOM elements to target
const $weather = $('#weather');
const $temp = $('#temp');
const $feels = $('#feels');
const $input = $('input[type="text');
const $description = $('#description')



$('form').on('submit', getCurrentData);

function getCurrentData(event) {
    //prevent page refresh
    event.preventDefault();

    $.ajax({
        url:`http://api.openweathermap.org/data/2.5/weather?q=${$input.val()}&appid=${weatherKey}&units=imperial`
    }).then(
        function(data){
            
            $weather.text(data.name)
            $temp.text(data.main.temp)
            $feels.text(data.main.feels_like);
            $description.text(data.weather[0].main)

            console.log(data);
        
            weatherData = data;
            render();
        },
        function(error){
        console.log('bad request', error);
        }
    );
}

function render(){
    $weather.text("Weather for " + weatherData.name);
    $temp.text(weatherData.temp);
    $feels.text(weatherData.feels_like);
    $description.text(weatherData.weather[0].main);
}