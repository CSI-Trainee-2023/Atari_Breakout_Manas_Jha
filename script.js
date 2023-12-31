//Game-Board Properties
let Game_Board;
let GB_Width = 800;
let GB_Height = 800;
let contx;


//floater properties
let f_width = 110;
let f_height = 15;
let f_velX = 10;

// floater object
let floater = {
    x: GB_Width / 2 - f_width / 2,
    y: GB_Height - f_height / 2 - 30,
    width: f_width,
    height: f_height,
    vel_X: f_velX
}

//Ball properties
let ball_radius = 12;
let ball_X = GB_Width / 2; // initial ball x coordinate 
let ball_Y = GB_Height / 2;  // initial ball y coordinate
let ball_x_vel = 5; //velocity of the ball in x direction 
let ball_y_vel = -5; // velocity of the in the y direction

// ball object
let ball = {
    x: ball_X,
    y: ball_Y,
    radius: ball_radius
}


//black properties
let block_list = []; // list of blocks to keep a count of the blocks on the canvas
let block_width = 70;
let block_height = 20;
let block_Columns = 9;
let block_Rows = 3;
let block_Max_rows = 6
let block_count = 0;

let block_X = 45;
let block_Y = 45;

window.onload = function () { // windows on load function to execute the js functions after the page has been loaded completely

    Game_Board = document.getElementById("game-Board"); // getting the id reference of the canvas

    //canvas or game-board dimesions
    Game_Board.width = GB_Width; // providing width to the canvas
    Game_Board.height = GB_Height; // providing height to the canvas
    contx = Game_Board.getContext("2d");

    Draw()

    document.addEventListener("keydown", move_floater);
    create_Blocks();



}

function Draw() {
    // draw_Floater();
    // draw_Ball();

    // ball_movement();
    contx.clearRect(0, 0, GB_Width, GB_Height);
    // contx.cleararc(0,0,ball_radius , 0 , Math.PI * 2)
    // contx.fillStyle = "black";
    // contx.fillRect(floater.x , floater.y , floater.width , floater.height);

    // drawing objects on the canvas
    draw_Floater();

    ballFloaterCollision();
    ballBlockCollision();
    draw_Ball();
    ball_movement();


    if (ball.y <= 0) { //if ball touches the uper boundary
        ball_y_vel *= -1;
    }
    if (ball.x <= 0) { // if ball touches the left boundary
        ball_x_vel *= -1;
    }
    if (ball.x >= GB_Width) { // if ball touches the right boundary
        ball_x_vel *= -1;
    }
    if (ball.y + ball_y_vel > GB_Height - ball.radius) {
        // Ball hit the paddle
        if (ball.y + ball_radius >= floater.y && ball.x < floater.x + f_width) {
            //   dy = -dy;
            ball_y_vel *= -1;
        }
    }
    // if (ball.x == floater.x && ball.x < floater.x + floater.width){
    //     ball_y_vel *= -1;
    // }

    // if(top_collision(ball , floater) || bottom_collision(ball , floater)){
    //     ball_y_vel *= -1;
    // }
    // if (ball.x == floater.x && ball.x < floater.x + floater.width){
    //     ball_y_vel *= -1;
    // }    //     ball_x_vel *= -1; 
    // }

    contx.fillStyle = "Blue";
    for (let i = 0; i < block_list.length; i++) {
        let block_var = block_list[i];
        if (!block_var.break) {
            contx.fillRect(block_var.x, block_var.y, block_var.width, block_var.height);
        }
    }
    requestAnimationFrame(Draw); // to recal the function Draw in 60 fps for smooth animation 
}


function draw_Floater() {
    contx.fillStyle = "black";
    contx.fillRect(floater.x, floater.y, floater.width, floater.height);
}

function draw_Ball() {
    contx.beginPath();
    // console.log("hello");
    contx.fillStyle = "black";
    contx.arc(ball.x, ball.y, ball_radius, 0, Math.PI * 2);
    contx.fill();
    contx.closePath();

}

function ball_movement() {
    // console.log(2);
    ball.x += ball_x_vel;
    ball.y += ball_y_vel;
}

// function collision_detection(a,b){
//     return (a.x < b.x + b.width) &&
//             (a.x + a.radius > b.width) &&
//             (a.y < b.y + b.height) &&
//             (a.y + a.radius > b.y);

// }

// function top_collision(ball , block){
//     return collision_detection(ball ,block) && (ball.y + ball.radius) >=  block.y;
// }

// function bottom_collision(ball , block){
//     return collision_detection(ball , block) && (block.y + block.height) >= ball.y;
// }

// function left_collision(ball , block){
//     return collision_detection(ball , block) && (ball.x + ball.radius) >= block.x;
// }

// function right_collision(ball , block){
//     return collision_detection(ball , block) && (block.x + block.width) >= ball.x;
// }

function create_Blocks() {
    block_list = [];
    for (let c = 0; c < block_Columns; c++) {
        for (let r = 0; r < block_Rows; r++) {
            let block = {
                x: block_X + c * block_width + c * 10,
                y: block_Y + r * block_height + r * 10,
                width: block_width,
                height: block_height,
                break: false
            }
            block_list.push(block)
        }
    }
    block_count = block_list.length;
}

function ballFloaterCollision() {
    // Check for collision between the ball and the floater
    if (
        ball.x + ball.radius > floater.x &&
        ball.x - ball.radius < floater.x + floater.width &&
        ball.y + ball.radius > floater.y
    ) {
        // Reverse the vertical direction of the ball
        ball_y_vel = -ball_y_vel;
    }
}

function ballBlockCollision() {
    for (let i = 0; i < block_list.length; i++) {
        let block = block_list[i];
        if (!block.break) {
            if (
                ball.x + ball.radius > block.x &&
                ball.x - ball.radius < block.x + block.width &&
                ball.y + ball.radius > block.y &&
                ball.y - ball.radius < block.y + block.height
            ) {
                // Reverse the vertical direction of the ball
                ball_y_vel = -ball_y_vel;
                // Mark the block as "broken" so it won't be drawn or checked for collision again
                block.break = true;
                // Decrease the block count
                block_count--;
            }
        }
    }
}


function move_floater(event) {
    if (event.code == "ArrowLeft" && floater.x > 0) {
        floater.x -= floater.vel_X;
        console.log("1");
    }

    else if (event.code == "ArrowRight" && (floater.x + floater.width) < GB_Width) {
        floater.x += floater.vel_X;
        console.log("2");
    }
}

