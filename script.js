var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
var speed = 1.2;
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter = 0;
        speed = 1.2;
        block.style.animation = `block ${speed}s infinite linear`;
    }else{
        counter++;
        speed = speed - 0.00015;
        block.style.animation = `block ${speed}s infinite linear`;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);