document.body.style.color="black";
document.body.style.marginTop="300px";
document.body.style.fontFamily="'Dancing Script', cursive";
document.body.style.fontSize="larger";
document.body.style.textShadow="2px white"


document.body.style.textAlign="center";
document.body.style.background="linear-gradient(90deg, red,white)";
var randomNumber=Math.floor(Math.random()*10)+1;
console.log(randomNumber);
for(var i=1;i<=3;i++){
    var guessNumber = prompt("Guess The Number: ");
    if(guessNumber==randomNumber){
        document.getElementById("code").innerHTML="you win the match";
        // document.write(`<h3>you win the match</h3>`);
        break;
    }
    else if(guessNumber!=randomNumber){
        var x= 3-i;
        if(x>0){
            alert(`Try Again and you have only ${x} chances left to win the match`);
        }
        else{
            document.getElementById("code").innerHTML="Sorry you lost the match..";

        }

    }
    
}
