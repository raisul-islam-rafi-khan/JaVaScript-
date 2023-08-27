//Callback and Higher Order Function

function square(x){
    console.log(`square of ${x}:${x*x}`);
}
//const y = square;
//y(5);

function higherOrderFunction(num, callback){
    callback(num)
}

higherOrderFunction(6,square)


//
const taskOne=(callback)=>{
    console.log("Task1");
    callback();
};

const taskTwo=(callback)=>{
    setTimeout(()=>{
        console.log("Task2.Data Loading");
        callback();
    },1000); 
};
const taskThree=(callback)=>{
    console.log("Task3");
    callback();
};
const taskFour=()=>{
    console.log("Task4");
};

taskOne(()=>{
    taskTwo(()=>{
        taskThree(()=>{
            taskFour()
        });
    });
});

//button asynchronous
console.log("hi");

document.querySelector("button").addEventListener("click",()=>{
    console.log("button is clicked");
})
console.log("bye");
