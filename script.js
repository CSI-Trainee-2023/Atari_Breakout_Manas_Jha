// //Game-Board Properties
let GB_Width = 800;
let GB_Height = 800;


//Ball properties
let ball_radius = 50;
let ball_X = GB_Width / 2 ;
let ball_Y = GB_Height - 30;
let x_vel = 2;
let y_vel = 2;

//floater properties
let f_width = 85;
let f_height = 10;
let floater = {
    x : GB_Width/2 - f_width/2,
    y : GB_Height - f_height/2,
    width : f_width,
    height : f_height
}

window.onload =function(){
   
    const game_Board = document.getElementById("game-Board");
    
    //canvas or game-board dimesions
    game_Board.width = GB_Width;
    game_Board.height = GB_Height;
    
    const contx = game_Board.getContext("2d");
    
    // function draw_Ball(){
    //     contx.beginPath();
    //     contx.arc(ball_X , ball_Y ,ball_radius , Math.PI * 2);
    //     contx.fillStyle = "black";
    //     contx.fill();
    //     contx.closePath();
    // }

}

