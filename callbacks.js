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

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback()
    }, 2000);
}

getPosts();
// WITHOUT CALLBACK 
    // because createPost takes longer, the method will not make a change
    // Once the dom has been painted. It can't be changed. 
    // createPost({title:'Post Three', body: 'This is post three'});

//WITH CALLBACK
    //createPost will push the third object before getPosts outputs it in index
createPost({title:'Post Three', body: 'This is post three'}, getPosts);