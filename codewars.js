let str = "this-is-seedorf";
let str2 = "This_is_Seedorf";
let newstr = str.replaceAll("-"," ");
let newstr2 = newstr.split("");

console.log(newstr2);
let newArr = [];
for(let  i = 0; i < newstr2.length; i++){
    if(newstr2[i] !== ' '){
        newArr.push(newstr2[i]);
    }
}
let myArr = newArr.join("");
console.log(myArr);