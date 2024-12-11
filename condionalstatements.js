

//Task2
let percentage = 50;
if (percentage >= 40 && percentage <=50) {
     console.log("buy a pen");
}
else if (percentage >=50 && percentage <60) {
     console.log("buy a book");
} 
else if (percentage >=60 && percentage <70){
     console.log("buy a bag");
}
else if (percentage >=70 && percentage <80){
     console.log("buy a watch");
}
else if (percentage >=80 && percentage <90){
     console.log("buy a mobile");
}
else if (percentage >=90 && percentage <100){
     console.log("buy a laptop");
}
//Task3
let N=5;
if (N%2===0){
     console.log('it is a even number');
     console.log("double of number" + (2*N))
}
else if (N%1===0){
       console.log("its an odd number")
       console.log('print add by 2' + (2+N))
}

// to find postive and negetive numbers
let num = -22;
if (num > 0){
     console.log('number is postive');
}
else if (num < 0){
     console.log('number is negitive');
}
else {
console.log("number is zero");
}

//Use if to check if a string is empty.

let name = "hjj";
if (name=="") {
     console.log("not found");
}
else {
     console.log(name)
};

//Use if-else to check if a number is greater than, less than, or equal to 10.

let number = 10;
if (number>10){
     console.log("it is greater than 10 =");
}
else if (number<10){
     console.log("it is an odd number");
}
else {
     console.log("number is equal to 10")
}
//task4r
//Create a Simple Calculator using Conditions


// let numb1 = Number(prompt("Enter first Number"));
// let numb2 = Number(prompt("Enter second number"));




// let op = prompt("Enter Operator");

// console.log(op)

// switch (op) {
//      case "+":
//           console.log(numb1+numb2)
//           break;
//      case "-":
//           console.log(numb1-numb2);
//           break; 
//      case "*":
//           console.log(numb1*numb2);
//           break;
//      case "/":
//           console.log(numb1/numb2);
//           break;

//      default:
//           console.log("Invalid Operator")
//           break;
// }

let a =1;
switch(a){
     case 0:
     console.log("hello");
     break;
     case 1:
     console.log("goodmoring");
     break;
     default:
     console.log("not found")
}
// conditonal opertor
let x = 16;

console.log(x>=18?"Eligible for vote":"not eligible for vote")

let favaroteanimal = "tiger"
switch(favaroteanimal){
     case("dog"):
     console.log("its a dog");
     break
     case("tiger"):
     console.log("its a tiger");
     break
     case("lion"):
     console.log("its a lionr");
     break

}