//Game-Board Properties
let Game_Board;
let GB_Width = 800;
let GB_Height = 800;
let contx;

//Ball properties
let ball_radius = 50;
let ball_X = GB_Width / 2 ;
let ball_Y = GB_Height - 30;
let x_vel = 2;
let y_vel = 2;

//floater properties
let f_width = 110;
let f_height = 15;
let floater = {
    x : GB_Width/2 - f_width/2,
    y : GB_Height - f_height/2 -30,
    width : f_width,
    height : f_height
}

window.onload =function(){
   
    Game_Board = document.getElementById("game-Board");
    
    //canvas or game-board dimesions
    Game_Board.width = GB_Width;
    Game_Board.height = GB_Height;
    
    const contx = Game_Board.getContext("2d");
    

    function draw_Floater(){
        contx.fillStyle = "black";
        contx.fillRect(floater.x , floater.y , floater.width , floater.height);
    }
    draw_Floater();

    // function draw_Ball(){
    //     contx.beginPath();
    //     contx.arc(ball_X , ball_Y ,ball_radius , Math.PI * 2);
    //     contx.fillStyle = "black";
    //     contx.fill();
    //     contx.closePath();
    // }

}

