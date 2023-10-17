// //Game-Board Properties
// let GB_Width = 800;
// let GB_Height = 1000;


//Ball properties
let ball_radius = 50;
let ball_X = GB_Width /2 ;
let ball_Y = GB_Height - 30;

let x_vel = 2;
let y_vel = 2;

window.onload =function(){
   
    const game_Board = document.getElementById("game-Board");
    
    //canvas or game-board dimesions
    let GB_Width = game_Board.clientWidth;
    let GB_Height = game_Board.clientHeight;
    // game_Board.clientWidth = GB_Width;
    // game_Board.clientHeight = GB_Height;
    
    const contx = game_Board.getContext("2d");
    
    // function draw_Ball(){
    //     contx.beginPath();
    //     contx.arc(ball_X , ball_Y ,ball_radius , Math.PI * 2);
    //     contx.fillStyle = "black";
    //     contx.fill();
    //     contx.closePath();
    // }

}

