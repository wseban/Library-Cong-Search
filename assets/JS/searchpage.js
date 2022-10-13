
// function that gets called when user inputs their favortie character into the search bar
function renderInput () {
    var input = document.getElementById('search-bar').value
    var words = input.split(" ");
   
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    var charName = words.join("%20");

var getTitles = "https://api.disneyapi.dev/character?name=" + charName;

fetch (getTitles, {
    
})
.then(function (response){
    return response.json()
})
.then(function(data){
    console.log(data)
})}



// to be called after user clicks a title they want to see more info on.
function renderPlatforms() {



var getPlatforms = "https://api.watchmode.com/v1/autocomplete-search/?apiKey=4geqQK1CQGBP4icGVsqsLn9aqaMb0cjhUXs79A9V&search_field=name&search_value=" + titleName + "&search_type=1";

}