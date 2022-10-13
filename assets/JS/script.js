fetch ("https://api.tomtom.com/traffic/services/5/incidentDetails?fields=%7Bincidents%7Btype%2Cgeometry%7Btype%2Ccoordinates%7D%2Cproperties%7BiconCategory%7D%7D%7D&language=en-US&categoryFilter=0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C10%2C11%2C14&timeValidityFilter=present&key=IGkKkr9lTGqbUJAvV4QPUVTyT1ACs4XG")
.then(function (response){
    return response.json()
    console.log(response)
})
.then(function(data){
    console.log(data)
})


fetch ("https://queue-times.com/en-US/parks/2/queue_times.json")
.then(function (response){
    console.log(response)
})
.then(function(data){
    console.log(data)
})