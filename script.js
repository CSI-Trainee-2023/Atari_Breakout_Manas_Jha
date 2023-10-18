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
let ball_radius = 10;
let ball_X = GB_Width / 2 ;
let ball_Y = GB_Height /2;
let x_vel = 2;
let y_vel = 2;

let ball = {
    x :ball_X,
    y :ball_Y,
    radius : ball_radius
}


window.onload =function(){
   
    Game_Board = document.getElementById("game-Board");
    
    //canvas or game-board dimesions
    Game_Board.width = GB_Width;
    Game_Board.height = GB_Height;
    
    contx = Game_Board.getContext("2d");

    draw_Floater();
    draw_Ball();

    
    requestAnimationFrame(Draw);
    document.addEventListener("keydown" , move_floater);

}

function Draw(){

    requestAnimationFrame(Draw);

    contx.clearRect(0 , 0 , GB_Width ,GB_Height);
    // contx.fillStyle = "black";
    // contx.fillRect(floater.x , floater.y , floater.width , floater.height);
    draw_Floater(); 

    draw_Ball(); 
}


function draw_Floater(){
    contx.fillStyle = "black";
    contx.fillRect(floater.x , floater.y , floater.width , floater.height);
}

function draw_Ball(){
    // contx.beginPath();
    // console.log("hello");
    contx.fillStyle = "black";
    contx.arc(ball_X , ball_Y ,ball_radius , 0 , Math.PI * 2);
    contx.fill();
    // contx.closePath();
}




function move_floater(event){
    if (event.code == "ArrowLeft" && floater.x > 0){
        floater.x -= floater.vel_X; 
        console.log("1");
    }

    else if(event.code == "ArrowRight" && (floater.x+floater.width) < GB_Width){
        floater.x += floater.vel_X;
        console.log("2");
    }
}    

