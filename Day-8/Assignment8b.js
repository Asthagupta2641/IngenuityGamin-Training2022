document.body.style.color="red";
document.body.style.fontSize="bolder";
document.body.style.marginTop="200px";
document.body.style.marginLeft="600px";
document.body.style.border="3px solid ";
document.body.style.borderColor="pink";
document.body.style.borderRadius="50%";
document.body.style.height="180px";
document.body.style.width="160px";
document.body.style.padding="70px";

document.body.style.background="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,0.49343487394957986) 29%, rgba(252,176,69,1) 100%)";

var sum=0;
var person_Obj={
    name:"Astha Gupta",
    age:20,
    address:{city:"Lucknow",state:"Uttar Pradesh",pincode:226004},
    hobbies:["dancing","playing badminton","read"],
    display:function(){
        return (`Name: ${this.name} <br> Age: ${this.age} <br> Address: ${this.address.city}, ${this.address.state}, ${this.address.pincode} <br> Hobbies is: ${this.hobbies[0]}, ${this.hobbies[1]}, ${this.hobbies[2]}`);
    }
}

// document.write(`<br><h1>Addition: ${c}`);
document.write(person_Obj.display());
