# Mickey n' Friends Finder

## Collaborators
- William Seban
    - [Github](https://github.com/wseban)
- Anthony Manzione
    - [Github](https://github.com/AJManzione)
- Senay Gebrat
    - [Github](https://github.com/senaygebrat)
- Pengteda Cheng
    - [Github](https://github.com/teedaa)

## Site Picture
![Site](./assets/images/functionality.gif)
[Deployed Link](https://wseban.github.io/Mickey-n-Friends-Finder/)

## Usage
Upon entrance, user is presented with a logo, the website title and a slideshow of Disney cartoons.  Scrolling down, the user is then prompted to input their favorite Disney cartoon character.  When the user hits 'search' they are presented with a list of all shows and movies that their Disney friend is present in. Clicking on a title will display IMBd information for said title.



## Technologies Used
- OMDb API - API that presents IMDd information for movie and series titles.
- Disney server API - An API that presents all disney character and where they appear (specifically used for all movies and shows designated character appears in)
- Anime.js - a third party API that allows formatting and manipulation of elements.
- ![Bulma](https://img.shields.io/badge/bulma-00D0B1?style=for-the-badge&logo=bulma&logoColor=white) 
    - A third party API with pre designed elements advancing the range of style on a webpage.

- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
     - Allows developer to make static webpages, dynamic and interactive.  For this exercise it was used to link the webpage to open weather server API, present the data received, dynamically create and append elements to present the data needed and engage with the specific user wants.  
- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
    - Gives a basic static structure to the webpage.
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
    - Allows the developer to make the webpage a little more appealing.
- ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
     - Git is what we used to work on our personal computers and pushing completed work to GitHub.
- ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
     - A cloud based repository that holds saved code reserved for resetting  personal computer deployment.
- ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
     - Code editing software

## Description

The purpose of this project was to work as a cohesive unit to produce a fully functional and practical web application.  The web application was to interact with the user and provide desired output from server side APIs.


## Lessons Learned
The most effective lessons learned for us were...
1. Ensure to check response from our API as one of the first items.  We had to make a small pivot of direction for the project due to a faulty API.
2. Communication with pulls and pushes to our repository and working around conflicts.
3. Do not be afraid to ask teammates for help when stuck on code. Teamwork is crucial to making this application work properly.

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

N/A

## License
Please refer to the LICENSE in the Repo.

