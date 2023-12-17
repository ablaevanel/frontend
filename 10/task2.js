function Accumulator(startingValue){
    alert("Начальное значение: "+ startingValue)
    let value=startingValue;
    this.read=function(){
        value+=Number(prompt("Введите число"));
        alert("Всего: "+value);
    };
}

let ac;
document.getElementById("button10").onclick = function accum(){
    if (!ac) ac=new Accumulator(0);
    ac.read();
};
