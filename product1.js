 
let cartproducts=JSON.parse(localStorage.getItem("cart"))||[];
// Fetching api from the JSON Server :-
let bag=[];
// let url="https://fakestoreapi.com/products";
let url="https://636f9027f2ed5cb047e01947.mockapi.io/Project_2_Products";
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        bag=data;
        console.log(data);
        displayCard(data);
    });

    // Sorting functionaly
    function handleSort(){
      let selected=document.querySelector("select").value;
      if(selected=="LTH"){
          bag.sort((a,b)=>a.price-b.price);
      }
         if(selected=="HTL"){
        bag.sort((a,b)=>b.price-a.price);
      }
      console.log(bag);
      displayCard(bag);
    }

    // Filter Functionality
    function filterByCategory() {
      let selected = document.querySelector("#filtered").value;
    console.log(selected)
    if(selected=="ALL"){
      displayCard(bag);
    
    }else{
      let filteredData = bag.filter(function (elem) {
        return elem.category == selected;
    });
    console.log(filteredData)
    displayCard(filteredData);
    }  
  }
 
  // Search functionality 
  function search(){
      let q=document.querySelector("#search").value;
      console.log(q);
      let newData=bag.filter(function (elem){
        return elem.title.toLowerCase().includes(q.toLowerCase());
      });
      console.log(newData);
      displayCard(newData);
    }
// appending on DOM
function displayCard(data){
  document.querySelector(".container").innerHTML="";    
  data.forEach(elem => {
    let div=document.createElement("div");

    let imageProduct=document.createElement("img");
    imageProduct.setAttribute("src",elem.image)
    
    let Category=document.createElement("h3");
   Category.innerText= elem.category;

    let title=document.createElement("p");
    title.innerText=elem.title.substring(0,20);

    let Price=document.createElement("h4");
    Price.innerText="Rs."+elem.price;
  
    let btn=document.createElement("button");
    btn.className = "show-modal"; // className added 
    btn.innerText=`Add to cart `
 
    
    btn.addEventListener("click", function () {
      cartproducts.push(elem);
      localStorage.setItem("cart",JSON.stringify(cartproducts));
      // alert("Product added to cart");
      showfeed()
    });

    div.append(imageProduct,Category,title,Price,btn);

    document.querySelector(".container").append(div);
      });
    }

    
// feedback functionality - day-3

const section = document.querySelector("section"),
showBtn = document.querySelector(".show-modal"),
overlay = document.querySelector(".overlay"),
closeBtn = document.querySelector(".close-btn");
function addtoBag(){

}
console.log(showBtn)
showBtn.addEventListener("click", showfeed );

function showfeed(){
section.classList.add("active")
}

overlay.addEventListener("click", addedtoBag);
function addedtoBag(){
section.classList.remove("active");
// window.location.href="cart.html";
}

closeBtn.addEventListener("click", cancel);

function cancel(){
  section.classList.remove("active");
  // window.location.href="cart.html"; 
}


// drop down functionalities
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownBrand() {
  document.getElementById("Brand").classList.toggle("show");
}
function dropdownGender() {
  document.getElementById("Gender").classList.toggle("show");
}


// sticky navbar Properties
window.onscroll = function() {myFunction()};

var navbar = document.querySelector(".top-nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
 