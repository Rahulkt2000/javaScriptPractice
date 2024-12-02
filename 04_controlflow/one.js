 // if 
 
//  if (2==2){

 //}


//  const temperature = 41

//  if(temperature === 40){ 
//     console.log("less than 50");
//  }

//  else{
//     console.log("temperature is greater than 50");
//  }

//  console.log("exicuted");
// <,>,>=,<=, == , != , ===, !==


//  const score = 200

//  if(score > 100) {
//    // let power = "fly"
//    var power = "fly"
//    console.log(`user power: ${power}`);

//  }

// console.log(`user power: ${power}`);


const balance = 1000

//if(balance > 500) console.log("test") , console.log("test2");

// if(balance < 500){
//    console.log("less than 500")
// }
// else if (balance < 750){
//    console.log("less than 750")
// }
// else if(balance < 900){
   
//       console.log("less than 900")
//    }
//    else{
//       console.log("less than 1200")
//    }


const userLoggedIn  = true
const debitcard = true 
const loggedInFromGoogle  = false
const loggedInFromEmail = true



if(userLoggedIn && debitcard && 2==2){   // all  values are true
   console.log("Allow to buy course");
}
else{
   console.log("Do not allo the buy course");
}

if(loggedInFromGoogle || loggedInFromEmail ){ // one value is true then apply the rule
   console.log("user logged in");
}else{
   console.log("dont user logged in");
}
