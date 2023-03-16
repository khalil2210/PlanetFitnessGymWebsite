//btn up
let scrollToTopBTN=document.getElementById("btn-up")
scrollToTopBTN.style.display='none'
scrollToTopBTN.addEventListener("click",()=>{
window.scrollTo({
    top:0 , behavior:"smooth"
})
});

window.addEventListener("scroll",()=>{
    let scroll= this.pageYOffset;
   if(scroll >400){
    scrollToTopBTN.style.display=''
   }
   else{
    scrollToTopBTN.style.display='none'
   }
})

//get the height from the top  of the sections
let aboutSection ;
let courseSection ;
let contactSection ;

////navbar
let about=document.getElementById("about").addEventListener("click",()=>{
    //get the height of the section 
aboutSection=document.getElementById("About-section").offsetTop; 
 window.scrollTo({
    top:aboutSection -70 , behavior:"smooth"
})
})

let course=document.getElementById("course").addEventListener("click",()=>{
    //get the height of the section
    courseSection=document.getElementById("courses-section").offsetTop;
    window.scrollTo({
        top:courseSection -70, behavior:"smooth"
    })
})

let contact=document.getElementById("contact").addEventListener("click",()=>{
    //get the height of the section
    contactSection=document.getElementById("contact-section").offsetTop;
    window.scrollTo({
        top:contactSection , behavior:"smooth"
    })
})


///hide show navbar button
let click =0;
let navBarHideButton=document.getElementById("nav-bar-small-button").addEventListener("click",hideShow)
let navbar=document.getElementById("nav-bar");

function hideShow(){
    if(click%2==0){
        navbar.classList.remove("hide");
        navbar.classList.add("show");
    }
    else{
        navbar.classList.remove("show");
        navbar.classList.add("hide");
    }
    click++
}


let mediaQuery = window.matchMedia('(min-width: 601px)');

function handleMediaQueryChange(event) {
  if (event.matches) {
    navbar.classList.remove("hide");
    navbar.classList.remove("show");
  } else {
    // Screen width is less than 768 pixels
  }
}
mediaQuery.addListener(handleMediaQueryChange);



//BMI calculator

function calculateBMI(){
    let height=document.getElementById("height").value ;
    let weight=document.getElementById("weight").value ;
    console.log(weight)
    if((weight=="")||(height=="")){
        alert("Please provide your height and weight");
    }
    else if((height>230)||(height<=0)||(weight>300)||(weight<=0)){
        alert("Please provide valid info");
    }

    else{
    bmi =weight/((height/100)**2);
    alert("Your BMI is "+ bmi.toFixed(2))
    }}

let bmiButton=document.getElementById("bmi-button");
console.log(bmiButton)
bmiButton.addEventListener("click",calculateBMI);







