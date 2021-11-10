let game = document.querySelector("#game");
let startButton = document.querySelector("#top-right");
let score = document.querySelector("#top-left");
let cancelButton = document.querySelector("#bottom");
let player;
let ball;
let ctx = game.getContext('2d');

// ctx: fillStyle = 'yellow';
// ctx: strokeStyle = 'blue';
// ctx: linewidth = 10;

// //======Canvas================//
game.setAttribute('height', getComputedStyle(game)["height"]);
game.setAttribute('width', getComputedStyle(game)["width"]);



// // ===============Player and Balls===============
class Player {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
        this.alive = true;

        this.render = function () {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}
class Ball {
    constructor(x, y, color, radius) {
        this.x = x;
        this.y = y;
        //this.vel = vel;
        this.color = color;
        this.radius = radius;
        this.render = function () {
            ctx.fillStyle = this.color; //change the color of the context (ctx)
            ctx.fillRect(this.x, this.y, this.width, this.height);
            
            // ctx.fillStyle = this.color, this.radius;
            // ctx.fillRect(this.x, this.vel, this.color, this.radius);
        }
        // this.move = function () {
        //     this.vel.y += 0.1;
        //     this.pos.add(this.vel);
        //     if (this.x < this.radius) {
        //         this.x = this.radius;
        //         this.vel.x = -this.vel.x;
        //     }
        //     if (this.x > width - this.radius) {
        //         this.x = width - this.radius;
        //         this.vel.x = -this.vel.x;
        //     }
        //     if (this.y < this.radius) {
        //         this.y = this.radius;
        //         this.vel.y = -this.vel.y;
        //     }
        //     if (this.y > height - this.radius) {
        //         this.y = height - this.radius;
        //         this.vel.y = -this.vel.y;
        //     }
        // }
    }
}



// render() {
//     fill(this.color);
//     ellipse(this.pos.x, this.pos.y, this.radius * 2);
// }





// var ball1 = new Ball(100, 100, "white", 100);
// var ball2 = new Ball(50, 50, "aqua", 10);
// var ball3 = new Ball(50, 50, "aquamarine", 10);
// var ball4 = new Ball(50, 50, "azure", 10);
// var ball5 = new Ball(50, 50, "black", 10);
// var ball6 = new Ball(50, 50, "blue", 10);
// var ball7 = new Ball(50, 50, "blueviolet", 10);
// var ball8 = new Ball(50, 50, "charteuse", 10);
// var ball9 = new Ball(50, 50, "coral", 10);
// var ball10 = new Ball(50, 50, "cornflowerblue", 10);
// var ball11 = new Ball(50, 50, "crimson", 10);
// var ball12 = new Ball(50, 50, "cyan", 10);
// var ball13 = new Ball(50, 50, "darkgreen", 10);
// var ball14 = new Ball(50, 50, "darkmagenta", 10);
// var ball15 = new Ball(50, 50, "gold", 10);
// var ball16 = new Ball(50, 50, "gray", 10);
// var ball17 = new Ball(50, 50, "green", 10);
// var ball18 = new Ball(50, 50, "greenyellow", 10);
// var ball19 = new Ball(50, 50, "honeydew", 10);
// var ball20 = new Ball(50, 50, "hotpink", 10);
// var ball21 = new Ball(50, 50, "indianred", 10);
// var ball22 = new Ball(50, 50, "indigo", 10);
// var ball23 = new Ball(50, 50, "lavender", 10);
// var ball24 = new Ball(50, 50, "lightblue", 10);
// var ball25 = new Ball(50, 50, "mediumspringgreen", 10);
// var ball26 = new Ball(50, 50, "navy", 10);
// var ball27 = new Ball(50, 50, "olive", 10);
// var ball28 = new Ball(50, 50, "orange", 10);
// var ball29 = new Ball(50, 50, "palegreen", 10);
// var ball30 = new Ball(50, 50, "purple", 10);

//===============Event Listener================//

window.addEventListener("DOMContentLoaded", function (e) {
    player = new Player(100, 100, "white", 100, 100);
    ball = new Ball(5, 5, "blue", 2);

});
//document.addEventListener('keydown', movementHandler); // add create movement handler

startButton.addEventListener('click', function (e) {
    const runGame = setInterval(gameLoop, 120); // create game loop
 
});







// // ======= Functions
//  player, ctx, balls

function setup() {
    createGame(600, 880);
    for (i = 0; i < 5; i++) {
        balls.push(new Ball(
            createVector(random(width), random(height)),
            p5.Vector.random2D().mult(random(10)),
            30,
            color(random(255), random(255), random(255))
        ));
    }
}
function draw() {
    background(255);

    for (let i = 0; i < balls.length; i++) {
        for (let j = 0; j < i; j++) {
            balls[i].collide(balls[j]);
        }
    }

    for (let i = 0; i < balls.length; i++) {
        balls[i].move();
        balls[i].render();
    }
}
//===============GUI==========//
function addNewBsll() {
    Ball.alive = false;
    setTimeout(function () {
        let x = Math.floor(Math.random() * game.width) - 40;
        let y = Math.floor(Math.random() * game.height) - 80;
        shrek = new Crawler(x, y, "#bada55", 40, 80);
    }, 1000);
    return true;
}

//===================Game Loop============//
/**
 * @function gameLoop
 * @todo clear the canvas
 * @todo display the x and y coords of our hero
 * @todo check if the shrek is alive. ( a ) render shrek ( b ) check for collision
 * @todo render the hero
*/
function gameLoop() { 
    console.log("game running");
    // clear the canvas
    ctx.clearRect(0, 0, game.width, game.height);
    // @todo - add score
    // display the x and y coords of our donkey
    //movementDisplay.textContent = `X:${donkey.x}\nY:${donkey.y}`;
    // check to see if shrek is alive
    if (player.alive) { // 
        // render shrek
        player.render();
        // @todo - check collision (detchHit -> f)
        let hit = detectHit(player, ball);
    }
    // render donkey
    //player.render();
}


//===============collision detection==========//
function detectHit(p1, p2) {
    let hitTest = (
        p1.y + p1.height > p2.y &&
        p1.y < p2.y + p2.height &&
        p1.x + p1.width > p2.x &&
        p1.x < p2.x + p2.width
    );

    if (hitTest) {
        return addNewBall();
    } else {
        return false;
    }
}