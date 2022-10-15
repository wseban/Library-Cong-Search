var characterArray = ["Snow White", "Cheshire Cat", "Jiminiy Cricket", "James", "Claude Frollo", "Maleficent", "Lightning", "Aladdin", "Abu", "Abigail", "Akela", "Alice", "Amelia", "Amos", "Anna", "Antonio", "Apollo", "Ariel", "Arthur", "Aurora", "Bagheera", "Balloo", "Bambi", "Bashful", "Beast", "Beaver", "Belle", "Ben", "Berlioz", "Bert", "Bolt", "Bruce", "Bruno", "Captain Hook", "Chad", "Charles", "Charlotte", "Chernabog", "Chief", "Christopher Robin", "Chuck", "Cinderella", "Clayton", "Cleo", "Coco", "Cody", "Cogsowrth", "Cookie", "Copper", "Cruella De Vil", "Daisy Duck", "Dewey", "Dinah", "Doc", "Dodger", "Donald Duck", "Dopey", "Duchess", "Duke", "Dumbo", "Eeyore", "Elliot", "Elsa", "Esmeralda", "Eudora", "Evie", "fa Zhou", "Felix", "Figaro", "Finnick", "Flit", "Flounder", "Flower", "Flower", "Gaston", "Genie", "George Banks", "Geppetto", "Giselle", "Goofy", "Grumpy", "Hans", "Happy", "Hector", "Hercules", "Horace", "Iago", "Jack", "Jane", "Jane Banks", "Jasmine", "Jasper", "Jim Hawkins", "Jimmy", "John Smith", "Judy", "Kaa", "Kala", "Kanga", "Kessie", "Kristoff", "Kuzco", "Lady", "Lady Kluck", "Tramp", "Li Shang", "Louis", "Lucky", "Luisa", "Lumiere", "Mal", "Mary Poppins", "Maurice", "Maui", "Max", "Meeko", "Megara", "Mickey Mouse", "Michael Banks", "Minnie Mouse", "Moana", "Mowgli", "Mrs. Potts", "Mufasa", "Mushu", "Nala", "Nana", "Naveen", "Nemo", "Nora", "Oliver", "Oaken", "Olaf", "Pacha", "Pascal", "Patch", "Pegasus", "Peter Pan", "Perdita", "Piglet", "Pluto", "Pocahontas", "Pongo", "Prince Charming", "Prince Eric", "Prudence", "Pua", "Pumbaa", "Quasimodo", "Rafiki", "Rajah", "Rapunzel", "Raya", "Rex", "Rolly", "Roo", "Sally", "Samba", "Sarafina", "Scar", "Scuttle", "Sebastian", "Shere Khan", "Sid", "Simba", "Sleepy", "Slink", "Sneezy", "Stella", "Stitch", "Sven", "Thumper", "Tiana", "Tigger", "Timon", "Timothy Q. Mouse", "Tinker Bell", "Triton", "Ursula", "Wendy", "White Rabbit", "Woody", "Yzma"]


//AUTO FORM COMPLETE FUNCTIONALITY ----

function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) { 
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
              b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });

  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) {
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });

  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}

document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}
autocomplete(document.getElementById("search-bar"), characterArray);































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