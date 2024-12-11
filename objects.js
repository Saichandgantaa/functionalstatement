let student1={
    "name":"saichand",
    "rollno":23233,
    "ispassed":true

}
for (let item in student1){
    console.log(student1[item]);
}
for (let item in student1){
    console.log(item+":"+student1[item]);
}
 // to upade array 
student1.name="ramu";
console.log(student1);

let arr =[
    {
    "name":"chandu",
    "age":"24"
    },
    {
    "name":"bean",
    "age": "25"
    },
    {
    "name":"ramu",
    "age":"23"
    }
]
 for(let item of arr){
    if(item.age<25)
    console.log(item.name);
    }
 

 
// array below age 25
 let arr1=[
    {
        name:"sai",
        age:23,
    },
    {
        name:"sai chandu",
        age:27,
    },
    {
        name:"chandu",
        age:24,
    },
    ]
    for(let items of arr1)
    {
        if(items.age<25)
        console.log(items.name);
    }
    //array in object 
   
