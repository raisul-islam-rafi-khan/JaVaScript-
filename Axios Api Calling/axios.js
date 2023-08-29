//axios is a js Library.
//axios returns response object -- data, status, statusText,headers, config

console.clear()

// axios.get('https://jsonplaceholder.typicode.com/posts/101')
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err.data));

// axios.post('https://jsonplaceholder.typicode.com/posts',{
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
// })

// axios.put('https://jsonplaceholder.typicode.com/posts/1',{
//     method: 'PUT',
//     body: JSON.stringify({
//       id:1,
//       title: 'foofa',
//       body: 'barma',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
// })

// axios.patch('https://jsonplaceholder.typicode.com/posts/1',{
//     method: 'PATCH',
//     body: JSON.stringify({
//       title: 'foofaaa',
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
// })


// axios.delete('https://jsonplaceholder.typicode.com/posts/1')
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err.data));


//async await

// const makeRequest = async (config)=>{
//     return await axios(config);
// }

// const getData = () =>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts")
//     .then((res)=>console.log(res))
//     .catch((err) => console.log(err));
// };

// getData();

const makeRequest = async (config)=>{
    return await axios(config);
}

const postData = () =>{
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
    .then((res)=>console.log(res))
    .catch((err) => console.log(err));
};

postData();
