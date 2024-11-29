const user = {
    username: "Rahul",
    price: 999,

    welcomeMessage: function() {
        console.log( `${this.username} , welcome to website`); // current contest ko call((refer krta hai)) krne ke liye {this } ka use hota hai


    }


}

//  user.welcomeMessage()
//  user.username = "sam"
//  user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "Rahul"

//     console.log(this.us);
// }
// chai()

const chai = () => {
    let username = "Rahul"
    console.log(this);
}
//chai()


// const addTwo = (num1 , num2)=> {
//     return num1 + num2
// }   

// const addTwo = (num1, num2) => num1 + num2      // use arrow method  and curly bresses use hua to return keyword likhna hi padega

const addTwo = (num1, num2) => ({username: "Rahul"})

console.log(addTwo(3,4));

const myArray = [2,3,5,7,8,5]

//myArray.forEach()