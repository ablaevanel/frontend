function generateLetterCaptcha(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
      counter++;
    }
    return result;
}

function generateNumberCaptcha() {
    var num1 = Math.floor(Math.random() * 100);
    var num2 = Math.floor(Math.random() * 100);
    var q = num1 + " + " + num2 + " = ?";
    return { num1, num2, captcha: q };
}
  
function generateNewCaptcha() {
    document.getElementById("captchaInput").value = "";
    document.getElementById("letterCaptcha").textContent = "";

    var numberCaptcha = generateNumberCaptcha();
    document.getElementById("numberCaptcha").textContent = numberCaptcha.captcha;
    let num1 = numberCaptcha.num1;
    let num2 = numberCaptcha.num2;
    return {num1, num2};
}

let length=5;
document.getElementById("letterCaptcha").textContent = generateLetterCaptcha(length);
var result;
document.getElementById("checked").onclick = function handleSubmit() {
    var inputValue = document.getElementById("captchaInput").value;
    if(inputValue == ""){
        alert("Введите капчу");
        return;
    }

    if (document.getElementById("letterCaptcha").textContent != ""){
        var letterCaptcha = document.getElementById("letterCaptcha").textContent;
        if (inputValue == letterCaptcha) {
            alert("Верно");
            document.getElementById("submitButton").disabled = false;
            return;
        }
        else{
            alert("Не верно");
            result = generateNewCaptcha();
        }
        return;
    }
    
    if (document.getElementById("numberCaptcha").textContent != "")
    {
        var sum = result.num1 + result.num2;
        if (parseInt(inputValue) == sum) {
            alert("Верно");
            document.getElementById("submitButton").disabled = false;
        } else {
            alert("Не верно");
            result = generateNewCaptcha();
        }
        return;
    }
    
}