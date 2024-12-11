//fibonacci task
function fibonacci(n){
    let a = 0
    let b = 1
    if(n===0){
    console.log(a)
    }
    else{
        console.log(a);
        console.log(b);
        for(let i= 1; i<=n;i++){
            let c = a+b
              a = b
              b = c   
        console.log(c);
        }   
    }
}
fibonacci(12);
//palindrome task
function palindrome(q){
    let q2 ="";
    for(i=q.length-1;i>=0;i--){
        q2=q+q2[i]
        
    }
    if(q==q2){
        console.log("palindrome");
    }
    else{
        console.log("not palindrome");
    }
}

palindrome('level');

//factorial
let a = 5;
let b = 5;
fact = 1;
for(i=1;i<=b;i++)
    fact=fact*a;{
    
    console.log(fact);

}

// to convert string to number
let n ="5"
   n = Number(n);
console.log(Number(n));
console.log(typeof n);
// to convert num to str
let u = 55
 u = String(u);
 console.log(u);
 console.log(typeof u);

