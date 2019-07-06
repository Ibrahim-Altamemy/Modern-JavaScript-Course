//creat object
const user = {
    name: "ibrahim",
    age : 22,
    email : "ibrahim95live@gmail.com",
    blogs : [
        {title:"first blog",likes:30},
       {title:"Welcome blog",likes:60},
    ],

    logBlogs(){
        this.blogs.forEach(blog=>{
            console.log(blog.title,blog.likes);
        })
    },
    //logBlogs.forEach XXX you should use this keyword.
    //Why don't use arrow function ?
    //this keyword in regealr function refers to object that used in.
    //this keyword in arrow function refers to where it's innoked which is global window.
    //Example:
    myfun : ()=>{
        console.log(this);
    }

    /* you can use both forms logBlogs(){...} or logBlogs:function{...} */
};

//dot notation
user.age = 23;

//brickte
//use with variables
user["age"] = 24;


user.logBlogs();
user.myfun(); // this ===> window


/////////////////////////////////////

const number = 3.53;

console.log(Math.ceil(number));
console.log(Math.floor(number));
console.log(Math.round(number));
console.log(Math.trunc(number));


// Generate random number between 1 and 100

const rand = Math.random();
console.log(Math.round(rand*100));


