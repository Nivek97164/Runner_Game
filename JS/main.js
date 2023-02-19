let startchrono = false;
var timer_counter = 0;
var refresh_time = 1000

const cactus = document.querySelector('#cactus');
const helico = document.querySelector('#helico');
const background = document.querySelector('#background');

function moveBlock() {
    if (!background.classList.contains('backgroundAnimation')){
        background.classList.add('backgroundAnimation');
    }

    if (!cactus.classList.contains('move')) {
        cactus.classList.add('move');
    }

    if (!helico.classList.contains('move')) {
        helico.classList.add('move');
    }
}


const dino = document.querySelector('#dino');

document.addEventListener('keyup', event => {
    dinoJump(event);
    //time(event);
});

document.addEventListener('keydown', event => {
    if (!startchrono){
        startchrono= true;
    }
    console.log("DOWN DETECTED");    
    moveBlock(); 
    dinoDown(event);
   // time();
});

function dinoJump(event) {
    if (!(event.code === 'Space')) {
        return;
    }
    if (!dino.classList.contains('jump') && !dino.classList.contains('down')) {
        document.getElementById('dino').setAttribute('src','/img/Jump.png');
        dino.classList.remove('down');
        dino.classList.add('jump');
        setTimeout(function() {dino.classList.remove('jump');document.getElementById('dino').setAttribute('src','/img/Run.png');}, 2000);
    }
}

function dinoDown(event) {
    if (!(event.code === 'KeyS')) {
         return;
    }
    if (!dino.classList.contains('down') && !dino.classList.contains('jump')) {
        document.getElementById('dino').setAttribute('src','/img/Dirft.png');
        dino.classList.remove('jump');
        dino.classList.add('down');
        setTimeout(function() {dino.classList.remove('down');document.getElementById('dino').setAttribute('src','/img/Run.png');}, 2000)
    }
}

function isCrashed() {
    let dinoPosition = dino.getBoundingClientRect();
    let cactusPosition = cactus.getBoundingClientRect();
    let helicoPosition = helico.getBoundingClientRect();
    return (dinoPosition.right > cactusPosition.left 
    && dinoPosition.left < cactusPosition.right 
    && dinoPosition.bottom > cactusPosition.top) || (
        dinoPosition.right > helicoPosition.left 
    && dinoPosition.left < helicoPosition.right 
    && dinoPosition.top > helicoPosition.bottom
    ) ;
}

document.getElementById("t").innerHTML = timer_counter;

console.log(timer_counter)

function updateTimer(){
    if (startchrono){
        if (!background.classList.contains('backgroundAnimation')){
            background.classList.add('backgroundAnimation');
        }
        timer_counter++;
        document.getElementById('t').innerHTML = timer_counter ;

        if (timer_counter >= 30){
            startchrono = false;
            alert('WIN !');
            background.classList.remove('backgroundAnimation');
            history.back();

            // gerer le prochain niveau
        }
        else if (isCrashed()) {
            alert('Game Over!');
            timer_counter = 0;
            document.getElementById('t').innerHTML = 0 ;
            background.classList.remove('backgroundAnimation');
            history.back();
            
        }
    }
}

setInterval(updateTimer, refresh_time)