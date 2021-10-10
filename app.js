// adding async to the start of a function makes the function return a promise
// this allows for .then to be called on that function directly
async function myFunction(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello'), 1000)
    })

    // fabricating an error
    const error = false

    if(!error){
    // this will wait until the promise is resolved
        const resolution = await promise
        return resolution
    } else {
        await Promise.reject(new Error('something went wrong'))
    }
}

myFunction()
.then(response => console.log(response))
.catch(error => console.log(error)) 