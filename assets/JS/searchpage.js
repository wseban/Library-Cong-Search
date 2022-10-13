function saveInput () {
    var input = document.getElementById('search-bar').value
    var inputSplit = input.split(" ");
    var charName = inputSplit.join("%20")
    console.log(charName)
    localStorage.setItem("recent-search", charName)




    var themeParkUrl = "https://api.disneyapi.dev/character?name="  + charName;
var themeParkUrl2 = "https://api.watchmode.com/v1/autocomplete-search/?apiKey=4geqQK1CQGBP4icGVsqsLn9aqaMb0cjhUXs79A9V&search_field=name&search_value=mickey%20mouse&search_type=1"


fetch (themeParkUrl, {
    
})
.then(function (response){
    return response.json()
})
.then(function(data){
    console.log(data)
}
)

}


//linked APIs up top