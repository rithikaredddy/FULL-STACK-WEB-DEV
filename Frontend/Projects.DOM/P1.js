var istatus = document.querySelector("h5")
var btn = document.querySelector(".add")
var check = 0
btn.addEventListener("click",function(){
    if(check == 0){
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        btn.innerHTML = "Removefriend"
        btn.style.color = "black"
        btn.style.backgroundColor = "grey"
        check = 1
    }
    else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "darkred"
        btn.innerHTML = "Addfreind"
        btn.style.backgroundColor = "cadetblue"
        check = 0
    }
    
})
