console.log("Start")

const taskOne =()=>{
    return new Promise((resolve,reject)=>{
         resolve("Task1 is Completed");
        // reject("Task1 is not Completed") //Reject handle with catch
    });
}
const taskTwo =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Task2 is Completed");
        },2000);
    });
}
const taskThree =()=>{
    return new Promise((resolve,reject)=>{
        reject("Task3 is not Completed");

    });
}
const taskFour =()=>{
    return new Promise((resolve,reject)=>{
        resolve("Task4 is Completed");
    });
}

taskOne()
.then(res => console.log(res))
.then(taskTwo)
.then(res => console.log(res))
.then(taskThree)
.then(res => console.log(res))
.then(taskFour)
.then(res => console.log(res))

.catch(err => console.log(err)); //one catch is enough to handle promise
console.log("End")