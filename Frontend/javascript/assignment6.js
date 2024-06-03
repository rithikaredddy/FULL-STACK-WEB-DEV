/*let arr=[99,2,3,4,5,6];
let num=5;
function getLarger(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
            break;
        }
    }

}
getLarger(arr,num);*/

/*let arr=[1,2,3,4,5,6];
let num=5;
let getLarger=(arr,num)=> {
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
            
        }
    }
}
getLarger(arr,num);*/

/*let str="abcdabcdefgggh";
function uniqStr(str){
    let ans="";
    for(let i=0;i<str.length;i++){
        let currchar=str[i];
        if(ans.indexOf(currchar)==-1){
            ans+=currchar;
            
        }
        
    }
    console.log(ans);
    return ans;
}
uniqStr(str);

let country=["Australia","Germany","United States Of America"];
function larCountry(country){
    for(let i=0;i<country.length;i++){
        let ans=0;
        let x=country[i].length;
        if(x>country[i].length){
            ans+=country[i].length;
        }
    }
    console.log(country[i]);

}
larCountry(country);*/

let start=100;
let end=2000;
function getRandom(start,end){
    let diff = end-start;
    console.log(diff)
    return Math.floor(Math.random()*diff)+start;

}
getRandom(start,end);