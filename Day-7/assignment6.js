
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
    var a=10;
    var b=20;
    var c=a+b;
    
    document.write(`<br><h1>Addition: ${c}`);

    var d=a-b;
    document.write(`<br><h1>Subtraction: ${d}`);

    var e=a * b;
    document.write(`<br><h1>Multiplication:${e}`);

    var f=a / b;
    document.write(`<br><h1>Division:${f}`);

//console.log("hi");