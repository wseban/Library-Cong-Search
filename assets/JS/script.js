// let center = [4, 44.4]
// const map = tt.map({
//     key: 'IGkKkr9lTGqbUJAvV4QPUVTyT1ACs4XG',
//     container: 'map',
//     center: center,
//     zoom: 10
// })
// map.on('load', () =>  {
//     new tt.Marker().setLngLat(center).addTo(map)
// })      

//Slideshow Functionality 
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}