import inquirer from "inquirer";
const call = async () => {
    let answers = await inquirer.prompt([{
            name: "age",
            type: "number",
            message: "Enter your Age"
        }]);
    console.log(answers);
};
call();
console.log("hello");
