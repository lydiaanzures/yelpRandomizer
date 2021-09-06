//Heroku used to access YELP API and work within Chrome Console
const myurl = "https://afternoon-retreat-09280.herokuapp.com/https://api.yelp.com/v3/businesses/search?term="

//ideally wouldn't be uploaed to github but ok for scope of this project!
const fusionKey = 'XlzltG4iPKFAGfUYjN7BX1ZyUBj483J7zTsMxdoYV2xwjZdAdnTE638x01EtUOYeakHuixW1madxxDTF9KRkeLjS7t5s4YAjVN0DOEF6L0Gr9Ir2de_Uuj5R7kMqYXYx'

//set a variable where we can store our API response
let yelpData;

//what variables do we need and DOM elements to target
// const $weather = $('#weather');
// const $temp = $('#temp');
const $name = $('#name');
const $categories = $('#categories');
const $inputCuisine = $('input[id="cuisine');
const $inputLocation = $('input[id="location');
// const $id = $('#id');
const $image = $('#image')
const $address = $('#address')
const $pricing = $('#pricing')
const $rating = $('#rating')
const $yelp_button = $('#yelp_button')
const $imageOne = $('#image-one')
const $imageTwo = $('#image-two')
const $imageThree = $('#image-three')



//when submitting form, call function to get data
$('form').on('submit', getCurrentData);





 

//let's write a function that can get a random number from 1-20, 
//we'll use this to target a random result from our search results object!
function randomNumber(){
    const randNum = Math.floor(Math.random() * 20)
    return randNum
}



function getCurrentData(event) {
    //prevent page refresh
    event.preventDefault();
    

    //GET request to YELP FUSION API, with input from form
    $.ajax({
        url: `${myurl}${$inputCuisine.val()}&location=${$inputLocation.val()}`,
        headers: {'Authorization':'Bearer ' + fusionKey,
            },
            method: 'GET',
            dataType: 'json',
            cache: 'true'

    }).then(
        function(data){

            //get random number which we will use as index
            const randomIndex = randomNumber()

            //get restaurant name from API response 
            const restaurantName = data.businesses[randomIndex].name

            //categories response is an array, let's loop through the categories
            let restaurantCategories = []
            const categoriesArray = data.businesses[randomIndex].categories
            for (i=0; i<categoriesArray.length; i++){
                restaurantCategories.push(" " + data.businesses[randomIndex].categories[i].title)

            }

            //the Yelp Fusion API has nicer metadata for a GET request to a specific restaurant ID, so let's nest 
            //another API call here now that we can grab the business result ID

            //grab resturant ID
            const restaurantId = data.businesses[randomIndex].id

            //make another GET request, this time to another endpoint
            $.ajax({
                url: `https://afternoon-retreat-09280.herokuapp.com/https://api.yelp.com/v3/businesses/${restaurantId}`,
                headers: {'Authorization':'Bearer ' + fusionKey,
                    },
                    method: 'GET',
                    dataType: 'json',
                    cache: 'true'
                }).then(
                    function(dataId){
                        console.log(dataId)

                        //access image_url
                        const image = dataId.image_url
                        // console.log(image)


                        //setting src attribute in image to the API image response
                        $image.attr("src", image)

                        //getting address
                        const displayAddressArray = dataId.location.display_address
                        formattedAddress = []
                        for (i=0; i<displayAddressArray.length; i++){
                            formattedAddress.push(" " + dataId.location.display_address[i])
                        }
                        const address = $address.text(formattedAddress)

                        //pricing of restaurant
                        const pricing = $pricing.text(dataId.price)
                       

                        
                        //rating of restaurant
                        //review count #
                        const rating = $rating.text(`${dataId.rating}/5 stars out of ${dataId.review_count} reviews`) 


                        
                        //yelp url
                        const yelpRestaurantUrl = dataId.url
                        $yelp_button.attr("href", yelpRestaurantUrl)

                        //get three images
                        const photosArray = dataId.photos
                        let imageOne = ''
                        let imageTwo = ''
                        let imageThree = ''
                        for (i=0; i<photosArray.length; i++){
                            console.log(i)
                            if (i==0){
                                imageOne += dataId.photos[0]
                            } else if (i==1){
                                imageTwo += dataId.photos[1]

                            } else if (i==2){
                                imageThree += dataId.photos[2]

                            }

                        }
                        // imageOne = dataId.photos[0]
                        // imageTwo = dataId.photos[1]
                        // imageThree = dataId.photos[2]
                        $imageOne.attr("src", imageOne)
                        $imageTwo.attr("src", imageTwo)
                        $imageThree.attr("src", imageThree)

                        


                    




                        
            
            
                restaurantCategories.push(" " + data.businesses[randomIndex].categories[i].title)

                        

        

                    },

                    //include behavior for errors
                    function(error){
                    console.log('bad request', error);
                    }
                );
                        
            
                        
            
                        



            //set variables for each piece of data
            const name = $name.text(restaurantName)
            const categories = $categories.text(restaurantCategories)
            // const restoId = $id.text(restaurantId)
            
            
            // $temp.text(data.main.temp)
            // $feels.text(data.main.feels_like);
            // $description.text(data.weather[0].main)

            //let's console log our array
            console.log("data" + data);

            //set yelpData variable to contain our API data
            yelpData = data;

            //call the render function
            render();
        },

        //include behavior for errors
        function(error){
        console.log('bad request', error);
        }
    );
}

function resultsVisibility() {
    $('#results-container').css("display","block")
    // $("#results-container").scrollTop = 0
}

$("#submit").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#results-container").offset().top
    }, 2500);
});


//render function
function render(){
    console.log(yelpData)
    // $categories.text(yelpData.name);
    // $feels.text(weatherData.feels_like);
    // $description.text(weatherData.weather[0].main);
}

