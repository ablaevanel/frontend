var btn1 = document.getElementById("button1");
var btn2 = document.getElementById("button2");
var btn3 = document.getElementById("button3");
var body = document.querySelector("body");
var image = document.getElementById("follow");
function fun1(){
    if(btn1.style.opacity == 1){
        btn1.style.opacity = 0;
    } else{
        btn1.style.opacity = 1;
    }
}
function fun2(){
    if(btn2.style.opacity == 1){
        btn2.style.opacity = 0;
    } else{
        btn2.style.opacity = 1;
    }
}

function fun3(){
    if(btn3.style.backgroundColor == "black"){
        btn3.style.backgroundColor = "white";
        btn3.style.color = "black";
        image.style.opacity = 1;
        document.addEventListener("mousemove", function(event) {
            var x = event.pageX;
            var y = event.pageY;
            image.style.left = x + 'px';
            image.style.top = y + 'px';
            var cln = image.cloneNode();
            body.appendChild(cln);
        });
    } else{
        btn3.style.backgroundColor = "black";
        btn3.style.color = "white";
        image.style.opacity = 0;
    }
}