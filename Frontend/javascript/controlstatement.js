let size="S";
if(size=="XL"){
    console.log("Price is 250");
}
else if(size=="L"){
    console.log("Price is 200");
}
else if(size=="M"){
    console.log("Price is 150");
}
else{
    console.log("Price is 100");
}

//GOOD STRING//
let str="apple";
if((str[0]=="a")&&(str.length >3)){
    console.log("str is a good string");
}

//Predict the output//
let num=12;
if((num%3==0)&&(num+1==15)||(num-1==11)){
    console.log("safe");
}
else{
    console.log("unsafe");
}

//switch statements//
let color="Yellow";
switch(color){
    case "Red":
        console.log("Stop");
        break;
    case "Yellow":
        console.log("Get Ready");
        break;
    case "Green":
        console.log("Go");
        break;
}
//alert % prompts//
console.error("There is an eror");
console.warn("This is warning");

let Msg ="hello";
console.log(Msg.toUpperCase());

let cars=["maruti","xuv","bmw"];

console.log(cars.push("ferari"));