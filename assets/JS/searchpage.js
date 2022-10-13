
// function that gets called when user inputs their favortie character into the search bar

var displayCharName = document.getElementById('char-name')
var displayMovieTitles = document.getElementById('movies')
var displayShowTitles = document.getElementById('shows')
var displayCharimage = document.getElementById('char-image')

function renderInput () {
    var input = document.getElementById('search-bar').value
    var words = input.split(" ");
   
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    var charName = words.join("%20")

    console.log(charName);

var getTitles = "https://api.disneyapi.dev/character?name=" + charName;

fetch(getTitles)
.then(response => response.json())
.then(data => {
    var charName = data['data'][0]['name']
    var image = data['data'][0]['imageURL']
    var movies = data['data'][0]['films']
    var shows = data['data'][0]['tvShows']

    for(var i = 0; i < shows.length; i++){
        var showList = document.createElement("ul")
        var showLink = document.createElement("a")
        showLink.textContent = shows[i]
        showLink.setAttribute("href", listShowLinks())
        showList.appendChild(showLink)
        displayShowTitles.append(showList)
        console.log("hello")
    }
    for(var i = 0; i < movies.length; i++){
        var movieList = document.createElement("ul")
        var movieLink = document.createElement("a")
        movieLink.textContent = movies[i]
        movieLink.setAttribute("href", listMovieLinks())
        movieList.appendChild(movieLink)
        displayMovieTitles.append(movieList)
        console.log("hello")}
    //displayCharName.innerHTML = charName
    //displayCharimage.innerHTML = image
   // displayMovieTitles.innerHTML = movies
    //displayShowTitles.innerHTML = shows
    
})  

}
// to be called after user clicks a title they want to see more info on.
/* function renderPlatforms() {
var getPlatforms = "https://api.watchmode.com/v1/autocomplete-search/?apiKey=4geqQK1CQGBP4icGVsqsLn9aqaMb0cjhUXs79A9V&search_field=name&search_value=" + titleName + "&search_type=1";
} */
function listShowLinks(){
    console.log("poopshows")
}
function listMovieLinks(){
    console.log("pooopmovies")
}