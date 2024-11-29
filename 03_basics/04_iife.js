// Immediately invoked function Expression (IIFE)

(function chai(){
    //named IIFE 
  console.log(`DB CONNECTED`)  
})();
//chai() /// jo function immediately exicute ho jaye and globan pollution me kae baar problem hota hai to us problem ko hatane ke liye iife ka use krte hai

(  (name)=> {
    console.log(`DB CONNECTED TWO ${name}`)
})('rahul')