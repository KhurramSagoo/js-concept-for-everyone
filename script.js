//destructuring
arr=[1,3,4,5,7]

function avg(a,b,c,d,e){
  return a+b+c+d+e/5
}

let a=avg(...arr)
console.log(a);


b=5;
console.log(b)


obj1={
    name1:"khurram",
    class1:"8a",
    language:"js"
}

console.log(obj1)

let obj2={...obj1,language:"python"}
console.log(obj2)


let {name1,class1,language}=obj1;
console.log(name1,class1,language)

//async await

console.log("this that is good")

setTimeout(()=>{
    console.log("this that from async await")
},3000)

console.log("this that is bad")

const { isUtf8 } = require("buffer");
//promises and async await

//this fs will be console later
// let fs= require("fs");
// fs.readFile("file.txt","utf-8",(err,data)=>{
//   console.log(err,data)
// })

// //this will called earlier
// console.log("this is end of file")


//for promise with respect to fs
let fs=require("fs/promises");
const readThree=(file1,file2,file3)=>{
  let a=fs.readFile(file1,"utf-8");
  let b=fs.readFile(file2,"utf-8");
  let c=fs.readFile(file3,"utf-8");
}
let c=fs.readFile("file.txt","utf-8");

a.then((c) => {
  console.log(c)
  
}).catch((err) => {
  
});
// console.log(c)

console.log("this is mid");
console.log("this is end of file");

