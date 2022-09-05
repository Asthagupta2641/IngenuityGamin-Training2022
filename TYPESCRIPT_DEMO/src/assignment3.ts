function addFunc(x:number,...y:number[]){
    let sum:number=0;
    for(let i:number=0;i<y.length;i++){
        sum=sum+y[i];
    }
    return x+sum;
}
let func:number= addFunc(2,3,4,5,6,7,8,9);
document.write(`<h3> sum of variables using rest operator ${func} </h3>`);