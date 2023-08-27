//How to Create Promise--pending,resolve,reject
const promise1 = new Promise((resolve,reject)=>{
    // let completedPromise =true;
    // if(completedPromise){
    //     resolve("completed promise 1")
    // }else{
    //     reject(new Error("Not Completed promise 1"));
    // }
    setTimeout(()=>{
        resolve("completed promise 1")
    },2000);
})

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Completed promise 2");
    },1000);
});


// console.log(promise1);

// promise1
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err.message);
// });

// promise2.then((res)=>{
//     console.log(res);
// })

// Promise.all([promise1,promise2]) //all
// .then(([res1,res2])=> console.log(res1,res2))

//Race()
Promise.race([promise1,promise2])
.then((res)=> console.log(res))


console.log("end");


