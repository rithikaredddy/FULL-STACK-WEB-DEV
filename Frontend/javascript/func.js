function rolldice(){
    let rand=(Math.floor(Math.random()*6)+1);
    console.log(rand);
}
rolldice();
rolldice();
rolldice();


function printname(name){
    console.log(name);
}
printname("rithika");

function printInfo(name,age){
    console.log(`${name}'s age is ${age}.`);
}
printInfo("Rithika",18);

function calcAvg(a,b,c){
    let avg = (a+b+c)/3;
    console.log(avg);
}
calcAvg(20,30,40);

/*function printTable(n){
    for(let i=n;i<=n*10;i=i+n);
    console.log(i);
}
printTable(2);*/

function getSum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}
console.log(getSum(7));

let str=["hi","hello","bye","!"];
function concstr(str){
    let result="";
    for(let i=0;i<=str.length;i++){
        result+=str[i];
    }
    return(result);
}
console.log(str);

function calcSum(a,b){
    let sum=a+b;
    console.log(sum);
    return(sum);
}
calcSum(5,6);

let age=25;
if(age>=18){
    let str="adult";
    
}
console.log(str);

function outerfunc(){
    let x=2;
    let y=3;
    
    function innerfunc(){
        
        let a=5;
        console.log(x);
        console.log(a);
    }
   
    innerfunc();
}

outerfunc();

let greet="hello";
function changegreet(){
    let greet="namaste";
    console.log(greet);
    function innergreet(){
        console.log(greet);
    }
    innergreet();
}
console.log(greet);
changegreet();