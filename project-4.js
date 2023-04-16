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

const playerRock = document.getElementById('rock');
playerRock.addEventListener('click', function() {
    const comChoose = getComChoose();
    const playerChoose = playerRock.className;
    const value = getValue(comChoose, playerChoose);

    console.log('player: ' + playerChoose);
    console.log('com: ' + comChoose);
    console.log('value: ' + value);

    document.querySelector(`.${playerChoose}`).classList.add('active');
    document.querySelector(`.${comChoose}-com`).classList.add('active');

});

const playerPaper = document.getElementById('paper');
playerPaper.addEventListener('click', function() {
    const comChoose = getComChoose();
    const playerChoose = playerPaper.className;
    const value = getValue(comChoose, playerChoose);

    console.log('player: ' + playerChoose);
    console.log('com: ' + comChoose);
    console.log('value: ' + value);

    document.querySelector(`.${playerChoose}`).classList.add('active');
    document.querySelector(`.${comChoose}-com`).classList.add('active');

});

const playerScissors = document.getElementById('scissors');
playerScissors.addEventListener('click', function() {
    const comChoose = getComChoose();
    const playerChoose = playerScissors.className;
    const value = getValue(comChoose, playerChoose);

    console.log('player: ' + playerChoose);
    console.log('com: ' + comChoose);
    console.log('value: ' + value);

    document.querySelector(`.${playerChoose}`).classList.add('active');
    document.querySelector(`.${comChoose}-com`).classList.add('active');

});