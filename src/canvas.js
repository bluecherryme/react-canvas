
export default function canvas(x,y){
//cssFilter
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
        // var w = canvas.width;
        // var h = canvas.height;
    
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
        ctx.imageSmoothingQuality='high';
        console.log('first', ctx);
        ctx.lineWidth = y;
        ctx.stroke();
        ctx.closePath();
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
                ctx.imageSmoothingQuality='high';
                console.log('second',ctx);
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
        console.log(canvas.toDataURL().length);
        document.getElementById("canvasimg").style.border = "2px solid";
        var dataURL = canvas.toDataURL();
        document.getElementById("canvasimg").src = dataURL;
        document.getElementById("canvasimg").style.display = "inline";
    }

export function erase() {
        let canvas = document.getElementById('can');
        let ctx = canvas.getContext("2d");
        var m = window.confirm("Want to clear");
        var w = canvas.width;
        var h = canvas.height;
        if (m) {
            ctx.clearRect(0, 0, w, h);
            document.getElementById("canvasimg").style.display = "none";
        }
    }