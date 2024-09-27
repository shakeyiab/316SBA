//Cache at least one element using querySelector or querySelectorAll.
const headerp=document.querySelector("h1");
headerp.style.color="pink"
//Cache at least one element using selectElementById.
let tiphone =document.getElementById("secondsec")
document.getElementById("tiphone").style.color="navy";
//Use the parent-child-sibling relationship to navigate between elements at least once 
//(firstChild, lastChild, parentNode, nextElementSibling, etc.).
const parent= document.querySelector("#plansection");
parent.parentNode.style.color = "teal";
//Iterate over a collection of elements to accomplish some task  ,, to print out evolution of iphones 
let text=[];
for (let x = 3; x < 7; x++) {
   text += "iphone"  + x + ",  " 
}
document.getElementById("evoluntion").innerHTML = text;
//Use appendChild and/or prepend to add new elements to the DOM.
//Create at least one element using createElement.
function myFunction() { 
const paragraph = document.createElement("p");
const node = document.createTextNode("Please Wait");
para.appendChild(node);
document.getElementById("plansection").appendChild(paragraph);}

document.getElementById("text").style.color="red"
 //Modify the style and/or CSS classes of an 
 //element in response to user interactions using the style or classList properties.
 function secondfunction() {
    let checkBox = document.getElementById("iphonestat");
    let text = document.getElementById("text");
    if (checkBox.checked == true){
      text.style.display = "block";  
    } else {
       text.style.display = "none";
    document.getElementById("text").style.color="black"
    }
 
  }
  function thirdfunction() {
  
    let checkBox = document.getElementById("androidlover");
    let times = document.getElementById("times");
    if (checkBox.checked == true){
        times.style.display = "block";
        //Modify at least one attribute of an element in response to user interaction.
        //Create at least one element using createElement.
        //Use appendChild and/or prepend to add new elements to the DOM.
//Create at least one element using createElement.
        let x = document.createElement("IMG")
        x.setAttribute("src", "OIP.jfif");
        document.body.appendChild(x);
        document.getElementById("and").innerHTML ="Page is for iphone users only " + window.location.hostname;
    } else {
        times.style.display = "none";
    }
  }

 // Modify the HTML or text content of at least one element in
 // response to user interaction using innerHTML, innerText, or textContent.
 //Register at least two different event listeners and create the associated event handler functions.
 const action= document.getElementsById("button");
 button.addEventListener("onmouseover",funtionforbtn)
 function funtionforbtn() {
    document.getElementById("button").innerHTML = "Please Wait";
  }
  button2.addEventListener("",funtionforbtn2)
  function funtionforbtn2() {
    alert("Are You Sure You Want To Leave This Page")
  }
  function anotherfunction() {
    document.getElementsByClassName("card").required = true;
    document.getElementById("gbtype").innerHTML = "The checkbox must now be checked before submitting the form.";
  }
//Modify at least one attribute of an element in response to user interaction.
 

