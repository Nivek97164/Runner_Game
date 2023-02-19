const cactus = document.querySelector('#cactus');

document.addEventListener('keydown', event => {
    move();
    // chrono();
});

function move() {
    if (!cactus.classList.contains('move')) {
        cactus.classList.add('move');
    }
}

const dino = document.querySelector('#dino');

document.addEventListener('keydown', event => {
    jump(event);
    time(event);
});

function jump(event) {
    if (!(event.code === 'Space')) {
        return;
    }
    if (!dino.classList.contains('jump')) {
        dino.classList.add('jump');
        setTimeout(function() {dino.classList.remove('jump')}, 2000);
    }
}

function down(event) {
    if (!(event.code === 's')) {
        return;
    }
    if (!dino.classList.contains('down')) {
        dino.classList.add('down');
        setTimeout(function() {dino.classList.remove('down')}, 2000)
    }
}

function isCrashed() {
    let dinoPosition = dino.getBoundingClientRect();
    let cactusPosition = cactus.getBoundingClientRect();

    return dinoPosition.right > cactusPosition.left && dinoPosition.left < cactusPosition.right && dinoPosition.bottom > cactusPosition.top;
}

setInterval(() => {
    if (isCrashed()) {
        alert('Game Over!');
    }
})

//     var timer_counter = 0;
//     var how_quick = 90

//     document.getElementById("t").innerHTML = timer_counter;

//     console.log(timer_counter)

//     setInterval(time , how_quick)

// function time(event){
//     if (timer_counter != 99999) {
//         timer_counter++;
//         document.getElementById("t").innerHTML = timer_counter;
//         console.log(timer_counter);
// } else {
//     timer_counter = 0;
//     time()
// }
// }