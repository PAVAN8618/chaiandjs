//function 

function calculater(va1,val2,...num1){
    return num1

}
// console.log(calculater(1,2,3,4,5,6,6,8))

const user = {
    username:"pavan",
    price:46
}
function handleobj(anyobj){
    console.log(`user name is ${anyobj.username} and price ${anyobj.price}`)
}

handleobj({
    username:"pawan",
    price: 78

})

const myarray = [1,2,3,4,5,6,7,8];

function thirdValue(getArray){
    return getArray[2];
}
// console.log(thirdValue(myarray));


function outer({inner:o}){

    let username ="Pawan";

    function inner(){
        let name = "Pratush"
        console.log(`username ${o}`);
    }
    inner();
    //console.log(name);
}
outer(inner)
