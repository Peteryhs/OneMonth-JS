/* Grad input from the user */



var button = document.querySelector("button");
button.addEventListener("click", function(){
    var userinput = document.querySelector("input").value //the value in that tag thing;
    url = input_to_url(usserinput);
    console.log(url);
    input_to_url(usserinput);
})

var enter = document.querySelector("input");
enter.addEventListener("keyup", function(e){
    var userinput = document.querySelector("input").value //the value in that tag thing;


    if(e.which ===13){
        input_to_url(userinput);

    }


})


/* Do data stuff using API */
function input_to_url(input){
    var search_item = input.split(" ").join("+")
    var url= "http://api.giphy.com/v1/gifs/search?q=" + search_item + "&api_key=26AXbkE9HUdleG4eGKwgMTU5XCMggwOJ"



// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();


GiphyAJAXCall.addEventListener('load', function(e){
    var data = e.target.response;
    console.log(data);
     pushtoDOM(data);
});
}

/*Show me the stuff*/
function pushtoDOM(input){
    var response = JSON.parse(input);
    console.log(response);

    var imageURLs = response.data;
    console.log(imageURLs);
    var container = document.querySelector(".js-container");
    imageURLs.forEach(function(image){
        var src = image.images.fixed_height.url
        console.log(src);

        container.innerHTML += "<img src=\"" + src +"\" class='container-image\'>"
    });



}
//use a \ infront of a " to make it a string and escape from the actual quoting of the string