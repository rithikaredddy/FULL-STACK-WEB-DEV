var arr = [
    {dp:"sreeja.jpeg",story:"msdhoni.jpeg"},
    {dp:"nav.jpeg",story:"bhrami.jpeg"},
    {dp:"sidhu.jpeg",story:"srh.jpeg"},
    {dp:"sreeja.jpeg",story:"vk.jpeg"},
    {dp:"varsha.jpeg",story:"love.jpeg"}
]
var clutter = ""
arr.forEach(function(elem,idx){
    clutter +=`<div id="story">
    <img src="${elem.dp}" alt = ""
</div>`
})
document.querySelector("#storyline").innerHTML = clutter
