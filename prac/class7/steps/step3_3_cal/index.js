import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter first number: "
    },
    {
        name: "num2",
        type: "number",
        message: "Enter second number: "
    },
    {
        name: "operator",
        type: "list",
        message: "Enter the operation",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
console.log(answer);
