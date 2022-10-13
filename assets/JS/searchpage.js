var themeParkUrl = "https://api.disneyapi.dev/character?name=Mickey%20Mouse"
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
//linked APIs up top