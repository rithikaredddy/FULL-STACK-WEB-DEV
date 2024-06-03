let names=[["Rithika","Sreeja","Varsha"],["sidhu","Nav","Tharun"]]
for(let i=0;i<names.length;i++){
    console.log(i,names[i],names[i].length);
    for(let j=0;j<names[i].length;j++){
        console.log(`j=$[j],${names[i][j]}`)
    }
}

let student=[["aman",95],["shraddha",94],["kapil",93]];
for (let i=0;i<student.length;i++){
    console.log(i,student[i],student[i].length);
    for(let j=0;j<student[i].length;j++){
        console.log(`j=$[j],${student[i][j]}`)
    }
}

let stu=[["aman",95],["shradha",94]];
for(let i=0;i<stu.length;i++){
    console.log(`info of the stu #${i+1}`);
    for(let j=0;j<stu[i].length;j++){
        console.log(student[i][j]);
    }
}

let stud=[["aman",95],["shradha",94]];
for(let i=0;i<stud.length;i++){
    for(let j=0;j<stud[i].length;j++){
        console.log(stud[i][j]);
    }
}


let fruits=["mango","apple","orange","litchi"];
for(fruits of fruits){
    console.log(fruits);
}
for(char of "rithiika"){
    console.log(char);
}

let car=[["bmw","audi"],["ferari","nano"]];
for(list of car){
    for(car of list){
        console.log(car);
    }
    
}