const coding = ["js", "ruby", "java", "python" , "cpp"]

// coding.forEach(   function(val){   // use function
//     console.log(val);
// })

// coding.forEach( (item) =>{     // use arrow function

//     console.log(item);

// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


coding .forEach( (item, index, arr)=>{

    console.log(item,index,arr);


})

const myCoding = [{
    languageName: "javascript",
    languageFileName: "js"
},
{
    languageName: "python",
    languageFileName: "js"
},
{
    languageName: "c++",
    languageFileName: "js"
},
{
    languageName: "java",
    languageFileName: "js"
},
{
    languageName: "ruby",
    languageFileName: "js"
}
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})