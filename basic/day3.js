//console.log("pawan");

var arr = [1,2,3,4,5]

var filteredArray = arr.filter((iterator)=> iterator>5)
//console.log(arr.filter((iterator)=> iterator>5))//[ 6, 7, 8, 9 ]
var mapArray = arr.map((i)=> { return i*2})
//console.log(mapArray);
/*[
    2,  4,  6,  8, 10,
   10, 12, 14, 16, 18
 ]*/

var newArray = arr.map((item)=> item*5).filter((item)=>item<50).map((i)=>i*6)
//console.log(newArray);
/*[
    30,  60,  90, 120,
   150, 150, 180, 210,
   240, 270
 ]*/


 const reducerArray = arr.reduce(((accumulator, index) => accumulator+index),0)
 //console.log(reducerArray)

let data = [
	{
		color: "red",
		value: "24"
	},
	{
		color: "green",
		value: "23"
	},
	{
		color: "blue",
		value: "22"
	},
	{
		color: "cyan",
		value: "21"
	},
	
]
 
const totalValue = data.reduce(((value,index)=>value[index] + index),0)
//console.log(totalValue);
// let p = null ;
// console.log(p+2)

let arr1 = [0,0,0,2,4,6,8,5,6,8,9];

// for (let i = 0; i < arr1.length; i++) {
// 	const element = arr1[i];
// 	if(element===5){continue;}
// 	console.log(element)
	
// }

for (const i in arr1) {
	console.log(i);
	//i will return iteration index
}
for (const i of arr1) {
	console.log(i);
	// of will return values
}

