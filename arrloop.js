for (let i = 0; i < 5; i++) {
  console.log(+i);
}
let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

let count = 0;
while (count < 3) {
  console.log("Count: " + count);
  count++;
}

let num = 5;
do {
  console.log("Number: " + num);
  num++;
} while (num < 3);
