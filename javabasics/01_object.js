// singleton
//oblect.create

//object literals

const mySym = Symbol("key1")

const   JsUser = {
    name: "Hitesh",  
    "full name": "Rahul kumar",
    [mySym]: "mykey1",
    age: 18,
    location: "kolkata",
    email: "rahulkt291@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]

}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "rahukkt2000@gmail.com"
//Object.freeze(JsUser)
JsUser.email  = "rahul2000@gmail.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
   console.log(`Hello Js User , ${this["full name"]}`);
   //console.log(`Hello Js User , ${"JsUser"}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

