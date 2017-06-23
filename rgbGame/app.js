//alert("Check Conn");

var topBlock = document.querySelector(".topBlock");
var block = document.querySelectorAll(".block");
var colorPicker = document.querySelector("#colorPicker");
var gameStatus = document.getElementById("status");
var reset = document.getElementById("reset");
var easy = document.getElementById("easymode");
var hard = document.getElementById("hardmode");
var mode = 6;
var colors=colorArray(mode);

var picked = pickColor();
colorPicker.textContent = picked;


reset.addEventListener("click", function(){
    colors=colorArray(mode);
    picked = pickColor();
    colorPicker.textContent = picked;
    for(var i = 0; i<block.length; i++){
    block[i].style.backgroundColor = colors[i];
    }
    gameStatus.textContent = "";
    reset.textContent = "New Colors";
    topBlock.style.backgroundColor = "cadetblue";
});

easy.addEventListener("click", function(){
    hard.classList.remove("difficulty");
    easy.classList.add("difficulty");
    mode = 3;
    colors=colorArray(mode);
    picked = pickColor();
    colorPicker.textContent = picked;
    for(var i = 0; i<block.length; i++){
        if(colors[i]){
            block[i].style.backgroundColor = colors[i];
        }else{
            block[i].style.backgroundColor = "#232323";
        }
    }
    gameStatus.textContent = "";
    reset.textContent = "New Colors";
    topBlock.style.backgroundColor = "cadetblue";
});

hard.addEventListener("click", function(){
    hard.classList.add("difficulty");
    easy.classList.remove("difficulty");
    mode = 6;
    colors=colorArray(mode);
    picked = pickColor();
    colorPicker.textContent = picked;
    for(var i = 0; i<block.length; i++){
        block[i].style.backgroundColor = colors[i];
    }
    gameStatus.textContent = "";
    reset.textContent = "New Colors";
    topBlock.style.backgroundColor = "cadetblue";
});

for(var i = 0; i<block.length; i++){
    block[i].style.backgroundColor = colors[i];
    
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