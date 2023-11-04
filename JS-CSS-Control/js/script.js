//array for the menu links
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

let showingSubMenu = false;
let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>SEI Rocks!</h1>"

mainEl.classList.add("flex-ctr");

let topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

//creating a elements for top menu
for (let link of menuLinks){
    let createdLink = document.createElement("a");
    createdLink.setAttribute("href", link.href);
    createdLink.innerHTML = link.text;
    if (link.subLinks) {createdLink.subLinks = link.subLinks;}
    topMenuEl.appendChild(createdLink);
}

//creating sub menu
let subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");

subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";
// let topMenuLinks = document.querySelectorAll("#top-menu a")
let topMenuLinks = topMenuEl.querySelectorAll("a");
console.dir(topMenuLinks);

topMenuEl.addEventListener("click", function(evt){
  let theOne = evt.target;
  // let objectRef = menuLinks.find("")
  evt.preventDefault();
  console.dir(theOne);
  if (theOne.nodeName !== "A") return;
  console.log(evt.target.innerHTML);
  //in case the user selects about
  if (theOne.innerHTML === "about"){
    mainEl.innerHTML = `<h1>${theOne.innerHTML}</h1>`;
    return;
  }
  if (theOne.className === "active"){
    theOne.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }
  for (let link of topMenuLinks){
    link.classList.remove("active");
  }
  theOne.classList.add("active");
  if (theOne.sublinks){
    showingSubMenu = true;
    console.log("has sublinks")
  }else {showingSubMenu = false}
  if (showingSubMenu = true){
    console.log(theOne.subLinks);
    buildSubMenu(theOne.subLinks);
    subMenuEl.style.top = "100%";
  }
  function buildSubMenu(array) {
    subMenuEl.innerHTML = "";
    for (let link of array){
      let createdLink = document.createElement("a");
      createdLink.href = link.href;
      createdLink.innerHTML = link.text;
      subMenuEl.appendChild(createdLink);
    }
  }
})
subMenuEl.addEventListener("click", function(evt){
  evt.preventDefault();
  let theOne = evt.target;
  if (theOne.nodeName !== "A") return;
  console.log (theOne.innerHTML);
  showingSubMenu = false;
  subMenuEl.style.top = "0";
  for (let link of topMenuLinks){
    link.classList.remove("active");
  }
  mainEl.innerHTML = `<h1>${theOne.innerHTML}</h1>`;
})