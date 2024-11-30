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
$("span").text(result);


$("button").click(function(event) {
    numeri(event.target.id);
    if (signn.length > 1) {
        operation(numero1, numero2, signn[signn.length - 2]);
        numero1 = result;
        numero2 = 0;
        num2 = [];
        var sym = signn[signn.length - 1];
        signn = [];
        signn.push(sym);
    }
    if (signn.length <= 1) {
        if (event.target.id === "Enter") {
            operation(numero1, numero2, signn[signn.length - 1]);
            numero1 = result;
            numero2 = 0;
            num2 = [];
            signn = [];
            sign = false;
        }
    }
    sound();
})

$(document).keydown(function(event) {
    press(event.key);
    numeri(event.key);
    if (signn.length > 1) {
        operation(numero1, numero2, signn[signn.length - 2]);
        numero1 = result;
        numero2 = 0;
        num2 = [];
        var sym = signn[signn.length - 1];
        signn = [];
        signn.push(sym);
    }
    if (signn.length <= 1) {
        if (event.key === "Enter") {
            operation(numero1, numero2, signn[signn.length - 1]);
            numero1 = result;
            numero2 = 0;
            num2 = [];
            signn = [];
            sign = false;
        }
    }
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

function numeri(number) {
    if (num.length <= 9 && numbers.includes(number) && !sign) {
        addNumber1(number);
    }
    if (oper.includes(number)) {
        signn.push(number);
        sign = true;
    }
    if ((num2.length <= 9 && numbers.includes(number) && sign)) {
        addNumber2(number);
    }
    if (number === "Backspace") {
        noll()
    }
}

function operation(numero1, numero2, signn) {
    switch (signn) {
        case "+":
            result = (Number(numero1) + Number(numero2));
            if (result.toString().length > 10) {
                alert(result);
                noll();
            }    
            $("span").text(result);
            break;
        case "-":
            result = (Number(numero1) - Number(numero2));
            if (result.toString().length > 10) {
                alert(result);
                noll();
            }
            $("span").text(result);
            break;
        case "/":
            result = (Number(numero1) / Number(numero2));
            if (result.toString().length > 10) {
                alert(result);
                noll();
            }
            $("span").text(result);
            break;
        case "*":
            result = (Number(numero1) * Number(numero2));
            if (result.toString().length > 10) {
                alert(result);
                noll();
            }
            $("span").text(result);
            break;
        case "x":
            result = (Number(numero1) * Number(numero2));
            if (result.toString().length > 10) {
                alert(result);
                noll();
            }
            $("span").text(result);
            break;
    }
}

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

function noll() {
    num = [];
    numero1 = 0;
    numero2 = 0;
    num2 = [];
    sign = false;
    signn = [];
    result = 0;
    $("span").text(result);
}
