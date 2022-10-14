// function that gets called when user inputs their favortie character into the search bar

var displayCharName = document.getElementById('char-name')
var displayMovieTitles = document.getElementById('movies')
var displayShowTitles = document.getElementById('shows')
var displayCharImage = document.getElementById('char-image')
var displayStreamedMovies = document.getElementById('streamed-movies')
var displayStreamedShows = document.getElementById('streamed-shows')

var displayTitle = document.getElementById('title')
var displayPoster = document.getElementById('poster')
var posterImage = document.getElementById('poster-img')
var displayReleaseDate = document.getElementById('release')
var displayRating = document.getElementById('rating')
var displayPlot = document.getElementById('plot')





// --------------------------------------  EVENT LISTENERS  ---------------------- ENTER AND CLICK  -------------------

var inputClick = document.getElementById('search-button')
inputClick.addEventListener("click", renderInput);


var inputEnter = document.getElementById("search-bar");
inputEnter.addEventListener("keypress", function(event) {

  if (event.key === "Enter") {
    event.preventDefault();
    renderInput()
  }

});


// --------------------------------  FORMATTING USER INPUT  ---------------------------------------

function renderInput () { // Function that is called on click and Enter

    // Iterates through the inputed character name and Uppercases the First Letter and lower cases the rest + adds the required "%20" between spaces so that the API can be called properly - 
    var input = document.getElementById('search-bar').value
    var words = input.split(" ");
   
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    var charName = words.join("%20")

//--------------------  DISNEY API  -----------------------------------------------
var getTitles = "https://api.disneyapi.dev/character?name=" + charName;

fetch(getTitles)
.then(response => response.json())
.then(data => {
    
    var movies = data['data'][0]['films'] // Retrieves the data (Films) stores it in the variable
    var shows = data['data'][0]['tvShows'] // Retrieves the data (TV Shows) stores it in the variable
    var charName = data['data'][0]['name'] // Retrieves the data (Character Name) stores it in the variable
    var image = data['data'][0]['imageUrl'] // Retrieves the data (Image of Character) stores it in the variable

    displayCharName.innerHTML = charName;  // Displays Character name on screen
    displayCharImage.setAttribute("src", image); // Displays Character Image on screen

    //Clears the text content of the list items after and before each search ---
    if(displayShowTitles.getElementsByTagName("ul")){
        displayShowTitles.textContent = ""
    }
    if(displayMovieTitles.getElementsByTagName("ul")){
        displayMovieTitles.textContent = ""
    }
    
    // Appends 2 Unordered Lists for Movies & Shows
    var showList = document.createElement("ul")
    displayShowTitles.append(showList)
    var movieList = document.createElement("ul")
    displayMovieTitles.append(movieList)


// -------------------------   SHOWS  -----------------------------   
    // Appends ALL List items (As much data that is availible) to be contained within the UL of Show Titles
    for(var i = 0; i < shows.length; i++){
        var showListItem = document.createElement("li")
        var showLink = document.createElement("a")
        showLink.textContent = shows[i]
        showList.appendChild(showListItem)
        showListItem.appendChild(showLink)
        showLink.setAttribute("id", i)
        var listenShowLink = document.getElementById(i);
        listenShowLink.addEventListener("click", renderInfo);     
    }
    
// -------------------------   MOVIES  -----------------------------
    // Appends ALL List items (As much data that is availible) to be contained within the UL of Movie Titles
    for(var j = 0; j < movies.length; j++){
        var ten = 100;
        var movieListItem = document.createElement("li")
        var movieLink = document.createElement("a")
        movieLink.textContent = movies[j]
        movieList.appendChild(movieListItem)
        movieListItem.appendChild(movieLink)
        movieLink.setAttribute("id", ten + j);
        var listenMovieLink = document.getElementById(ten + j); 
        listenMovieLink.addEventListener("click", renderInfo);
    }
    
}) 

}



// --------------------------------  OMDB API  -------------------------------------


function renderInfo(event) {
    var userValue = event.target.innerText;

    var splitUserValue = userValue.split(" ");
   
    for (var i = 0; i < splitUserValue.length; i++) {
        splitUserValue[i] = splitUserValue[i][0].toUpperCase() + splitUserValue[i].substr(1);
    }

    var joinUserValue = splitUserValue.join("%20")

    console.log(joinUserValue);


      fetch('http://www.omdbapi.com/?t=' + joinUserValue + '&apikey=61416bd7')
        .then(response => response.json())
        .then(data => {

        console.log(data)
        
        var title = data['Title'];
        var releaseDate = data['Released'];
        var rating = data['imdbRating'];
        var plot = data['Plot'];
        
        console.log(plot);
        console.log(rating);
        var poster = data['Poster'];
        posterImage.setAttribute("src", poster); 
        
        
        

        displayTitle.innerHTML = title;
        displayReleaseDate.innerHTML = releaseDate;
        displayRating.innerHTML = rating;
        displayPlot.innerHTML = plot;
        displayPoster.innerHTML = poster; 
        })


}

//getting the 'search-button' element by id allows you to target which button will animate
//for the user when they interact with it. when the mouse hovers aboves the button it will
//increase the width at the speed listed. 

var button = document.getElementById('search-button');

mouseHoverAnimation = () => {
    anime({
        targets: button,
        width: '100%',
        scale: {
            delay: 2,
            value: 1.5
        },
        duration: 3000,
    })
}

button.addEventListener('mouseenter', mouseHoverAnimation)

//the next function reverses the effects of the above animation, reverting to the
// default assigned size once the mouse moves away from the button
mouseHoverAnimation = () => {
    anime({
        targets: button,
        width: '100%',
        scale: {
            delay: 2,
            value: 1.0
        },
        duration: 3000,
    })
}

button.addEventListener('mouseleave', mouseHoverAnimation)


var buttonTop = document.getElementById('back-top')

mouseHoverAnimation = () => {
    anime({
        targets: buttonTop,
        width: '100%',
        scale: {
            delay: 2,
            value: 1.5
        },
        duration: 3000,
    })
}

buttonTop.addEventListener('mouseenter', mouseHoverAnimation)

mouseHoverAnimation = () => {
    anime({
        targets: buttonTop,
        width: '100%',
        scale: {
            delay: 2,
            value: 1.0
        },
        duration: 3000,
    })
}

buttonTop.addEventListener('mouseleave', mouseHoverAnimation)
