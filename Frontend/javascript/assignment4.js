let arr = [1,2,3,4,5];
let key = 3;
let sum=0;
for (let i=0; i<arr.length; i++) {
   if (arr[i] == key) {
      
      
      sum += key+arr[i-1];
      break;
   }
}
console.log(sum);

/*let arr=[1,2,3,4,5,6,2,3,];
let num=2;
for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log(arr);

let n=5;
let factorial=1;
for(let i=1;i<=n;i++){
    factorial*=i;
}
console.log(`factorial of ${n} is ${factorial}`);

let array=[1,2,3,4,9];
largest=0;
for(let i=0;i<=array.length;i++){
    if(largest<array[i]){
        largets=array[i];
    }
}
/*console.log(largest);*/

/*let number=[1,2,3,4,5];
let sum=0;
for(let i=0;i<number.length;i++){
    sum+=number[i];
}
console.log(sum);*/

/*let num=[1,2,3,5,7,8,9,17,6,4];
let key=7;
for( let i=0;i<num.length;i++){
    if(num[i]==key){
        console.log("key is present");
        console.log(i);
    }
    else{
        console.log("key is not present");
    }

}*/
