
export default function canvas(x,y){
    
    // var canvas = document.getElementById('myCanvas');
    // var ctx = canvas.getContext('2d');

    // ctx.fillStyle = 'Green';
    // ctx.fillRect(300,200,200,100);

    // ctx.fillStyle = 'Blue';
    // ctx.arc(100,100,50,0,2*Math.PI,false);
    // ctx.fill();

    var canvas, ctx, flag = false,
        prevX = 0,
        currX = 0,
        prevY = 0,
        currY = 0,
        dot_flag = false;  
    
        canvas = document.getElementById('can');
        ctx = canvas.getContext("2d");
        console.log('ctx',ctx);
        var w = canvas.width;
        var h = canvas.height;
    
        canvas.addEventListener("mousemove", function (e) {
            findxy('move', e)
        }, false);
        canvas.addEventListener("mousedown", function (e) {
            findxy('down', e)
        }, false);
        canvas.addEventListener("mouseup", function (e) {
            findxy('up', e)
        }, false);
        canvas.addEventListener("mouseout", function (e) {
            findxy('out', e)
        }, false);
    
    function draw() {
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(currX, currY);
        ctx.strokeStyle = x;
        ctx.lineWidth = y;
        ctx.stroke();
        ctx.closePath();
    }
    
    function erase() {
        var m = window.confirm("Want to clear");
        if (m) {
            ctx.clearRect(0, 0, w, h);
            document.getElementById("canvasimg").style.display = "none";
        }
    }
        
    function findxy(res, e) {
        if (res === 'down') {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
    
            flag = true;
            dot_flag = true;
            if (dot_flag) {
                ctx.beginPath();
                ctx.fillStyle = x;
                ctx.fillRect(currX, currY, 2, 2);
                ctx.closePath();
                dot_flag = false;
            }
        }
        if (res === 'up' || res === "out") {
            flag = false;
        }
        if (res === 'move') {
            if (flag) {
                prevX = currX;
                prevY = currY;
                currX = e.clientX - canvas.offsetLeft;
                currY = e.clientY - canvas.offsetTop;
                draw();
            }
        }
    }
     
}

export function save() {
        let canvas = document.getElementById('can');
        console.log(canvas.toDataURL());
        document.getElementById("canvasimg").style.border = "2px solid";
        var dataURL = canvas.toDataURL();
        document.getElementById("canvasimg").src = dataURL;
        document.getElementById("canvasimg").style.display = "inline";
    }

// export function color(obj) {
//         switch (obj.id) {
//             case "green":
//                 x = "green";
//                 break;
//             case "blue":
//                 x = "blue";
//                 break;
//             case "red":
//                 x = "red";
//                 break;
//             case "yellow":
//                 x = "yellow";
//                 break;
//             case "orange":
//                 x = "orange";
//                 break;
//             case "black":
//                 x = "black";
//                 break;
//             case "white":
//                 x = "white";
//                 break;
//         }
//         if (x === "white") y = 14;
//         else y = 2;
    
//     }