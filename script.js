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







