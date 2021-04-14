// JS for TP6

// generic AJAX function to load fromFile into object with ID whereTo
function loadFileInto(fromIdentifier, fromList) {

  // creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();

  //define the fromFile value based on the PHP URL
  fromFile = "recipes.php?id=" + fromIdentifier + "&list=" + fromList;

  // defines the GET/POST method, source, and async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // prepares code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {

    if ((this.readyState == 4) && (this.status == 200)) {
    
      console.log("AJAX JSON response: " + this.responseText);
      
      //convert JSON from PHP to Java
      responseArray = JSON.parse(this.responseText);
      responseHTML = "";
      if(this.responseText != "0"){
      for (x=0; x < responseArray.length; x++) {
        responseHTML += "<li>" + responseArray[x] + "</li>";
        }
      }
      
      //figure out target for q-selector
      whereTo = "#" + fromList + " ul";
      if (fromList == "directions") whereTo = "#" + fromList + " ol";
      document.querySelector(whereTo).innerHTML = responseHTML;
      
    } else if ((this.readyState == 4) && (this.status != 200)) {
      console.log("Error: " + this.responseText);

    }

  } // end ajax.onreadystatechange

  // now that everything is set, initiate request
  ajax.send();

}
//object constructor

function Recipe(recipeName, contributorName, imageURL, recipeIdentifier) {
  this.name = recipeName;
  this.contributor = contributorName;
  this.imgsrc = imageURL;
  this.identifier = recipeIdentifier;


  this.displayRecipe = function() {
    document.querySelector("#title").innerHTML = this.name;
    document.querySelector("#contributor").innerHTML = "Contributed by: " + this.contributor;
    document.querySelector("#header").style.backgroundImage = "url(" + this.imgsrc + ")";


    loadFileInto(this.identifier, "ingredients");
    loadFileInto(this.identifier, "equipment");
    loadFileInto(this.identifier, "directions");


  }
}

Lasagna = new Recipe("World's Best Lasagna",
  "Madison",
  "https://cdn.pixabay.com/photo/2017/02/15/15/17/meal-2069021_1280.jpg",
  "Lasagna"

);

Chicken = new Recipe("Lemon Chicken Piccata",
  "Sophie",
  "https://sdutton355.com/tp4/chicken.jpg",
  "LemonChicken"

);

Pretzel = new Recipe("Soft Pretzels",
  "Kristine",
  "https://kzorn355.com/tp4/images/pretzel.jpg",
  "SoftPretzels"

);


//changes font size
document.querySelector("#title").style.fontSize = "100px";


//title color change via click  
document.querySelector("#title");
title.onclick = function() {
  title.classList.toggle("clicked");
}

// new HTML elements
x = document.getElementById("enjoy");
x.innerHTML = "And that's how you make this recipe! Enjoy!";
x.style.fontSize = '30px';
x.style.fontFamily = 'Sigmar One';
x.style.textAlign = 'center';
x.style.color = 'saddlebrown';