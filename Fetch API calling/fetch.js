//Api calling into 4 ways --> XMLHttpRequest, fetch, axios, jqurey

//fetch() has replaced XMLHttpRequest
//fetch() - global method for making HTTP Request
// 2ways to call - then, async wait

// + fetch() is easy to use compare to XMLHttpRequest
// + fetch() returns a Promise
// - returned promise can only handle network error
// -does not support all the other browser

console.clear();

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((res)=>{
//     if(!res.ok){
//         const message =`Error : ${res.status}`;
//         throw new Error(message);
//     }
//     return res.json();
// })
// .then((res)=> console.log(res))
// .catch((err) => console.log(err));

// //creating resource
// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: "POST",
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1, 
//     }),

// })
// .then((res)=>{
//     if(!res.ok){
//         const message =`Error : ${res.status}`;
//         throw new Error(message);
//     }
//     return res.json();
// })
// .then((res)=> console.log(res))
// .catch((err) => console.log(err));

// //update a resource
// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method: "PUT",
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     body: JSON.stringify({
//         id:1,
//         title: 'fooma',
//         body: 'barma',
//         userId: 1, 
//     }),

// })
// .then((res)=>{
//     if(!res.ok){
//         const message =`Error : ${res.status}`;
//         throw new Error(message);
//     }
//     return res.json();
// })
// .then((res)=> console.log(res))
// .catch((err) => console.log(err));

// //Patch
// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method: "PATCH",
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     body: JSON.stringify({
//         id:1,
//         title: 'foomaaa',
//         body: 'barmaaaa',
//         userId: 1, 
//     }),

// })
// .then((res)=>{
//     if(!res.ok){
//         const message =`Error : ${res.status}`;
//         throw new Error(message);
//     }
//     return res.json();
// })
// .then((res)=> console.log(res))
// .catch((err) => console.log(err));

// //delete

// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method: "DELETE",
// })
// .then((res)=>{
//     if(!res.ok){
//         const message =`Error : ${res.status}`;
//         throw new Error(message);
//     }
//     return res.json();
// })
// .then((res)=> console.log(res))
// .catch((err) => console.log(err));


//async await
const makeRequest = async(url,config)=>{
    const res = await fetch(url,config);
    if(!res.ok){
        const message =`Error: ${res.status}`;
        throw new Error(message)
    }
    const data = await res.json();
    return data;
}
const sendData = ()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((res)=> console.log(res))
    .catch((err)=> console.log(err))
}
sendData();

// const getData = ()=>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts')
//     .then((res)=> console.log(res))
//     .catch((err)=> console.log(err))
// }
// getData();