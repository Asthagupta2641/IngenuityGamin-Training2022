var h1=document.querySelector('h1');
var startermole=document.querySelector('#mole');
var starterdirt=document.querySelector('#mud');
var startbtn=document.querySelector("#start");
var points=document.querySelectorAll(".points");
var dirt=document.querySelectorAll(".dirt");
var mole=document.querySelectorAll(".mole");


function start()
{
    h1.style.visibility="hidden";
    startermole.style.visibility="hidden";
    starterdirt.style.visibility="hidden";
    startbtn.style.visibility="hidden";
    for(var i=0;i<points.length;i++){
        points[i].style.visibility="visible";
    }
    for(var i=0;i<6;i++){
        dirt[i].style.visibility="visible";
    }

    setInterval(()=>{
     var i =randomnumber(1,6);
     document.getElementById("mole"+i).style.visibility="visible";
     document.getElementById("mole"+i).onclick=increbutton();
     setTimeout(() =>{
        for(var j=0;j<mole.length;j++){
            mole[j].style.visibility="hidden";
        }
     },900);
    },1500);
}
//     function randomTime(min,max)
function randomnumber(min,max){
    return(Math.floor(Math.random()*(max-min+1)+min));
}
//inc th score
var incpoints=0;
function increbutton(){
    document.getElementById("currentPoint").innerText=incpoints++;
    console.log(incpoints);
}