"use strict";
        // javascript statement,command,instruction
        // output statement
        document.write("Hello world!");
        //window.alert("hi");
        alert("this is Js");
        // document.body.style.background="pink";
        console.log("this is console to debug your code");
        
        //single line comment 
        /*Multiline 
        comment*/


        //variable in js
        // var name = "Astha";
        var name;
        name="Astha";

        //variables
        // 1.variables are case sensitive
        //2.variable name can not start from number
        //3.only _ used as a special symbols
        //4.spaces are not allow btw variable name
        //5 var first name = "Astha";  not allowed
        //6. you can not  use variable name as keyword
        //7. var firstName; //allowed

        //Datatype in js;
        
        //1.primitive/value types
        //-String
        var firstName="Astha";
        var lastName="Gupta";
        //-Number
        var distance =40;
        var exactDistance=40.7;
        //-Boolean
        var isOpened = true;
        console.log(typeof distance);
        console.log(typeof firstName);
        console.log(typeof isOpened);

        var training;
        console.log(typeof training);
        var trainingType= "ilo";
        console.log(typeof trainingType);


        // Type of programming language
        //1.static(statically type)       string name='john'
        //2.dynamic      let name="john";
        
        //js is typeless(loosely typed language)
        //which make  js tobe dynamic

        
        //dynamic behaviour of  js
        function sayHi(value){
            if(true){
                console.log("the statement is correct");
            }
            else{
                console.log("the statement is incorrect");
            }
        }
        sayHi("true");
         

         var lastDay="Monday";
        console.log(lastDay);

        //js worked in 2 modes-
        //1.sloppy mode
        //by default mode;

        //2.strict mode
        //'use strict';


        //Dialog Boxes
        // 1.alert-display some text as msg/Notification
        // 2.confirm-a dialoge box which takes input as "yes" or "no"distance
        // 3.prompt:use to take input from user
        


        // var isOk = confirm("Are you sure to go further");
        // console.log(isOk);

        var fillName = prompt("Enter your fullname");
        console.log(fillName);


