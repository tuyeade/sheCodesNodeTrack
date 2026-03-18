const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter first number: ", (num1) => {
  rl.question("Enter second number: ", (num2) => {
    rl.question("Choose operation (+, -, *, /): ", (op) => {

      const a = Number(num1);
      const b = Number(num2);
      let result;

      if (op === "+") {
        result = a + b;
      } else if (op === "-") {
        result = a - b;
      } else if (op === "*") {
        result = a * b;
      } else if (op === "/") {
        if (b === 0) {
          console.log("Error: Cannot divide by zero");
          rl.close();
          return;
        }
        result = a / b;
      } else {
        console.log("Invalid operation");
        rl.close();
        return;
      }

      console.log("Result:", result);
      rl.close();
    });
  });
});