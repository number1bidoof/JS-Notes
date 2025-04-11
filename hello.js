// Object literal syntax
/*
let user {
    key: value
    proeprty-name: value} 
*/
let user = {
    name:"Ayah",
    age: 16,
    "favorite food": "pasta",
}
console.log(user)
// Object.key = value
user.isStudent = true;
console.log(user)
// Remove properties
delete user.age;
console.log(user)
user["likes birds"] = true;
console.log(user)
// best practice is to use [] for keys that have whitespace
let newUser = {}
// set new key 
newUser["likes roblox"] = true
// gets
console.log(newUser["likes roblox"])
delete newUser["likes roblox"]
console.log(newUser)
/*let fruit = prompt("whats your favorite fruit")
let bag = {
    [fruit]: 5,
} 
console.log(bag.fruit) */
function makeUser(x,y){
    return {
        x,
        y,
    }
}
let user1 = makeUser("Ayah", "Computer Programming")
console.log(user1.y)
console.log("x" in user1)
console.log("gamer" in user)
// Check for data
let newStudent = {
    age: 35
}
let key = "age"
console.log(key in newStudent)

// Syntax
for (let i in newStudent) {
    console.log(i)
}
for (let key in user) {
    console.log(key)
    console.log(user[key]) 
}