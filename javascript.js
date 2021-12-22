let current = document.querySelector(".current");
let previous = document.querySelector(".previous");
let ac = document.querySelector(".ac")
let number = document.querySelectorAll(".number");
let dot = document.querySelector(".dot");
let add = document.querySelector(".add");
let sign = document.querySelector(".sign");
let minus = document.querySelector(".minus");
let zero = "0";
let total = 0;

function calc(){
    startCalc();
    currentNumbers();
    dotClick();
    addNumbers();
    minusNumbers();
}

function startCalc(){
    ac.addEventListener("click", function(){
        current.innerHTML = "";
        previous.innerHTML = "";
        sign.innerHTML = "";
        arr.length = 0;
        total = 0;
    })
}

let arr = [];
let secondArr = [];

function currentNumbers() {
    number.forEach(button => {
        button.addEventListener("click", () =>{
            current.append(button.innerHTML);
            arr.push(button.innerHTML);
        })
    })
}

function dotClick() {
    dot.addEventListener("click", function(){
        if(arr.includes(".")){
            dot.addEventListener("click", function(){
                return arr;
            })
        } else {
            current.append(dot.innerHTML);
            arr.push(dot.innerHTML);
        }

        if(arr.length == 1 && arr.includes(".")){
            arr.unshift("0");
            current.innerHTML = "0" + ".";
        }
        
    })
}


function addNumbers(){
    add.addEventListener("click", function(){
        if(arr.length == 0){
            previous.innerHTML = "0";
            sign.innerHTML = "+";
        } else {
            previous.innerHTML = current.innerHTML;
            sign.innerHTML = "+";
            current.innerHTML = "";
            secondArr = arr;
            arr = [];
            total+=+secondArr.join("");
            previous.innerHTML = total;
        }
    })
}

function minusNumbers(){
    minus.addEventListener("click", function(){
        if(arr.length == 0){
            previous.innerHTML = current.innerHTML;
            sign.innerHTML = "-";
            arr = [];
            
        } else if(current.innerHTML > 0){
            previous.innerHTML = current.innerHTML;
            sign.innerHTML = "-";
            current.innerHTML = "";
            total = +previous.innerHTML;
            console.log(+previous.innerHTML);
            console.log(+current.innerHTML);
            console.log(total)
        }else {
            previous.innerHTML = current.innerHTML;
            sign.innerHTML = "-";
            current.innerHTML = "";
            secondArr = arr;
            arr = [];
            total-=+secondArr.join("");
            previous.innerHTML = total;
             
            console.log(arr)
            console.log(total)

            // previous.innerHTML = current.innerHTML;
            // sign.innerHTML = "-";
            // current.innerHTML = "";
            // secondArr = arr;
            // arr = [];
            // let second = +secondArr.join("");

            // total-=+secondArr.join("");
            // previous.innerHTML = total;

            // arr.push(current.innerHTML)
            // console.log(second)
            // console.log(arr)
            // console.log(total)
        }
        // console.log(previous)
        // console.log(previous)
        // console.log(current)
        // console.log(arr)
        // console.log(secondArr)
    })
}

calc();