
// var canvas=document.getElementsByClassName("canvas");
// const ctx = canvas.getContext("2d");


// //animation
// var circle= {
//     x:200,
//     y:200,
//     size:30,
//     dx:   5,       //displacement in x
//     dy:5,
// };
// //Draw Circle
// function drawCircle(){
//     ctx.beginPath();
//     ctx.arc(circle.x,circle.y,circle.size,0,Math.PI*2);
//     ctx.fillStyle ="purple";
//     ctx.fill();
// }
// drawCircle();

// fun

  
        var canvas = document.getElementById("canvas");
        const ctx= canvas.getContext("2d");

        //Animation
        var circle={
            x:100,
            y:200,
            size:30,
            dx:5,
            dy:5,
        };

        
        //Draw circle
        function drawcircle(){
            ctx.beginPath();
            ctx.arc(circle.x,circle.y,circle.size,0,Math.PI*2);
            ctx.fillStyle="purple";
            ctx.fill();
        }
        
        function update(){
           ctx.clearRect(0,0,canvas.width,canvas.height);
            drawcircle();
            circle.x+=circle.dx;
            circle.y+=circle.dy;

            //detect wall
            if((circle.x + circle.size >canvas.width) || (circle.x  - circle.size < 0)){
                circle.dx*= -1;
            }
            if((circle.y + circle.size >canvas.height) || (circle.y  - circle.size < 0)){
                circle.dy*= -1;
            }
            requestAnimationFrame(update);

        }
        update();
        
    