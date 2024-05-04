import inquirer from "inquirer";
let myBalance = 5000;
let myPin = 1234;
console.log("Welcome to the ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your Pin Code!",
    },
]);
if (pinAnswer.pin == myPin) {
    console.log("Pin Is Correct - Logged in Successfully!");
    //   console.log(`Current Account Balance is ${myBalance}`);
    let operation = await inquirer.prompt([{
            name: "Operation",
            type: "list",
            choices: ["Withdraw amount", "Check balance"]
        }]);
    if (operation.Operation === "Withdraw amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficent Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw successfully`);
            console.log(`Your remaining balance is ${myBalance}`);
        }
    }
    else if (operation.Operation === "Check balance") {
        console.log(`Your Account balance is ${myBalance}`);
    }
}
else {
    console.log("Pin Is InCorrect - Try Again!");
}
