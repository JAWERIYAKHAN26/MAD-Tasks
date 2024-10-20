function myDisplayer(some) {
    console.log(some);
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);

  //setTimeout
  setTimeout(myFunction, 3000);
  myFunction2()
function myFunction() {
  console.log("I love JS !!");
}
function myFunction2() {
    console.log("I love ml!!");
  }