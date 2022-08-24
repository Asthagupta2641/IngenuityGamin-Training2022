window.onload=function(){
    setInterval(()=>{
        stopLoader();
    },3000);
}
function stopLoader(){
    document.querySelector('.container').style.display="none";
    document.getElementById("todo-containers").style.display="block";

}

setTimeout(openpopup, 7000);
     function openpopup()
   {
    
    var url="../Day-14Assignment/Foam.html";
    var Windowsize="height=500 , width=500";
    var newi=window.open(url,"_blank",Windowsize);
    console.log("hi");
    newi.moveTo(500,200);
    //Interval(pop);
    
   }


   function popup()
   {
    var url="../Day-14Assignment/Foam.html";
    var Windowsize="height=500 , width=500";
    var newi=window.open(url,"_blank",Windowsize);
    console.log("hi");
    newi.moveTo(500,200);
   }


// window.onload = function () {
//     var pop=setInterval(() => {
//         openform();
//         clearInterval(pop);
//     }, 10000);
// };

// function openform(){
//     var url="../Day-14Assignment/Assign.html";
//     var windowSize="height:400,width:400";
//     // var window = window.open(url,"_blank",windowSize);
//     window.open(url,"About page ",windowSize);
// }

// function OpenWindow(){
//     var url="../Day-14Assignment/Assign.html";
//     var windowSize="height:400,width:400";
//     // var window = window.open(url,"_blank",windowSize);
//     window.open(url,"About page ",windowSize);
// }

var toInput=document.querySelector(".todo-input");
var btn = document.querySelector("button");
var todoList=document.querySelector(".todo-list");
var ll=0;
ll=Number(window.localStorage.getItem('numberItems'));
console.log(ll);


for(var i=0;i<50;i++)
{
    var rr="tt"+i;
    if(window.localStorage.getItem(rr)==null)
    {
            break;
    }
    else
    {
    
    var newDiv=document.createElement("div");
    newDiv.classList.add('todo');

    var newLi=document.createElement("li");
    newLi.classList.add("todo_item");
    //newLi.innerHTML=toInput.value ;
    //console.log(oo);
     newLi.innerHTML=window.localStorage.getItem(rr) ;

    // document.getElementById("stored").innerHTML= window.localStorage.getItem(oo);
    newDiv.appendChild(newLi);


    var cmpltbtn=document.createElement("button");
    cmpltbtn.classList.add("cmpltbtn");
    cmpltbtn.innerHTML='<i class="fa fa-check"></i>';
    newDiv.appendChild(cmpltbtn);


    var deltbtn=document.createElement("button");
    deltbtn.classList.add("deltbtn");
    deltbtn.innerHTML='<i class="fa fa-trash"></i>';
    newDiv.appendChild(deltbtn);


    todoList.appendChild(newDiv);
    }

}

todoList.onclick=function checkbtn(e){
    var check = e.target;     //e.target btata hai kis cheez ko target kiya hua hai 
    // console.log(check);

    if(check.classList[0] == "deltbtn"){
        // console.log("Delete button pressed");
        var parentNode=check.parentElement;
        // console.log(parentNode);
        parentNode.remove();
    }
    else if(check.classList[0] == "cmpltbtn"){
        // console.log("Complete button pressed");
        var parentNode=check.parentElement;
        parentNode.classList.add("check")
    }
};






    btn.onclick = function createToDo(e){
    e.preventDefault();

    if(toInput.value=="")
    {
        alert("write something to add");
       
    }
    else
    {

        
       var oo="tt"+ Number(ll);

        window.localStorage.setItem(oo,toInput.value);
        console.log(oo);
        ll=Number(ll)+1;
        //console.log(ll);
        window.localStorage.setItem("numberItems",ll);
  


    

    var newDiv=document.createElement("div");
    newDiv.classList.add('todo');

    var newLi=document.createElement("li");
    newLi.classList.add("todo_item");
    //newLi.innerHTML=toInput.value ;
    //console.log(oo);
     newLi.innerHTML=window.localStorage.getItem(oo) ;

    // document.getElementById("stored").innerHTML= window.localStorage.getItem(oo);
    newDiv.appendChild(newLi);


    var cmpltbtn=document.createElement("button");
    cmpltbtn.classList.add("cmpltbtn");
    cmpltbtn.innerHTML='<i class="fa fa-check"></i>';
    newDiv.appendChild(cmpltbtn);


    var deltbtn=document.createElement("button");
    deltbtn.classList.add("deltbtn");
    deltbtn.innerHTML='<i class="fa fa-trash"></i>';
    newDiv.appendChild(deltbtn);


    todoList.appendChild(newDiv);

    

    // var tododatastore={
    //             listdata: toInput.value
    // }
    // window.localStorage.setItem("todoDta",JSON.stringify(tododatastore));

    toInput.value="";

};


    todoList.onclick=function checkbtn(e){
        var check = e.target;     //e.target btata hai kis cheez ko target kiya hua hai 
        // console.log(check);

        if(check.classList[0] == "deltbtn"){
            // console.log("Delete button pressed");
            var parentNode=check.parentElement;
            // console.log(parentNode);
            parentNode.remove();
        }
        else if(check.classList[0] == "cmpltbtn"){
            // console.log("Complete button pressed");
            var parentNode=check.parentElement;
            parentNode.classList.add("check")
        }
    };
}