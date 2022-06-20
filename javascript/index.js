// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync


getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
}, (error) => console.log(error));

setTimeout(function () {



  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
}, 1000);
setTimeout(function () {



  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
}, 2000);
setTimeout(function () {



  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));

}, 3000);
setTimeout(function () {



  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));

}, 4000);

// Iteration 1 - using callbacks
// ...
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
  })
setTimeout(function () {



  obtainInstruction('steak', 1)
    .then((step1) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    })
}, 1000);
setTimeout(function () {



  obtainInstruction('steak', 2)

    .then((step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    })
}, 2000);
setTimeout(function () {



  obtainInstruction('steak', 3)
    .then((step3) => {
      document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    })
}, 3000);
setTimeout(function () {



  obtainInstruction('steak', 4)
    .then((step4) => {

      document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    })
}, 4000);
setTimeout(function () {



  obtainInstruction('steak', 5)
    .then((step5) => {

      document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    })
}, 5000);
setTimeout(function () {



  obtainInstruction('steak', 6)
    .then((step6) => {

      document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    })
}, 6000);
setTimeout(function () {




  obtainInstruction('steak', 7)
    .then((step7) => {


      {
        document.querySelector("#steak").innerHTML += `<li>${step7}</li>`

        document.querySelector("#steakImg").removeAttribute("hidden")
      }
      ;
    });
}, 7000);



async function makeBroccoli() {

  return obtainInstruction('broccoli', 0)


}
makeBroccoli().then(
  function (value) { document.querySelector("#broccoli").innerHTML += `<li>${value}</li>` },
  function (error) { myDisplayer(error); }
)
setTimeout(function () {




  async function makeBroccoli1() {
    return obtainInstruction('broccoli', 1)


  }
  makeBroccoli1().then(
    function (value) { document.querySelector("#broccoli").innerHTML += `<li>${value}</li>` },
    function (error) { myDisplayer(error); }
  )


}, 1000);
setTimeout(function () {



  async function makeBroccoli2() {
    return obtainInstruction('broccoli', 2)


  }
  makeBroccoli2().then(
    function (value) { document.querySelector("#broccoli").innerHTML += `<li>${value}</li>` },
    function (error) { myDisplayer(error); }
  )

}, 2000);
setTimeout(function () {




  async function makeBroccoli3() {
    return obtainInstruction('broccoli', 3)


  }
  makeBroccoli3().then(
    function (value) { document.querySelector("#broccoli").innerHTML += `<li>${value}</li>` },
    function (error) { myDisplayer(error); }
  )

}, 3000);
setTimeout(function () {



  async function makeBroccoli4() {
    return obtainInstruction('broccoli', 4)


  }
  makeBroccoli4().then(
    function (value) { document.querySelector("#broccoli").innerHTML += `<li>${value}</li>` },
    function (error) { myDisplayer(error); }
  )
}, 4000);
setTimeout(function () {



  async function makeBroccoli5() {
    return obtainInstruction('broccoli', 5)


  }
  makeBroccoli5().then(
    function (value) { document.querySelector("#broccoli").innerHTML += `<li>${value}</li>` },
    function (error) { myDisplayer(error); }
  )
}, 5000);
setTimeout(function () {




  async function makeBroccoli6() {
    return obtainInstruction('broccoli', 6)


  }
  makeBroccoli6().then(
    function (value) {

      document.querySelector("#broccoliImg").removeAttribute("hidden")

      document.querySelector("#broccoli").innerHTML += `<li>${value}</li>`
    },
    function (error) { myDisplayer(error); }
  )
}, 6000);






  async function brusselsSprouts0 () {
    return obtainInstruction('brusselsSprouts', 1)


  }
  brusselsSprouts0 ().then(
    function (value) { document.querySelector("#brusselsSprouts").innerHTML += `<li>${value}</li>` },
    function (error) { myDisplayer(error); }
  )



setTimeout(function () {



  async function brusselsSprouts1 () {
    return obtainInstruction('brusselsSprouts', 2)


  }
  brusselsSprouts1 ().then(
    function (value) { document.querySelector("#brusselsSprouts").innerHTML += `<li>${value}</li>` },
    function (error) { myDisplayer(error); }
  )

}, 1000);
setTimeout(function () {




  async function brusselsSprouts3() {
    return obtainInstruction('brusselsSprouts', 3)


  }
  brusselsSprouts3().then(
    function (value) { document.querySelector("#brusselsSprouts").innerHTML += `<li>${value}</li>` },
    function (error) { myDisplayer(error); }
  )

}, 2000);
setTimeout(function () {



  async function brusselsSprouts4() {
    return obtainInstruction('brusselsSprouts', 4)


  }
  brusselsSprouts4().then(
    function (value) { document.querySelector("#brusselsSprouts").innerHTML += `<li>${value}</li>` },
    function (error) { myDisplayer(error); }
  )
}, 3000);
setTimeout(function () {



  async function brusselsSprouts5() {
    return obtainInstruction('brusselsSprouts', 5)


  }
  brusselsSprouts5().then(
    function (value) { document.querySelector("#brusselsSprouts").innerHTML += `<li>${value}</li>` },
    function (error) { myDisplayer(error); }
  )
}, 4000);
setTimeout(function () {




  async function brusselsSprouts6() {
    return obtainInstruction('brusselsSprouts', 6)


  }
  brusselsSprouts6().then(
    function (value) {

      

      document.querySelector("#brusselsSprouts ").innerHTML += `<li>${value}</li>`
    },
    function (error) { myDisplayer(error); }
  )
}, 5000);

setTimeout(function () {
async function brusselsSprouts7() {
  return obtainInstruction('brusselsSprouts', 7)


}
brusselsSprouts7().then(
  function (value) {

    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden")

    document.querySelector("#brusselsSprouts ").innerHTML += `<li>${value}</li>`
  },
  function (error) { myDisplayer(error); }
)
}, 6000);









 // document.querySelector("#steakImg").removeAttribute("hidden");

  // ... Your code here



// Bonus 2 - Promise all
// ...