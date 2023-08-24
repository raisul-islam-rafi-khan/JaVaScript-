//for of 

const names=["s1","s2","s3"]
for(let name of names){
    console.log(name);
}


//for in

let students={
    name:"Rafi Khan",
    ID: 191,
    CGPA:3.91
}

for (let x in students){
    // console.log(students[x]);
    console.log(`${x} : ${students[x]}`)
}