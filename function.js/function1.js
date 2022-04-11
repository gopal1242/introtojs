// functions
// named function,anonymous function,arrow function,IIFE
// function are called first class citizen in js
// because they can be treated as variable ,they can be stored as variable,they can be passed as args and parameter in function

// named function

// function fun(){
//     let a=3;
//     return a;
// }

// console.log(fun());
//  function:fun
// this keyword => we have bind,call or apply with the named function
// if you are not returning anything than when call function it will give undefined

// anonymous=> no name function

// let test=function(){
//     let a=5;
//     return a
// }
// console.log(test());

// this =>they do not have their own this keyword

// arrow function
// let test=(a,b)=>{
//     return a+b
// }
// console.log(test(2,4));


// IIFE
// ( (a,b)=>{
//     console.log(a+b)
    
// })(2,3)


function child(a,b)
{
    return a+b;
}

function parent(callback)
{
    return callback(5,6);
}

console.log(parent(child))


// function child(a,b)
// {
//     return a+b;
// }

// function parent(callback,a,b)
// {
//     return callback(a,b);
// }

// console.log(parent(child,5,6))