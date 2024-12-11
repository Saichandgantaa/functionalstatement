//5.1
let array=[1,2,,3,5,6,];
console.log(array[0]);

let usernames=["saichand", "jack", "roll", "bean"];
for(i=0;i<usernames.length;i++){
    console.log(usernames[i]);
}
console.log("push");
usernames.push("ramu");
console.log(usernames);
usernames.pop();
console.log(usernames);
console.log(usernames.length);

//task common
let num1 =[1,2,3,4];
let num2 =[2,3,5];
let newarr=[];
for(i=0;i<num1.length;i++){
    if(num2.includes(num1[i])){
    newarr.push(num1[i]);
    }
}
    console.log(newarr);

// palindrome
    let arr1= "level";
    let arr2="";
    for(i=arr1.length-1;i>=0;i--){
        arr2=arr2+arr1[i]
        
    }
    if(arr1==arr2){
        console.log("palindrome");
    }
    else{
        console.log("not palindrome");
    }
    //reverse array 
    let arr =[1,2,3,4,5];
    for(i=arr.length-1;i>=0;i--){
        console.log(arr[i]);
    }
    // prime number
let num = 3 ;
let count = 0 ; 
for(let i=1;i<=num;i++){
    // console.log(i)
    if(num%i == 0){
        // console.log("Divisible by ", i )
        count += 1 ;
    }
}

if(count == 2 ){
    console.log("Prime nmuber")
}

else{
    console.log("Not a Prime Number ")
}

