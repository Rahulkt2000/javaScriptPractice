//let for of

//["" , "" ""]
//[{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    
    //console.log(num);
}


const greetings = "Hello world"

for (const greet of greetings) {

    //console.log(`Each char is ${greet}`);
    
}

//Mpas 

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United state of America")
map.set('Fr' , "France")
map.set('IN' , "India")



//console.log(map);

for(const[key,value] of map){
    console.log(key, ':-', value);
}






