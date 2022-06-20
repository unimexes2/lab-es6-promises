// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
let arr1=[]
let arr2=[]
let arr3=[]
let arr4=[]

for(let i=0;i<5;i++){
getInstruction("mashedPotatoes", i, (step) => {
arr1[i]=`<li>${step}</li>`},
(error) => console.log(error))};

// Iteration 1 - using callbacks
//FILLing  ARRAYs of data
for(let i=0;i<8;i++){
obtainInstruction('steak', i)
  .then((step0) => {
    arr2[i]= `<li>${step0}</li>`;
  })}

for(let i=0; i<7;i++){
  async function makeBroccoli() {
  return obtainInstruction('broccoli', i)
}makeBroccoli().then(
  function (value) { arr3[i]= `<li>${value}</li>` },
  function (error) { }
)}


for(let i=0; i<8;i++){
  async function brusselsSprouts () {
   return obtainInstruction('brusselsSprouts', i)
}
  brusselsSprouts ().then(
    function (value) { arr4[i]= `<li>${value}</li>` },
    function (error) {  }
  )
  }



  /////documents fill
  setTimeout(function () {
  arr1.forEach((val)=>{
     document.querySelector("#mashedPotatoes").innerHTML += val 
  })
  },1000)

  setTimeout(function () {
    arr2.forEach((val)=>{
       document.querySelector("#steak").innerHTML += val 
    })
    },1000)

    setTimeout(function () {
      arr3.forEach((val)=>{
         document.querySelector("#brusselsSprouts").innerHTML += val 
      })
      },1000)

      setTimeout(function () {
  document.querySelector("#mashedPotatoesImg").removeAttribute("hidden")
  document.querySelector("#steakImg").removeAttribute("hidden")
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden")
  document.querySelector("#broccoliImg").removeAttribute("hidden")
        arr4.forEach((val)=>{
           document.querySelector("#broccoli").innerHTML += val 
        })
        },1000)
            

 // document.querySelector("#steakImg").removeAttribute("hidden");

  // ... Your code here



// Bonus 2 - Promise all
// ...