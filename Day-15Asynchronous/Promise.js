// Es6 Promise
// 1.ita a way of communicating with AudioProcessingEvent
// 2.its an Object that returns a value that hope to recieve in future but not right now
// 3.promise is well suited for handling Asynchronous operations
// 4.promise has three states .Pending ,fullfilled,rejected



function sayHi()
{
    return new Promise((resolve,reject)=>{
        console.log("let me check");
        setTimeout(()=>{
        const err=true;
        if(!err){
            resolve("ok,I will meet you")
        }
        else{
            reject("sorry,I am busy");
        }
    },3000);

    });
}
// console.log(sayHi());

// consume the promises

sayHi()
.then((val) =>console.log(val))
.catch((err) => console.log(err));