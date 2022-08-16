
     document.body.style.color="#e72748";
     document.body.style.textAlign="center"
     //  document.write("hi");
     var d=new Date();
     let date=d.getDate();
     let month=d.getMonth()+1;
     let Year=d.getFullYear();
     
     document.body.innerHTML=`<h1>Today Date: ${date}/${month}/${Year} </h1>`;
     let weekday=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
     let day=(weekday[d.getDay()]);
    //  document.write(`<h1>Today Day: ${day} </h1>`);
     document.body.style.background="linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(181,148,233,1) 100%)";

     
   
     var fillName = prompt("Enter your fullname");
     document.write(`<h1>${fillName} </h1>`);
    

    var number1 = prompt("Enter number1");
    var number2=prompt("Enter number2");

    // Addition
    var addi= Number(number1)+Number(number2);
    document.write(`<h3>Addition of ${number1} and ${number2} is : ${addi} </h3>`);

    //subtraction
    var sub= number1-number2;
    document.write(`<h3>Subtraction of ${number1} and ${number2} is : ${sub} </h3>`);


    //multiplication 
    var multi= number1 * number2;
    document.write(`<h3>Multiplication of ${number1} and ${number2} is : ${multi} </h3>`);


    //divide
    var divide = number1 / number2;
    document.write(`<h3>Division of ${number1} and ${number2} is : ${divide} </h3>`);

    //console.log("hi");