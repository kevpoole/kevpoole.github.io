let character = document.getElementById('character');
let block = document.getElementById('block');
function jump(){
    if(character.classList != 'animate'){
        character.classList.add('animate');
    }
    character.classList.add('animate');
    setTimeout(function(){
        character.classList.remove('animate');
    },1000);

}

let checkDead = setInterval(() => {
    let charaterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue('top'));
    let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue('left'));
    if(blockLeft<20 && blockLeft>0 && charaterTop>=130){
        block.style.animation = 'none';
        block.style.display = 'none';
        alert('FUCKING DEAD LOL');
    }
    
}, 10);