$('#containerMenu').css('display', 'block');
$('#containerL1').css('display', 'none');
$('#statusBox').css('display', 'none');

//=====LEVEL 1===========================
const crosshair = $("#crosshair");
const gun = $("#gun");
const score = $('#score');
const bullets = $('#bullets');
var idNo = 1;

var zombieTimer1 = 0
var zombieTimer2 = 0
var zombieTimer3 = 0

var zombieTimer4 = 0
var zombieTimer5 = 0

var zombieTimer6 = 0
var zombieTimer7 = 0

var scoreCount = 0;
var bulletCount = 21;

// move gun & crosshair with mousemove
$(window).mousemove(function (event) {
    let yAxis = event.pageY;
    let xAxis = event.pageX;

    if (yAxis > 36 && yAxis < 514) {
        crosshair.css("top", yAxis);
    }
    if (xAxis > 30) {
        crosshair.css("left", xAxis);
    }

    if (1250 > xAxis && xAxis > 0) {
        gun.css("left", xAxis);
    }
});

//start game
var tempRandom = 2000;

function startGame() {
    console.log('Clicked');
    score.text('00');   //to confirm the program start
    bulletCount = 21;
    bullets.text(bulletCount);  //display bullet count on start
    let randomTimer = 1000;
    let generateTimer = 2750;

    zombieTimer1 = setInterval(() => {
        let random = (Math.floor(Math.random() * 5) + 1) * 1000;
        if (tempRandom != random) {
            randomTimer = random;
            // console.log("random - " + randomTimer);
            console.log("random - " + tempRandom);
        } else if (tempRandom == random) {
            generateTimer = random;
            // console.log("generate - " + generateTimer);
        }
        tempRandom = random;

        zombieTimer2 = setTimeout(generateZombies, randomTimer);
    }, generateTimer);
}

//generate zombies
function generateZombies() {
    const zombie = $('<img>'); //create element
    zombie.addClass('zombie'); //add cls for styles
    zombie.attr("id", `zombie${idNo}`); //add id
    idNo++;
    let randomNo = Math.floor(Math.random() * 2) + 1; //generate random number
    zombie.attr("src", "assets/images/gif/zomR" + randomNo + ".gif"); //set gifs
    $("#areaL1").append(zombie); //add element to body

    zombieTimer3 = setInterval(() => {
        moveZombies(zombie);
    }, 100);
}

//move zombie
function moveZombies(zombie) {
    let zomLeft = parseInt(zombie.css('left'));
    zombie.css('left', zomLeft - 10);
}

var gunshot = new Audio("assets/sound/gunshot.mp3");
$(window).click(function (event) {
    gunshot.play();
    //shoot zombies
    if (event.target.className === 'zombie') {
        let zomId = $("#" + event.target.id); // identify targeted zombie by id
        zomId.css("display", "none");

        scoreCount++;   //count score
        score.text('0' + scoreCount); //display score
    }

    bulletCount--;  //count bullets
    bullets.text(bulletCount);    //display bullets

    checkGameStatus();

});

//check win or lose
var stBox = $('#statusBox');
var areaL = $('#areaL1');
var sText = $('#statusText');
var sImage = $('#statusImg');
var nextBtn = $('#btnNextLevel');

function checkGameStatus() {
    //check lose by bullet count
    let levelCheck = $('#level').text();
    if (levelCheck === 'Level 1') {
        if (bulletCount === 0 && scoreCount !== 10) {
            clearTimers();
            // alert('GAME OVER ---> YOU LOSE');
            stBox.css('display', 'block');
            areaL.append(stBox);
            sText.text('Infected 💀');
            sImage.attr('src', 'assets/images/img/loseImg.jpg');
            nextBtn.css('display', 'none');
        }
        if (scoreCount === 10 && bulletCount >= 0) {
            clearTimers();
            // alert('GAME OVER ---> YOU WIN');
            stBox.css('display', 'block');
            areaL.append(stBox);
            sText.text('Survived 🏆');
            sImage.attr('src', 'assets/images/img/winImg.jpg');
        }
    }
    if (levelCheck === 'Level 2') {
        if (bulletCount === 0 && scoreCount !== 15) {
            clearTimers2();
            // alert('GAME OVER ---> YOU LOSE');
            stBox.css('display', 'block');
            areaL.append(stBox);
            sText.text('Infected 💀');
            sImage.attr('src', 'assets/images/img/loseImg.jpg');
            nextBtn.css('display', 'none');
        }
        if (scoreCount === 15 && bulletCount >= 0) {
            clearTimers2();
            // alert('GAME OVER ---> YOU WIN');
            stBox.css('display', 'block');
            areaL.append(stBox);
            sText.text('Survived 🏆');
            sImage.attr('src', 'assets/images/img/winImg.jpg');
        }
    }
}

//clear intervals
function clearTimers() {
    clearInterval(zombieTimer1);
    clearInterval(zombieTimer2);
    clearInterval(zombieTimer3);

    clearInterval(zombieTimer6);
    clearInterval(zombieTimer7);
}

function clearTimers2() {
    clearInterval(zombieTimer1);
    clearInterval(zombieTimer2);
    clearInterval(zombieTimer3);

    clearInterval(zombieTimer4);
    clearInterval(zombieTimer5);
}

//=====Main Page======================
$('#btnStartGame').click(function () {
    $('#containerMenu').css('display', 'none');
    $('#containerL1').css('display', 'block');
    $('#statusBox').css('display', 'none');
    startGame();
    leftZombie();
});


//=====LEVEL 2============================
function lvlTwo(){
    clearTimers();
    scoreCount = 0;
    bulletCount = 21;
    var img = "assets/images/img/bgL2.jpg";
    $('#areaL1').css('background-image', "url(" + img + ")");
    $('#level').text('Level 2');
    $('#lvlDesc').text('Kill 15 Zombies 🎯');
    startGame();    //generate left zombies
    upZombie();     //generate up zombies
}

function upZombie() {
    zombieTimer4 = setInterval(generateUpZombie, 5000);
}

function generateUpZombie() {

    const zombie = $('<img>'); //create element
    zombie.addClass('zombie'); //add cls for styles
    zombie.attr("id", `zombie${idNo}`); //add id
    zombie.css('top', 75);
    idNo++;
    // let randomNo = Math.floor(Math.random() * 2) + 1; //generate random number
    zombie.attr("src", "assets/images/gif/zomUp.gif"); //set gifs
    $("#areaL1").append(zombie); //add element to body

    zombieTimer5 = setInterval(() => {
        moveUpZombies(zombie);
    }, 100);
}

function moveUpZombies(zombie) {
    let zomLeft = parseInt(zombie.css('left'));
    zombie.css('left', zomLeft - 10);
}

function leftZombie() {
    zombieTimer6 = setInterval(generateLeftZombie, 3500);
}

function generateLeftZombie() {

    const zombie = $('<img>'); //create element
    zombie.addClass('zombie'); //add cls for styles
    zombie.attr("id", `zombie${idNo}`); //add id
    zombie.css('left', 0);
    idNo++;
    // let randomNo = Math.floor(Math.random() * 2) + 1; //generate random number
    zombie.attr("src", "assets/images/gif/zomL2.gif"); //set gifs
    $("#areaL1").append(zombie); //add element to body

    zombieTimer7 = setInterval(() => {
        moveLeftZombies(zombie);
    }, 100);
}

function moveLeftZombies(zombie) {
    let zomLeft = parseInt(zombie.css('left'));
    zombie.css('left', zomLeft + 10);
}


//status box buttons
$('#btnMainMenu').click(function () {
    $('#containerMenu').css('display', 'block');
    $('#containerL1').css('display', 'none');
    $('#statusBox').css('display', 'none');
    location.reload();
});
$('#btnReplay').click(function () {
    $('#containerMenu').css('display', 'none');
    $('#containerL1').css('display', 'block');
    $('#statusBox').css('display', 'none');

    startGame();
});
$('#btnNextLevel').click(function () {
    $('#containerMenu').css('display', 'none');
    $('#containerL1').css('display', 'block');
    $('#statusBox').css('display', 'none');

    lvlTwo();
});











