function calculator(a, b) {
  console.log("number: ", a, b);
  console.log("add: ", a + b);
  console.log("subtract: ", a - b);
  console.log("multiplay: ", a * b);
  if (b == 0) {
    console.log("canot divide by zero");
  } else {
    console.log("divide: ", a / b);
  }
}
calculator(8, 0);
