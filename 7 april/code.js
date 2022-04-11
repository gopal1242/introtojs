// let order = ( time, work )=>{

// //   return new Promise( ( resolve, reject )=>{

// //     if( true ){

// //       setTimeout(()=>{

// //        // work is 👇 getting done here
// //         resolve( work() )

// // // Setting 👇 time here for 1 work
// //        }, time)

// //     }

// //     else{
// //       reject( console.log("Our shop is closed") )
// //     }

// //   })

// }



// order(2000,()=>{
//   console.log("apple is selected");
// })


// let test=function () {
//   console.log(this);
// }
// test();


// const parent = {
//   mom_name: "Samantha Quinn",
//   mother: function () {
//     return `${this.mom_name}`;
//   },
// };
// console.log(parent.mother());
const parent = {
  mom_name: "Samantha Quinn",
  mother: () => {
    return `${this.mom_name} is my mother.`;
  },
};
console.log(parent.mother());
