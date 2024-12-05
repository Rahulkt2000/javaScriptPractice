const coding =["js", "ruby" , "java", "python", "cpp"]

// const  values =  coding.forEach( (item) =>{
//     console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]


//  const newNums = myNums.filter( (num)=> num > 4 )
//  console.log(newNums);

// const newNums = myNums.filter( (num) => {
//      return num > 4
// })

// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    {
        title: 'Book one' , genre: 'fiction', publish: 1997, edition:2004
    },
    {
        title: 'Book    Two' , genre: 'Non-fiction', publish: 1999, edition:1992
    },
    {
        title: 'Book Three' , genre: 'History', publish: 1998, edition: 1999
    },
    {
        title: 'Book fOUR' , genre: 'Non-fiction', publish: 1981,edition:1989
    },
    {
        title: 'Book Five' , genre: 'science', publish: 1981,edition:2009
    },
    {
        title: 'Book Teen' , genre: 'fiction', publish: 1981, edition:1987
    },
    {
        title: 'Book Six' , genre: 'History', publish: 1981, edition : 1986
    },
    {
        title: 'Book Seven' , genre: 'Science', publish: 1981,edition:2011
    },
    {
        title: 'Book Eight' , genre: 'fiction', publish: 1981,edition: 1981
    }
];

 let  userBooks = books.filter( (bk) => bk.genre === 'History')

 userBooks = books.filter( (bk) => {
     return bk.publish >= 1995 && bk.genre === "History"


 })

 console.log(userBooks);