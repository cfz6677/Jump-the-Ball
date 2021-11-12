let game = document.querySelector("#game");
let movementDisplay = document.querySelector('#movement');
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
    constructor(x, y, color, width, height, radius) {
        this.x = x;
        this.y = y;
        //this.vel = vel;
        this.color = color;
        // this.radius = radius;
        this.height = height;
        this.width = width;
        this.alive = true;
        this.render = function () {
            ctx.fillStyle = this.color; //change the color of the context (ctx)
            ctx.fillRect(this.x, this.y, this.width, this.height);




            // ctx.fillStyle = this.color, this.radius;
            // ctx.fillRect(this.x, this.vel, this.color, this.radius);

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
}
//==================Helper Functions==========//
function addNewBall() {
    shrek.alive = false;
    setTimeout(function () {
        let x = Math.floor(Math.random() * game.width) - 40;
        let y = Math.floor(Math.random() * game.height) - 80;
        shrek = new Crawler(x, y, "#bada55", 40, 80);
    }, 1000);
    return true;
}


// render() {
//     fill(this.color);
//     ellipse(this.pos.x, this.pos.y, this.radius * 2);
// }





// var ball1 = new Ball(100, 100, "white", 100, 100);
// var ball2 = new Ball(50, 50, "aqua", 100, 100);
// var ball3 = new Ball(50, 50, "aquamarine", 100, 100, 100);
// var ball4 = new Ball(50, 50, "azure", 100, 100);
// var ball5 = new Ball(50, 50, "black", 100, 100);
// var ball6 = new Ball(50, 50, "blue", 100, 100);
// var ball7 = new Ball(50, 50, "blueviolet", 100, 100);
// var ball8 = new Ball(50, 50, "charteuse", 100, 100);
// var ball9 = new Ball(50, 50, "coral", 100, 100);
// var ball10 = new Ball(50, 50, "cornflowerblue", 100, 100);
// var ball11 = new Ball(50, 50, "crimson", 100, 100);
// var ball12 = new Ball(50, 50, "cyan", 100, 100);
// var ball13 = new Ball(50, 50, "darkgreen", 100, 100);
// var ball14 = new Ball(50, 50, "darkmagenta", 100, 100);
// var ball15 = new Ball(50, 50, "gold", 100, 100);
// var ball16 = new Ball(50, 50, "gray", 100, 100);
// var ball17 = new Ball(50, 50, "green", 100, 100);
// var ball18 = new Ball(50, 50, "greenyellow", 100, 100);
// var ball19 = new Ball(50, 50, "honeydew", 100, 100);
// var ball20 = new Ball(50, 50, "hotpink", 100, 100);
// var ball21 = new Ball(50, 50, "indianred", 100, 100);
// var ball22 = new Ball(50, 50, "indigo", 100, 100);
// var ball23 = new Ball(50, 50, "lavender", 100, 100);
// var ball24 = new Ball(50, 50, "lightblue", 100, 100);
// var ball25 = new Ball(50, 50, "mediumspringgreen", 100, 100);
// var ball26 = new Ball(50, 50, "navy", 100, 100);
// var ball27 = new Ball(50, 50, "olive", 100, 100);
// var ball28 = new Ball(50, 50, "orange", 100, 100);
// var ball29 = new Ball(50, 50, "palegreen", 100, 100);
// var ball30 = new Ball(50, 50, "purple", 100, 100);

//===============Event Listener================//

window.addEventListener("DOMContentLoaded", function (e) {
    player = new Player(10, 436, "white", 10, 100);
    ball = new Ball(700, 436, "white", 100, 100);

});
document.addEventListener('keydown', movementHandler); // add create movement handler

startButton.addEventListener('click', function (e) {
    const runGame = setInterval(gameLoop, 120); // create game loop

});

//cancelButton.removeEventListener('click', function(e));
// const runGame = setInterval(gameLoop, 120); // create game loop
// });




// // ======= Functions
//  player, ctx, balls


//===============GUI==========//





function movementHandler(e) {
    console.log('movement', e.key);

    switch (e.key) {
        case 'w':
            player.y - 10 >= 0 ? player.y -= 10 : null;
            break;
        case 'a':
            player.x - 10 >= 0 ? player.x -= 10 : null;
            break;
        case 'd':
            player.x + 10 <= game.width ? player.x += 10 : null; //ternary operator
            break;
        case 'x':
            player.y + 10 <= game.height ? player.y += 10 : null;
            break;



    }
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
    ball.render()
    player.render();
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