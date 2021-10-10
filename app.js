// // adding async to the start of a function makes the function return a promise
// // this allows for .then to be called on that function directly
// async function myFunction(){
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello'), 1000)
//     })

//     // fabricating an error
//     const error = false

//     if(!error){
//     // this will wait until the promise is resolved
//         const resolution = await promise
//         return resolution
//     } else {
//         await Promise.reject(new Error('something went wrong'))
//     }
// }

// myFunction()
// .then(response => console.log(response))
// .catch(error => console.log(error)) 

// there will be no .then or .catch because of await 
async function getUsers(){
    // awaiting response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //only proceed once the promise is resolved
    const data = await response.json()
    // only proceed once the second promise is resolved
    return data 
}

getUsers().then(users => console.log(users))