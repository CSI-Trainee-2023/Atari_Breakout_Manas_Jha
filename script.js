const game_Board = document.querySelector("game-Board");
const contx = game_Board.getContext("2d");

//canvas or game-board dimesions
let GB_Width = game_Board.Width;
let GB_Height = game_Board.Height;


//Ball properties
let ball_radius = 50;
let ball_X = GB_Width /2 ;
let ball_Y = GB_Height - 30;

let x_vel = 2;
let y_vel = 2;

function draw_Ball(){
    contx.beginPath();
    contx.arc(ball_X , ball_Y ,ball_radius , Math.PI * 2);
    contx.fillStyle = "black";
    contx.fill();
    contx.closePath();
}

