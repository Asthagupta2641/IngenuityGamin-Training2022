let arr1:number[] = [1,2,3,4,5];
arr1.push(1);

console.log(arr1);

let arr2:string[]= [];
arr2[0] ="Rahul";
arr2[1]="Astha";
arr2[2]="Ballu";
arr2[3]="Anshika";
console.log(arr2);

arr2.forEach((i)=>console.log(i));

//Mixed Array
let arr3:(number|string|boolean)[] = [1,2,3,4,5,"abs","gupta","jain","rao"];
arr3.push("sdf");
arr3.push(33);

console.log(arr3);
//readonly:to make array not to be updated
//readonly used as sticky function we does'nt change element
let arr4:readonly number[] =[1,2,3,4,5];
//arr4.push(6) not allowdue to readonly array


//Assignment-2
let assignmentArray:number[]=[1,2,3,4,5,6]
//output  :5,10,15,20,25,30
