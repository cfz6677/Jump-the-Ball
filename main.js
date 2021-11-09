let canvas = document.querySelector("#game");
let movementDisplay = document.querySelector("moevement")
let start = document.querySelector("#top-right")
let player;
let balls;
let ctx = game.getContext('2d');

ctx fillStyle = 'yellow';
ctx strokeStyle = 'blue';
ctx linewidth = 10;

//======Canvas
game.setAttribute('400', getComputedStyle(game)['400']);
game.setAttribute('400', getComputedStyle(game)['400']);

window.addEventListener("DOMContentLoaded"), function (e) {
    player = new Player(5, 5, 20, 5, yellow)
    balls = new Balls(5, 5, )
}




// ===============Player and Balls===============
class Player {
    constructor(x, y, height, width, color) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
        
        this.render = function () {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}
class Balls {
    constructor(x, y, height, width, color) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;

        this.render = function () {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}

// ======= Functions
let canvas, ctx, ball


function init () {
   canvas.width = 400
   canvas.height = 400
   window.requestAnimationFrame(900)
}


//==============Objects

let ball = {
    radius: 30,
    velX: (Math.random() * 15 + 5) * (Math.floor(Math.random) * 2) ||
    velY: (Math.random() * 15 + 5) * (Math.floor(Math.random) * 2) ||

}
