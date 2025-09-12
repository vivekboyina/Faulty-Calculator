console.log("=======Faulty Calculator=======");
let a = Math.random()*100 + 1;
if(a > 10)
{
    console.log("Enter two numbers: ");
    let a = Number(prompt("Enter the first number: "));
    let b = Number(prompt("Enter the second number: "));
    console.log("Addition -> +");
    console.log("Subtraction -> -");
    console.log("Multiplication -> *");
    console.log("Division -> /");
    console.log("Power -> ^");
    let op = prompt("Enter a operator: ");
    switch(op)
    {
        case '+':
            alert("Answer is " + (a + b));
            break;
        case '-':
            alert("Answer is " + Math.abs(a - b));
            break;
        case '*':
            alert("Answer is " + (a * b));
            break;
        case '/':
            alert("Answer is " + (a / b));
            break;
        case '^':
            alert("Answer is " + (a ** b));
            break;
        default:
            alert("Enter a valid operator");
    }
}
else
{
    console.log("Enter two numbers: ");
    let a = Number(prompt("Enter the first number: "));
    let b = Number(prompt("Enter the second number: "));
    console.log("Addition -> +");
    console.log("Subtraction -> -");
    console.log("Multiplication -> *");
    console.log("Division -> /");
    console.log("Power -> ^");
    let op = prompt("Enter a operator: ");
    switch(op)
    {
        case '+':
            alert("Answer is " + (a * b));
            break;
        case '-':
            alert("Answer is " + (a / b));
            break;
        case '*':
            alert("Answer is " + (a + b));
            break;
        case '/':
            alert("Answer is " + (a ** b));
            break;
        case '^':
            alert("Answer is " + (a - b));
            break;
        default:
            alert("Enter a valid operator");
    }
}