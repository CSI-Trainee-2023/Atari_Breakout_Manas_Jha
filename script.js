//Game-Board Properties
let Game_Board;
let GB_Width = 800;
let GB_Height = 800;
let contx;


//floater properties
let f_width = 110;
let f_height = 15;
let f_velX = 10;


let floater = {
    x : GB_Width/2 - f_width/2,
    y : GB_Height - f_height/2 -30,
    width : f_width,
    height : f_height,
    vel_X : f_velX
}

//Ball properties
let ball_radius = 50;
let ball_X = GB_Width / 2 ;
let ball_Y = f_height -10;
let x_vel = 2;
let y_vel = 2;


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
    // draw_Floater();

    function draw_Ball(){
        contx.beginPath();
        contx.arc(ball_X , ball_Y ,ball_radius , Math.PI * 2);
        contx.fillStyle = "white";
        contx.fill();
        contx.closePath();
    }
    // draw_Ball();

    document.addEventListener("keydown" , move_floater);

}

function move_floater(event){
    if (event.code == "ArrowLeft"){
        floater.x -= floater.vel_X; 
    }

    else if(event.code == "ArrowRight"){
        floater.x += floater.vel_X;
    }
}