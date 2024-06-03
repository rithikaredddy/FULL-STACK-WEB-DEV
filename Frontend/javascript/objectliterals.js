let post={
    username: "@rithu05",
    content: "this is my #first post",
    likes: 150,
    reposts: 5,
    tags:["@nav","@sidh","@sreeja"],
};
console.log(post);
console.log(post["content"]);

/*let dice = math.floor(math.random()*6)+1;
console.log(dice);*/

let car = {
    name:"maruthi",
    model:"maruthi suzkhi",
    color:"white",
}
console.log(car["name"]);

let person = {
    name: "rithika",
    age: 18,
    city: "newyork",
}
console.log(person["city"]);
person.city="newyork";
person.country="united states";
console.log(person);