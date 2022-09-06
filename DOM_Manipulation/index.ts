var heading = document.querySelector('h1') as HTMLHeadElement;
heading.innerText = "Dom manipulation using typescript"
// let anchor = document.querySelector('a') as HTMLAnchorElement;
// console.log(anchor.href)

// heading.innerHTML ="Astha Gupta"
var input1 =document.getElementById('num1') as HTMLInputElement;
var input2 =document.getElementById('num2')  as HTMLInputElement;
// console.log(input1.value);
// console.log(input2.value);

var form = document.querySelector('.myfoam') as HTMLFormElement;
form.addEventListener('submit', function(e:Event){
    e.preventDefault();

    let newP = document.createElement('p')

    let result:number = input1.valueAsNumber + +input2.value;
    newP.innerText = <string><unknown>result;
    form.appendChild(newP)

});












