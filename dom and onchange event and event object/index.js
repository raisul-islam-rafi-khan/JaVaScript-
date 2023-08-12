/*<input /> - text,number,password,email,color,radio,
checkbox,search,time,date,dateyime,week,month,url,
tel,file */
// <select>,
//<textarea>

console.clear();
// const input = document.querySelector("input[name=name]");
// input.addEventListener("change",changeHaldler)

// function changeHaldler (e){
//     //  console.log(e.type);
//     //  console.log(e);
//     //  console.log(e.target);
//     //  console.log(e.target.className);
//     //  console.log(e.target.id);
//     console.log(e.target.value);
    
// }

/*Add Listner with Checkbox */

// const programs = document.querySelectorAll("input[name=program]");
// //console.log(programs);

// Array.from(programs).map((program) => {
//     program.addEventListener("change", programHandler);
// });

// function programHandler(e){
//     if(e.target.checked){
//         // console.log("checked");
//         console.log(e.target.value);
//     }
// }

/*Add Listner with Dropdown menu or Select */

const department = document.querySelector("#department");
// console.log(department);

department.addEventListener("change",handleDepartment);

function handleDepartment(e) {
    // console.log("selected");
    console.log(e.target.value);
}