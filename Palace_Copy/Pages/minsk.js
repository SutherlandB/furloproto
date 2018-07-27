let img;
let img2;
let img3;
function setup() {
  createCanvas(600, 600); 
  img = loadImage("https://image.ibb.co/b6OK9J/germandogboy.png");
  console.log(img);
  img2 = loadImage("https://preview.ibb.co/cbbgpJ/niketech.png");
  img3 = loadImage ("https://image.ibb.co/fwUCDd/imageedit_5_2618171852.png")
  background(img3); 
}
let path = 610 ;
let path2 = -50;
let healthDead = 250
let showAlert = false 
function draw(){
background(img3); 
if (path>350) {path-=10}
image(img, path, 30);
if (path2<30){path2+= 10}

image(img2,path2, 280, img.width/1.1, img.height/1.1);
    strokeWeight(4);
   fill(255);
    //German Dog Boy box
    rect(10,45, 320,65,20,20);
    //Nike Tech Box
    rect (240,300,320, 65,20,20);
    //Main lower box
    rect(0, 500, 595, 95, 5, 5);
    //Left box with question
    rect(3, 502, 300, 90, 5, 5);    
    //Fight boxes and whatnot... 
    rect(383, 502, 210, 90, 5, 5);
    //Health Bars
    strokeWeight(4);
    fill(255,255,255);
    rect(28, 85, 250, 5, 20, 20)
    strokeWeight(0);
    fill(0,255,0);
    rect(28, 85, healthDead, 5, 20, 20)
    //Health Bar2
    strokeWeight(3);
    fill(255, 223, 0);
    rect(260, 345, 250, 5, 20, 20);
    fill(0);
    textSize(22);
    text("Fiorlo's Inner Demons", 23 , 72);
    text("Fiorlo", 253 , 330);
    text("What will", 15, 530);
    text("Fiorlo do?",15, 560); 
    textSize(40);
    text("Live", 400, 545);

    gameOver()
    
}

// x,y are coordinates of top left of rectangle
// w,h are the width and height of the rectangle
function mousePressed(){
    if ( isBoxClicked(383, 502, 210, 90)) {
        healthDead = max(healthDead- 50, 0);
        if (healthDead == 0){ showAlert = true}
    }
}
function isBoxClicked(x,y, w,h){
    const isBelowTop = mouseY > y;
    const isAboveBottom = mouseY < (y+h);
    const isRightOfLeft = mouseX > x;
    const isLeftofRight = mouseX < (x+w);
    const isInside = isBelowTop && isAboveBottom && isRightOfLeft && isLeftofRight;
    return isInside;
}


function gameOver(){

    if (showAlert){
       clear(600,600);
       fill(255);
       text("buy clothes",300,300);
    
}

}