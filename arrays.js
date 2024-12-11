let usernames = ["saichand", "jack", "roll", "bean"];
usernames.push("donlad");
console.log(usernames);

usernames.pop();
console.log(usernames);

usernames.unshift("ramu");
console.log(usernames);
usernames.shift();
console.log(usernames);
for(i=0;i<usernames.length;i++){
    console.log(usernames[i]);
}
console.log("arrays");
for(let item of usernames){
    console.log(item);
}