//alert("Check Connection");

var mode = 6;
var colors=[];
var picked;
var topBlock = document.querySelector(".topBlock");
var block = document.querySelectorAll(".block");
var colorPicker = document.querySelector("#colorPicker");
var gameStatus = document.getElementById("status");
var reset = document.getElementById("reset");
var diffMode = document.querySelectorAll(".diffmode");

init();

function init(){
    difficultylevel();
    arrayBlock();
    restart();
}


reset.addEventListener("click", function(){
    restart();
});

function difficultylevel(){
     for(var i = 0; i<diffMode.length; i++){
        diffMode[i].addEventListener("click",function(){
                diffMode[0].classList.remove("difficulty");
                diffMode[1].classList.remove("difficulty");
                this.classList.add("difficulty");
                if(this.textContent === "Easy"){
                    mode = 3;
                }else{
                    mode = 6;
                }
            restart();
        });
    }
}

function arrayBlock(){
     for(var i = 0; i<block.length; i++){
        block[i].addEventListener("click",function(){
            var clicked = this.style.backgroundColor;
            if(clicked === picked){
                gameStatus.textContent = "You're right!!";
                winnerColor(picked);
                reset.textContent = "Play Again";
            }else{
                this.style.backgroundColor = "#232323";
                gameStatus.textContent = "Try Again";
            }
        
        });
    }
 }

function restart(){
    colors=colorArray(mode);
    picked = pickColor();
    colorPicker.textContent = picked;
    gameStatus.textContent = "";
    reset.textContent = "New Colors";
    for(var i = 0; i<block.length; i++){
        if(colors[i]){
            block[i].style.display = "block";
            block[i].style.backgroundColor = colors[i];
        }else{
            block[i].style.display = "none";
        }
    }
    topBlock.style.backgroundColor = "rgb(22, 14, 123)"; /*"cadetblue";*/
}


function pickColor(){
    return colors[Math.floor(Math.random() * colors.length)];
   
}

function winnerColor(color){
    for(var i = 0; i<block.length; i++){
        block[i].style.backgroundColor = color;
    }
    topBlock.style.backgroundColor = color;
}

function colorArray(num){
    var arr= [];
    for(var i = 0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}
    
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb("+r+", "+g+", "+b+")";
}
