//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false


//console.log(tinderUser);


const regularUser = {
    email: "rahulkt291@gmail.com",
    fullname: {
        userfullname: {
            firstname: " rahul",
            lastname: "kumar"
        }
    }
}

//console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b" }
const obj2 = {3: "a", 4: "b" }
const obj4 = {5: "a", 5: "b"}

//const obj3 = {...obj1, ...obj2, ...obj4}
//const obj3 = object.assign({}, obj1, obj2, obj4)
//console.log(obj3);

const users = [
    {
        id:1,
        email: "rahulkt291@gmail.com"
    },
    {
     id:1,
        email: "rahulkt291@gmail.com"
    },
    {
         id:1,
        email: "rahulkt291@gmail.com"
    }

]

users[1].email

console.log(tinderUser);

console.log(object.keys(tinderUser));
console.log(object.values(tinderUser));
console.log(object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
