
console.log("start");

function sample(a,b)
{
    let c=a+b;
    return new Promise((resolve,reject)=>{
        if(c<5)
        {
          reject(c);
        }
        else{
            resolve(c);
        }
    })
}

// let result=sample(2,1);
// result.then((ele)=>{
//     console.log(ele);
// })
// .catch((err)=>{
//     console.log("this is err",err);
// })





async function promisehandler()
{
    try{
         let result= await sample(5,6);
         console.log("this is result",result)
    }
    catch(error){
         console.log("this is error",error);

    }
}

promisehandler();


console.log("end");