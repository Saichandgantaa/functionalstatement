


for (let i=1; i<=10; i++) {
    console.log(i)
}
for (let i=0; i<=10; i++) {
    console.log(i)
}
//q5
for (let i=10; i>=1; i--){
    console.log(i)
}
//q 3
let sum=0;
console.log("HZhhhhh")
for (let i=1; i<=5; i++){
    sum=sum+i
    console.log(sum)
}
console.log(sum)
 //q2
for(let i=1; i<=10; i++){
    if(i%2==0){
        console.log(i)
    }
}
console.log("whileloop")

//q1
//let i=1;
//while(i<5){
    //console.log(i)
    //i++
//}
console.log('loop')
//q2
let i =1;
while(i<=9){
    if(i%2!=0){
        console.log(i)

    }
    i++;
}
console.log("whileloop")
//q3
let num=0;
let i1=1;
while(i1<=10){
    num=num+i1;

    // console.log(num);
    i1++;
    console.log(num)
  
}

console.log(num)
//q4
let i2=5;
while(i2>=1){
    console.log(i2);
    i2--;
}
//Task number 6
let n = 5;
let fac = 1;
for(i=n;i>=1;i--){
    fac=fac * i
}
console.log(fac);
console.log("multi")
//Task 
for(i=1;i<=10;i++){
    console.log(10+"*"+i+"="+(10*i));
}

for(i=1; i<=20; i++){
    console.log(10+"*"+i+"="+(10*i));
}
console.log("task");
let n3= 5;
for(i=1;i<=n3;i++){
    str= "";
    for(j=1;j<=n3;j++){
        str=str+"*";
    }
    console.log(str);
}


let num1 = 15, num2 = 20;

// Post Increment
let postNum = num1++; 

// Pre Increment
let preNum = ++num2; 

// Printing value of postNum after post Increment.
console.log("postNum = " + postNum);
console.log("num1 = " + num1);

// Printing value of preNum after pre Increment.
console.log("preNum = " + preNum);
console.log("num2 = " + num2);