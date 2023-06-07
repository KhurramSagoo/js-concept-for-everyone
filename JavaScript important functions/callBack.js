const posts = [
  { title: "post one:", body: "this is body one" },
  { title: "post two:", body: "this is body two" }
];

function getPost (){
    setTimeout(() => {
        let output='';
        posts.forEach(function (posts){
            output+=   `<li> ${posts.title} ${posts.body}</li>`
        })
        document.body.innerHTML=output
    }, 1000);
}
getPost()

//03354869370