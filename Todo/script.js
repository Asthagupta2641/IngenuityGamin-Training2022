var toInput=document.querySelector(".todo-input");
var btn = document.querySelector("button");
var todoList=document.querySelector(".todo-list");

btn.onclick = function createTodo(e){
    e.preventDefault();

    var newDiv = document.createElement("div");
    newDiv.classList.add('todo'); //new class added


    var newLi = document.createElement("li");
    newLi.classList.add('todo_item');

    newLi.innerHTML = toInput.value;
    newDiv.appendChild(newLi);

   
    var newLi = document.createElement("button");
    cmpltbtn.classList.add('cmpltbtn');
    cmpltbtn.innerHTML = '<i class ="fa fa-check"></i>';
    newDiv.appendChild(cmpltbtn);


    var newLi = document.createElement("button");
    delbtn.classList.add('deltbtn');
    delbtn.innerHTML = '<i class ="fa fa-trash"></i>';
    newDiv.appendChild(deltbtn);

    todoList.appendChild(newDiv);
    toInput.value="";

};
todoList.onclick=function chechBtn(e){
    var check = e.target;
    // console.log(check);
    if(check.classList[0] == "deltbtn"){
        console.log("delete button pressed")
        var parentNode = check.parentElement;
        // console.log(parentNode);
        parentNode.remove();
    }
    else if(check.classList[0] == "cmpltbtn"){
        console.log("complete button pressed")
        var parentNode = check.parentElement;
        parentNode.classList.add("check")
    }
};