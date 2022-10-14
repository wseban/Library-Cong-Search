# Mickey n' Friends Finder

## Collaborators
- William Seban
- Anthony Manzione
- Senay Gebrat
- Pengteda Cheng

## Site Picture

Deployed Link
https://wseban.github.io/Mickey-n-Friends-Finder/

## Usage
Upon entrance, user is presented with a logo, the website title and a slideshow of Disney cartoons.  Scrolling down, the user is then prompted to input their favorite Disney cartoon character.  When the user hits 'search' they are presented with a list of all shows and movies that their Disney friend is present in.  The list, presented to the user, consists of links; when the user clicks on the desired movie or show they are presented with the appropriate streaming service that hosts that movie.

![Site](./assets/images/Screen%20Shot%202022-10-13%20at%209.29.39%20PM.png)

## Technologies Used
- Watch Mode server API - An API that provides information on which streaming service are hosting different movies and shows.
- Disney server API - An API that presents all disney character and where they appear (specifically used for all movies and shows designated character appears in)
- Bulma.io - a third party API with pre designed elements advancing the range of style on a webpage.
- Anime.js - a third party API that allows formatting and manipulation of elements.
- JavaScript - Allows developer to make static webpages, dynamic and interactive.  For this exercise it was used to link the webpage to open weather server API, present the data received, dynamically create and append elements to present the data needed and engage with the specific user wants.  
- HTML - Gives a basic static structure to the webpage.
- CSS - Allows the developer to make the webpage a little more appealing.
- Git - Git is what I used to work on my personal computer and pushing my work to GitHub.
- GitHub - A cloud based repository that holds my saved code reserved for resetting my personal computer deployment.

## Description

The purpose of this project was to work as a cohesive unit to produce a fully functional and practical web application.  The web application was to interact with the user and provide desired output from server side APIs.

## Installation

NA

## Lessons Learned
The most effective lessons learned for us were...
1. Ensure to check response from our API as one of the first items.  We had to make a small pivot of direction for the project due to a faulty API.
2. Communication with pulls and pushes to our repository and working around conflicts.

## Code Snippets
```javascript
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

```
## Credits

NA

## License
Please refer to the LICENSE in the Repo.

