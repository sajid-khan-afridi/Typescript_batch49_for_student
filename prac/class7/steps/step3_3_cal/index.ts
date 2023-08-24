import inquirer from "inquirer";
import chalk from "chalk"

let {num1,num2,operator} = await inquirer.prompt([
    {
    name: "num1",
    type: "number",
    message: "Enter first number: "
    },
    {
        name:"num2",
        type:"number",
        message:"Enter second number: "
    },
    {
        name:"operator",
        type:"list",
        message:"Enter the operation",
        choices:["Addition","Subtraction","Multiplication","Division"]
    }
]);

// console.log(answer)

if(operator==="Addition"){
    console.log(`${num1}+${num2} = ${num1+num2}`)
} else if(operator==="Subtraction"){
    console.log(`${num1}-${num2} = ${num1-num2}`)
} else if(operator==="Multiplication"){
    console.log(`${num1}*${num2} = ${num1*num2}`)
} else if(operator==="Division"){
    console.log(chalk.bgRed(`${num1}/${num2} = ${num1/num2}`))
}
