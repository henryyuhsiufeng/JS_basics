// This example simulates a basic blog and fetching data from the server

const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
    // takes in a callback function. Function will be called after some time.
    setTimeout(() => {
        let output = '';
        // Can also pass in an index if you want
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    // a promise takes in a callback. The callback takes in two
    // parameters: resolve and reject. Call resolve when promise was successful
    // call reject if otherwise.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

// waits because of the timeout function for 2 seconds
// once wait is done, it is going to resolve. then it will call getPosts
// createPost({ title: 'Post Three', body: 'This is post three'})
//     .then(getPosts)
//     .catch(err => console.log(err));


// Async / await is a way of handling responses
/*
`If you use the async keyword before a function definition, you can then use
 await within the function. When you await a promise, the function is paused 
 in a non-blocking way until the promise settles. If the promise fulfills, 
 you get the value back. If the promise rejects, the rejected value is thrown.`
*/ 
// has to be labeled async. Await waits for synchronous process to be complete.
async function init() {
    // we wait for createPost to be completed before we move on to the next 
    // method call.
    await createPost({ title: 'Post Three', body: 'This is post three'});

    getPosts();
}


// Promise.all
// can use promise.all if you don't want to keep repeating .then 
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => 
    setTimeout(resolve, 2000, 'Goodbye')
);
const promise4 = fetch 
    ('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// it is going to return depending on the longest promise, which in this case
// is 2 seconds. 
Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));

