function getComChoose() {
    const com = Math.random();
    if (com < 0.34) return 'rock';
    if (com >= 0.34 && com < 0.67) return 'paper';
    return 'scissors';
}

function getValue(com, player) {
    if (player == com) return 'DRAW'
    if (player == 'rock') return (com == 'paper') ? 'COM WIN' : 'PLAYER 1 WIN';
    if (player == 'paper') return (com == 'rock') ? 'PLAYER 1 WIN' : 'COM WIN';
    if (player == 'scissors') return (com == 'rock') ? 'COM WIN' : 'PLAYER 1 WIN';
}



const playerRock = document.getElementById('rock-player');
playerRock.addEventListener('click', function() {
    const playerPaper = document.getElementById('paper-player');
    const playerScissors = document.getElementById('scissors-player');
    playerPaper.disabled = true;
    playerScissors.disabled = true;
    playerPaper.classList.add('disabled');
    playerScissors.classList.add('disabled');

    const comChoose = getComChoose();
    const playerChoose = playerRock.className;
    const value = getValue(comChoose, playerChoose);

    console.log('player: ' + playerChoose);
    console.log('com: ' + comChoose);
    console.log('value: ' + value);

    document.querySelector(`.${playerChoose}`).classList.add('active');
    document.querySelector(`.${comChoose}-com`).classList.add('active');

    const info = document.querySelector('.info')
    info.innerHTML = value;
    if (value === 'PLAYER 1 WIN ,  COM WIN') return
    info.style.backgroundColor = 'rgba(3, 91, 12, 1)'
    if (value === 'DRAW') return
    info.style.backgroundColor = 'rgba(76, 150, 84, 1)'


    const versus = document.querySelector('.vs')


});

const playerPaper = document.getElementById('paper-player');
playerPaper.addEventListener('click', function() {

    const playerRock = document.getElementById('rock-player');
    const playerScissors = document.getElementById('scissors-player');
    playerRock.disabled = true;
    playerScissors.disabled = true;
    playerRock.classList.add('disabled');
    playerScissors.classList.add('disabled');

    const comChoose = getComChoose();
    const playerChoose = playerPaper.className;
    const value = getValue(comChoose, playerChoose);

    console.log('player: ' + playerChoose);
    console.log('com: ' + comChoose);
    console.log('value: ' + value);

    document.querySelector(`.${playerChoose}`).classList.add('active');
    document.querySelector(`.${comChoose}-com`).classList.add('active');

    const info = document.querySelector('.info')
    info.innerHTML = value;
    if (value === 'PLAYER 1 WIN ,  COM WIN') return
    info.style.backgroundColor = 'rgba(3, 91, 12, 1)'
    if (value === 'DRAW') return
    info.style.backgroundColor = 'rgba(76, 150, 84, 1)'

    const versus = document.querySelector('.vs')
});

const playerScissors = document.getElementById('scissors-player');
playerScissors.addEventListener('click', function() {

    const playerRock = document.getElementById('rock-player');
    const playerPaper = document.getElementById('paper-player');
    playerRock.disabled = true;
    playerPaper.disabled = true;
    playerRock.classList.add('disabled');
    playerPaper.classList.add('disabled');

    const comChoose = getComChoose();
    const playerChoose = playerScissors.className;
    const value = getValue(comChoose, playerChoose);

    console.log('player: ' + playerChoose);
    console.log('com: ' + comChoose);
    console.log('value: ' + value);

    document.querySelector(`.${playerChoose}`).classList.add('active');
    document.querySelector(`.${comChoose}-com`).classList.add('active');

    const info = document.querySelector('.info')
    info.innerHTML = value;
    if (value === 'PLAYER 1 WIN ,  COM WIN') return
    info.style.backgroundColor = 'rgba(3, 91, 12, 1)'
    if (value === 'DRAW') return
    info.style.backgroundColor = 'rgba(76, 150, 84, 1)'

    const versus = document.querySelector('.vs')
});