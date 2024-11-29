function sound() {
    var bip = new Audio("style/beep.mp3");
    bip.play();
}

function press(key) {
    if (key === "/") {
        $("button.operatorr").toggleClass("pressed");
        setTimeout(function(){
            $("button.operatorr").toggleClass("pressed");
        }, 100);
        sound();
    } else if (key === ".") {
        $("button.operatora").toggleClass("pressed");
        setTimeout(function(){
            $("button.operatora").toggleClass("pressed");
        }, 100);
        sound();
    } else if (key === "+") {
        $("button.operatorp").toggleClass("pressed");
        setTimeout(function(){
            $("button.operatorp").toggleClass("pressed");
        }, 100);
        sound();
    } else if (key === "*") {
        $("button.operatort").toggleClass("pressed");
        setTimeout(function(){
            $("button.operatort").toggleClass("pressed");
        }, 100);
        sound();
    } else if (key === "-") {
        $("button.operator-").toggleClass("pressed");
        setTimeout(function(){
            $("button.operator-").toggleClass("pressed");
        }, 100);
        sound();
    } else if (presss.includes(key)) {
        $("button.operator" + key).toggleClass("pressed");
        setTimeout(function(){
            $("button.operator" + key).toggleClass("pressed");
        }, 100);
        sound();
    } else if (numbers.includes(key)) {
        $("button#" + key).toggleClass("pressed");
        setTimeout(function(){
            $("button#" + key).toggleClass("pressed");
        }, 100);
        sound();
    }
}

var num = [];
var numero1 = 0;
var numero2 = 0;
var num2 = [];
var presss = ["Enter", "Backspace"];
var numbers = ["0","1","2","3","4","5","6","7","8","9","."];
var oper = ["+","-","/","x","*"];
var sign = false;
var signn = [];
var result = 0;
$("span").text("0");

$("button").click(function(event) {
    operation(event.target.id);
    sound();
})

$(document).keydown(function(event) {
    press(event.key);
    operation(event.key);
})

function addNumber1(number) {
    num.push(number);
    numero1 = num.join("");
    $("span").text(numero1);
}

function addNumber2(number) {
    num2.push(number);
    numero2 = num2.join("");
    $("span").text(numero2);
}

function operation(number) {
    if (!sign && num.length >=0 && num.length < 10 && numbers.includes(number)) {
       addNumber1(number);
    } else if (oper.includes(number)) {
        $("span").text("0");
        signn.push(number);
        sign = true;
    } else if (sign && num2.length >=0 && num2.length < 10 && numbers.includes(number)) {
        addNumber2(number);
        console.log(numero2);
    } else if (number === "Enter" || number === "+" || number === "-" || number === "x" || number === "*" || number === "/") {
        if (signn[0] === "+") {
            var na1 = Number(numero1);
            var na2 = Number(numero2);
            var result = (na1 + na2);
        }
        if (signn[0] === "-") {
            var result = (numero1 - numero2);
        }
        if (signn[0] === "/") {
            var result = (numero1 / numero2);
        }
        if (signn[0] === "x" || signn[0] === "*") {
            var result = (numero1 * numero2);
        }
        if (result.toString().length > 10) {
            alert(result);
            num = [];
            numero1 = 0;
            numero2 = 0;
            num2 = [];
            sign = false;
            signn = [];
            result = 0;
            $("span").text("0");
        } else {
            $("span").text(result);
            numero2 = 0;
            num2 = [];
            numero1 = result;
            signn = [];
        }
    } else if (number === "Backspace") {
        $("span").text("0");
        num = [];
        numero1 = 0;
        numero2 = 0;
        num2 = [];
        sign = false;
        signn = [];
        result = 0;
    }
}
