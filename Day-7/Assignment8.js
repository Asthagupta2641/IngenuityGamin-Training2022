document.body.style.color="black";
document.body.style.marginTop="280px";
document.body.style.textAlign="center";
document.body.style.background="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(57,134,98,0.938813025210084) 12%, rgba(0,212,255,1) 100%)";
document.body.style.fontFamily= "'Dancing Script', cursive";

var sum=0;
var number = prompt("Enter the number");
while(number>0){
    sum=sum+Number(number);
    number = prompt("Enter the number");
}

document.write(`<br><h1><bold>Sum Of Two Positive Number:${sum}`);




     