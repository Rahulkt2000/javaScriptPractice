myNums = [1,2,3,4,5,6,7,8,9,10]

// const myTotal = myNums.reduce(function(acc,currval){
//     //console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+ currval

// }, 0)

const myTotal = myNums.reduce( (acc,curr) => acc + curr, 0)

console.log(myTotal);


const shopingCart= [
    {
itemName: "py course",
price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
            },
            {
                itemName: " Data scrince  course",
                price: 12999
                    }
]

   const priceToPay =shopingCart.reduce( (acc, item) => acc + item.price ,0)

  console.log(priceToPay);

