const myurl = "https://api.yelp.com/v3/businesses/search?term=tatte&location=boston";

         $.ajax({
            url: myurl,
            headers: {
             'Authorization':'Bearer XlzltG4iPKFAGfUYjN7BX1ZyUBj483J7zTsMxdoYV2xwjZdAdnTE638x01EtUOYeakHuixW1madxxDTF9KRkeLjS7t5s4YAjVN0DOEF6L0Gr9Ir2de_Uuj5R7kMqYXYx',
         },
            method: 'GET',
            dataType: 'json',
            success: function(data){
                // Grab the results from the API JSON return
                const totalresults = data.total;
                // If our results are greater than 0, continue
            //     if (totalresults > 0){
            //         // Display a header on the page with the number of results
            //         $('#results').append('<h5>We discovered ' + totalresults + ' results!</h5>');
            //         // Itirate through the JSON array of 'businesses' which was returned by the API
            //         $.each(data.businesses, function(i, item) {
            //             // Store each business's object in a variable
            //             const id = item.id;
            //             const alias = item.alias;
            //             const phone = item.display_phone;
            //             const image = item.image_url;
            //             const name = item.name;
            //             const rating = item.rating;
            //             const reviewcount = item.review_count;
            //             const address = item.location.address1;
            //             const city = item.location.city;
            //             const state = item.location.state;
            //             const zipcode = item.location.zip_code;
            //             // Append our result into our page
            //             $('#results').append('<div id="' + id + '" style="margin-top:50px;margin-bottom:50px;"><img src="' + image + '" style="width:200px;height:150px;"><br>We found <b>' + name + '</b> (' + alias + ')<br>Business ID: ' + id + '<br> Located at: ' + address + ' ' + city + ', ' + state + ' ' + zipcode + '<br>The phone number for this business is: ' + phone + '<br>This business has a rating of ' + rating + ' with ' + reviewcount + ' reviews.</div>');
            //       });
            //     } else {
            //         // If our results are 0; no businesses were returned by the JSON therefor we display on the page no results were found
            //         $('#results').append('<h5>We discovered no results!</h5>');
            //     }
            // }
         })     