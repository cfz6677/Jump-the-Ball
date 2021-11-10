let game = document.querySelector("#game");
let movementDisplay = document.querySelector("moevement")
let start = document.querySelector("#top-right")
let player;
let ball;
let ctx = game.getContext('2d');

// ctx: fillStyle = 'yellow';
// ctx: strokeStyle = 'blue';
// ctx: linewidth = 10;

// //======Canvas================//
game.setAttribute('height', getComputedStyle(game)["height"]);
game.setAttribute('width', getComputedStyle(game)["width"]);

// window.addEventListener("DOMContentLoaded"), function (e) {
//     player = new Player(5, 5, 10, 5, yellow)
//     ball = new Ball(5, 5, color, radius )
// }



// // ===============Player and Balls===============
class Player {
    constructor(pos, height, width, color) {
        this.pos = pos;
        this.height = height;
        this.width = width;
        this.color = color;

        this.render = function () {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.pos, this.width, this.height, this.color);
        }
    }
}
class Ball {
    constructor(pos, vel, color, radius) {
        this.pos = pos;
        this.vel = vel;
        this.color = color;
        this.radius = radius;
        this.render = function () {
            var canvas = document.getElementById('game');
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');

                // ctx.fillStyle = 'rgb(200, 0, 0)';
                // ctx.fillRect(10, 10, 50, 50);

                // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
                // ctx.fillRect(30, 30, 50, 50);

                ctx.fillStyle = this.color, this.radius;
                ctx.fillRect(this.pos, this.vel, this.color, this.radius);
            }
        }
    }
}

move() {
    this.vel.y += 0.1;
    this.pos.add(this.vel);
    if (this.pos.x < this.radius) {
        this.pos.x = this.radius;
        this.vel.x = -this.vel.x;
    }
    if (this.pos.x > width - this.radius) {
        this.pos.x = width - this.radius;
        this.vel.x = -this.vel.x;
    }
    if (this.pos.y < this.radius) {
        this.pos.y = this.radius;
        this.vel.y = -this.vel.y;
    }
    if (this.pos.y > height - this.radius) {
        this.pos.y = height - this.radius;
        this.vel.y = -this.vel.y;
    }
}

render() {
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.radius * 2);
}





var ball1 = new Ball(100, 100, "white", 100);
var ball2 = new Ball(50, 50, "aqua", 10);
var ball3 = new Ball(50, 50, "aquamarine", 10);
var ball4 = new Ball(50, 50, "azure", 10);
var ball5 = new Ball(50, 50, "black", 10);
var ball6 = new Ball(50, 50, "blue", 10);
var ball7 = new Ball(50, 50, "blueviolet", 10);
var ball8 = new Ball(50, 50, "charteuse", 10);
var ball9 = new Ball(50, 50, "coral", 10);
var ball10 = new Ball(50, 50, "cornflowerblue", 10);
var ball11 = new Ball(50, 50, "crimson", 10);
var ball12 = new Ball(50, 50, "cyan", 10);
var ball13 = new Ball(50, 50, "darkgreen", 10);
var ball14 = new Ball(50, 50, "darkmagenta", 10);
var ball15 = new Ball(50, 50, "gold", 10);
var ball16 = new Ball(50, 50, "gray", 10);
var ball17 = new Ball(50, 50, "green", 10);
var ball18 = new Ball(50, 50, "greenyellow", 10);
var ball19 = new Ball(50, 50, "honeydew", 10);
var ball20 = new Ball(50, 50, "hotpink", 10);
var ball21 = new Ball(50, 50, "indianred", 10);
var ball22 = new Ball(50, 50, "indigo", 10);
var ball23 = new Ball(50, 50, "lavender", 10);
var ball24 = new Ball(50, 50, "lightblue", 10);
var ball25 = new Ball(50, 50, "mediumspringgreen", 10);
var ball26 = new Ball(50, 50, "navy", 10);
var ball27 = new Ball(50, 50, "olive", 10);
var ball28 = new Ball(50, 50, "orange", 10);
var ball29 = new Ball(50, 50, "palegreen", 10);
var ball30 = new Ball(50, 50, "purple", 10);



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
function gameLoop() {
    ctx.clearRect(0, 0, game.width, game.height);
    movementDisplay.textContent = `X:${player.x}\nY:${ball.y}`;
    if (ball.alive) {
        ball.render();
        let hit = detectHit(player, ball);
    }
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