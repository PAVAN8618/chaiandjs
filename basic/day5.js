//Array basic

let arr = Array("pawan","2",3,4,5,6,7,8,9,10)
//console.log(arr);

arr.forEach(element => {
    //console.log(element +arr[1]);
});
//console.log(arr.concat(...arr,5))
let ar2 =arr.concat(11111,1,5)
// console.log(ar2);

// console.log(arr.push(4))//
// console.log(arr.pop(4))//
let pop = arr.pop()
// console.log(pop)
arr.push(99)

//console.log(arr)

console.log(arr.filter((i)=> i.length<5))

console.log(arr.shift());