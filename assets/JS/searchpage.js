var themeParkUrl = "https://queue-times.com/en-US/parks.json"
var themeParkUrl2 = "https://queue-times.com/en-US/parks/5/queue_times.json"


function getRideTimes(){
 
fetch (themeParkUrl, {
   "Access-Control-Allow-Origin": "https://queue-times.com/en-US/parks.json"
})
.then(function (response){
    return response
})
.then(function(data){
    console.log(data)
}
 

)}
