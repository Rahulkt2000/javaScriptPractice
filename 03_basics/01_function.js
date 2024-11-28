function sayMyName(){
    console.log("H");
    console.log("i")
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H")

}

//sayMyName()

//function addTwoNumbers(number1,number2){
    //console.log(number1 + number2);
//}
function addTwoNumbers(number1 , number2){

    // let result = number1 + number2
    // return result
    return number1 + number2

}

 const result = addTwoNumbers(7,5)
 //console.log("Result:", result);   

 function loginUserMessage(username){
    return `${username} just logged in`
 }
  //console.log(loginUserMessage("Rahul"));

  function calculatecartprice(val1,val2,...num1){ // rest operator 
    return num1
  }

  //console.log(calculatecartprice(200,300,400));

  const user = {
    username: "Rahul",
    price: 199
  }

  function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

  }

  //handleObject(user)

  handleObject ({
    username: "sam",
    price: 499
  })


  const newArray = [200,300,400,500,800]

  function returnSecondValue(getArray){
    return getArray[2]
  }
  //console.log(returnSecondValue(newArray))
  console.log(returnSecondValue([200,400,500,800,700]));