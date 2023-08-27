console.log("Start")

const taskOne =()=>{
    return new Promise((resolve,reject)=>{
         resolve("Task1 is Completed");
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

// taskOne()
// .then(res => console.log(res))
// .then(taskTwo)
// .then(res => console.log(res))
// .then(taskThree)
// .then(res => console.log(res))
// .then(taskFour)
// .then(res => console.log(res))
// .catch(err => console.log(err));

const callAllTasks = async () => {
try{ //try use for handle the reject 
    const t1 = await taskOne()
    console.log(t1);
    const t2 = await taskTwo()
    console.log(t2);
    const t3 = await taskThree()
    console.log(t3);
    const t4 = await taskFour()
    console.log(t4);
}catch(e){
    console.log(e);
}
}
callAllTasks()



console.log("End")