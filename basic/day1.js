//console.log("Pawan");

const users={
    name:"pawan",
    gmail:"pnttiwari99@gmail.com",
    mobileNumber:8618424406
}

const users2={
    1:"pawan2",
    2:"pnttiwari99@gmail.com2",
    "ram":86184244062
}
const users3 ={...users, ...users2}
//console.log(users3)
//console.log(Object.keys(users3))
//console.log(Object.entries(users))

const {ram} =users2
console.log(ram);


