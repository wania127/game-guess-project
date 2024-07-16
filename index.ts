console.log("hello,wania!");
import inquirer from "inquirer";
let numberguess =8;
var answer = await inquirer.prompt([{
        type: "number",
        name: "numberguess",
        onmessage: "guess your number b\w 1 and 10",
    }]);
const  {userguess} = answer;
if (userguess ===numberguess) {
    console.log(`yeah!\namespace,you have win`);
}else{
    console.log(`oops!try again`);
}