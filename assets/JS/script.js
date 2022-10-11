fetch ("https://queue-times.com/en-US/parks.json")
.then (function (response){
    return response.json()
    console.log(response)
})
.then(function(data){
    console.log(data)
})