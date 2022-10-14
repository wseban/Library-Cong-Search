
// function that gets called when user inputs their favortie character into the search bar

var displayCharName = document.getElementById('char-name')
var displayMovieTitles = document.getElementById('movies')
var displayShowTitles = document.getElementById('shows')
var displayCharImage = document.getElementById('char-image')



function renderInput () {
    var input = document.getElementById('search-bar').value
    var words = input.split(" ");
   
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    var charName = words.join("%20")

var getTitles = "https://api.disneyapi.dev/character?name=" + charName;

fetch(getTitles)
.then(response => response.json())
.then(data => {
    var movies = data['data'][0]['films']
    var shows = data['data'][0]['tvShows']
    var charName = data['data'][0]['name']
    var image = data['data'][0]['imageUrl']

    displayCharName.innerHTML = charName;
    displayCharImage.setAttribute("src", image);


    var showList = document.createElement("ul")
    displayShowTitles.append(showList)
    var movieList = document.createElement("ul")
    displayMovieTitles.append(movieList)

    for(var i = 0; i < shows.length; i++){
        var showListItem = document.createElement("li")
        var showLink = document.createElement("a")
        showLink.textContent = shows[i]
        showList.appendChild(showListItem)
        showListItem.appendChild(showLink)
        showLink.setAttribute("id", i)
    }

    for(var i = 0; i < movies.length; i++){
        var movieListItem = document.createElement("li")
        var movieLink = document.createElement("a")
        movieLink.textContent = movies[i]
        movieList.appendChild(movieListItem)
        movieListItem.appendChild(movieLink)
    }
}) 

}




function listShowLinks(event){
    //
    console.log(event)
}
function listMovieLinks(){
    movieLink.setAttribute("onClick", renderPlatforms())

}




var inputClick = document.getElementById('search-bar')
inputClick = document.addEventListener("click", renderInput);


var inputEnter = document.getElementById("search-bar");
inputEnter.addEventListener("keypress", function(event) {

  if (event.key === "Enter") {
    event.preventDefault();
    renderInput()
  }

});




function renderPlatforms() {
    console.log("hello")
/* var getPlatforms = "https://api.watchmode.com/v1/autocomplete-search/?apiKey=4geqQK1CQGBP4icGVsqsLn9aqaMb0cjhUXs79A9V&search_field=name&search_value=" + titleName + "&search_type=1"; */
}