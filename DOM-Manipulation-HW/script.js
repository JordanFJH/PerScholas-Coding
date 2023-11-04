let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  //Changing main title to something simpler
  document.querySelector("#main-title").innerHTML = "This is DOM Toretto's homepage";

  // Part 2
  //Changing background color of body
  document.querySelector("body").style.backgroundColor = "Yellow";

  // Part 3
  document.querySelector("#favorite-things").lastElementChild.remove();

  // Part 4
  //Changing font size
  let specialTitles = document.querySelectorAll(".special-title");
  for (let title of specialTitles){
    title.style.fontSize = "2rem";
  }

  // Part 5
  // console.log(document.querySelector("#past-races").children[3])
  document.querySelector("#past-races").children[3].remove();

  // Part 6
  //Creating new city that Dom raced in
  let newRace = document.createElement("li");
  newRace.innerHTML = "The 313 (Detroit, fyi)";
  document.querySelector("#past-races").appendChild(newRace);

  // Part 7
  //Creting an extra blog post
  let newDiv = document.createElement("div");
  newDiv.classList.add("blog-post");
  newDiv.classList.add("purple");
  let newH2 = document.createElement("h1");
  newH2.textContent = "Detroit";
  newP = document.createElement("p");
  newP.textContent = "It's called the Motor City for a reason!";
  newDiv.appendChild(newH2);
  newDiv.appendChild(newP);
  document.querySelector(".main").appendChild(newDiv);

  // Part 8
  //Calling the random quote funciton
  document.querySelector("#quote-title").addEventListener("click",function(evt){
    randomQuote();
  })

  // Part 9
  //Toggling class for mousover
  let blogPosts = document.querySelectorAll(".blog-post");
  for (let post of blogPosts){
    post.addEventListener("mouseout", function(evt){
      post.classList.toggle("purple");
      post.classList.toggle("red");
    })
    post.addEventListener("mouseenter", function(evt){
      post.classList.toggle("red");
      post.classList.toggle("purple");
    })
  }
});