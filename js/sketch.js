function setup() {
    createCanvas(canvasWidth, canvasHeight);
    ellipseMode(RADIUS);
}

function draw() {
    background(51);

    //drawScore();
    //drawTime();

     drawBoard();
     drawPlayer(game.player);
     drawEnemy(game.enemy);
    //moveEnemy();
}