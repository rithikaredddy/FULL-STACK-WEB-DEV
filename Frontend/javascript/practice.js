/*let array=[0,10,20,30];
const key=10;
function maxNumbers(array,key){
    let sum=0;
    let ans="";
    for(let i=0;i<array.length;i++){
        if(key<array[i]){
            sum+=array[i];
            ans+=array[i]+" ";
            console.log(array[i]);
            
        }
    }
    console.log(sum);
    console.log(ans);
};
maxNumbers(array,key);*/

/*let array=[0,10,20,30];
const key=10;
function getEven(array,key){
    for(let i=0;i<array.length;i++){
        if(key<array[i]&&array[i]%2==0){
            
            return(array[i]);
        }
    }
};
console.log(getEven(array,key));*/

/*function table(){
    for(let i=1;i<=20;i++){
        for(let j=1;j<=10;j++){
            console.log(`${i*j}`);
        }
    }
};
table();*/
/*function table(start,end){
    for(let i=start+1;i<end;i++){
        for(let j=1;j<=10;j++){
            console.log(`${i}*${j}=${i*j}`);
            
        }
        
    }
};
table(1,5);*/
function oddTable(start,end){
    for(let i=start;i<=end;i++){
        if(i%2!=0){
            for(let j=1;j<=10;j++){
                console.log(`${i}*${j}=${i*j}`);
            }
        }
    }
};
oddTable(1,20);