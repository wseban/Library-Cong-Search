
// function that gets called when user inputs their favortie character into the search bar

var displayCharName = document.getElementById('char-name')
var displayMovieTitles = document.getElementById('movies')
var displayShowTitles = document.getElementById('shows')
var displayCharImage = document.getElementById('char-image')
var displayStreamedMovies = document.getElementById('streamed-movies')
var displayStreamedShows = document.getElementById('streamed-shows')
var characterArray = ['cheshire cat', 'maleficent', 'lightning', 'Aladdin', 'abu', 'abigail', 'akela', 'alice', 'amelia', 'amos', 'anna', 'antonio', 'apollo', 'ariel', 'arthur', 'aurora', 'bagheera', 'balloo', 'bambi', 'bashful', 'beast', 'beaver', 'belle', 'ben', 'berlioz', 'bert', 'bolt', 'bruce', 'bruno', 'captain hook', 'chad', 'charles', 'charlotte', 'chernabog', 'chief', 'christopher robin', 'chuck','cinderella', 'claude frollo', 'clayton', 'cleo', 'coco', 'cody', 'cogsworth', 'cookie', 'copper', 'cruella de vil', 'daisy duck', 'dewey', 'dinah', 'doc', 'dodger', 'donald duck', 'dopey', 'duchess', 'duke', 'dumbo', 'eeyore', 'elliott', 'elsa', 'esmeralda', 'eudora', 'evie', 'fa zhou', 'felix', 'figaro', 'finnick', 'flit', 'flounder', 'flower', 'gaston', 'genie', 'george banks', 'geppetto', 'giselle', 'goofy', 'grumpy', 'hans', 'happy', 'hector', 'hercules', 'horace', 'iago', 'jack', 'james', 'jane', 'jane banks', 'jasmine', 'jasper', 'jim hawkins', 'jiminy cricket', 'jimmy', 'john smith', 'judy', 'kaa', 'kala', 'kanga', 'kessie', 'kristoff', 'kuzco', 'lady', 'lady kluck', 'li shang', 'louis', 'lucky', 'luisa', 'lumiere', 'mal', 'mary poppins', 'maurice', 'maui', 'max', 'meeko', 'megara', 'mickey mouse', 'michael banks', 'minnie mouse', 'moana', 'mowgli', 'mrs. potts', 'mufasa', 'mushu', 'nala', 'nana', 'naveen', 'nemo', 'nora', 'nora', 'oliver', 'oaken', 'olaf', 'pacha', 'pascal', 'patch', 'pegasus', 'peter pan', 'perdita', 'piglet', 'pluto', 'pocahontas', 'pongo', 'prince charming', 'prince eric', 'prudence', 'pua', 'pumbaa', 'quasimodo', 'rafiki', 'rajah', 'rapunzel', 'raya', 'rex', 'rolly', 'roo', 'sally', 'samba', 'sarafina', 'scar', 'scuttle', 'sebastian', 'shere khan', 'sid', 'simba', 'sleepy', 'slink', 'sneezy', 'snow white', 'stella', 'stitch', 'sven', 'thumper', 'tiana', 'tigger', 'timon', 'timothy q. mouse', 'tinker bell', 'triton', 'ursula', 'wendy', 'white rabbit', 'woody', 'yzma']

var inputClick = document.getElementById('search-bar')
inputClick = document.addEventListener("click", renderInput);


var inputEnter = document.getElementById("search-bar");
inputEnter.addEventListener("keypress", function(event) {

  if (event.key === "Enter") {
    event.preventDefault();
    renderInput()
  }

});


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
        var listenLink = document.getElementById(i);
        listenLink.addEventListener("click", renderPlatforms);

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


// http://www.omdbapi.com/?i=tt3896198&apikey=61416bd7


function renderPlatforms() {
   
    fetch('http://www.omdbapi.com/?t=The%20Mickey%20Mouse%20Club&apikey=61416bd7')
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}


function listShowLinks(event){
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
