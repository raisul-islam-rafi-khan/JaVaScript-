//synchronous --> Javascript is byDefault Synchronous.That means If task num1 is not completed then other task is blocked
const task1=()=>{
    console.log("Task1");
}

const dataloading = ()=>{
    console.log("Task2.Data Loading")
};

const task2=()=>{
    setTimeout(dataloading,1000); //setTimeout is a Asynchronous Function
}
const task3=()=>{
    console.log("Task3");
}
const task4=()=>{
    console.log("Task4");
}


task1();
task2();
task3();
task4();
