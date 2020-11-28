var image_container = document.getElementById("image-container");

var image1 = document.getElementById("image-1");
var image2 = document.getElementById("image-2");
var image3 = document.getElementById("image-3");

var leftBtn = document.getElementById("left");
var rightBtn = document.getElementById("right");

var image1X = image1.clientLeft;
var image2X = image2.clientLeft+image1.clientWidth;
var image3X = image3.clientLeft+image1.clientWidth+image2.clientWidth;



var speed = 20;

// image_container.addEventListener("mouseenter",()=>{
//     speed = 0
// });
// image_container.addEventListener("mouseleave",()=>{
//     speed = 1
// });

var canMoveRight = false;
var canMoveLeft = false;
var widthChecker = 0;
var timerChecker = 0;
var allWidthChecker = 0;

rightBtn.addEventListener("click",()=>{
    canMoveRight = true;
})
leftBtn.addEventListener("click",()=>{
    canMoveLeft = true;
})
function animate_images(){
    requestAnimationFrame(animate_images);
    image1.style.left = image1X+"px";
    image2.style.left = image2X+"px";
    image3.style.left = image3X+"px";

    if(widthChecker == 700){
        widthChecker = 0;
        canMoveRight = false;
        canMoveLeft = false;
    }
    if(canMoveRight){
        image1X -= speed;
        image2X -= speed;
        image3X -= speed;
        widthChecker += speed;
        allWidthChecker -= speed;
    }
    if(canMoveLeft){
        image1X += speed;
        image2X += speed;
        image3X += speed;
        widthChecker += speed;
        allWidthChecker += speed;
    }
}
animate_images();







// setInterval(() => {
//     if(indexChecker % 2 != 0){
//         canMove = true;
//     }
//     else{
//         canMove = false;
//     }
// }, 2000);


// function animate_images(){
//     requestAnimationFrame(animate_images);
//     image1.style.left = image1X+"px";
//     image2.style.left = image2X+"px";
//     image3.style.left = image3X+"px";
//     if(widthChecker == 700){
//         widthChecker = 0;
//         canMove = false
//     }
//     if(timerChecker >= 1000){
//         timerChecker = 0;
//         canMove = true;
//     }
//     if(canMove){
//         image1X -= speed;
//         image2X -= speed;
//         image3X -= speed;
//         widthChecker +=speed;
//     }
//     else{
        
//         timerChecker += speed;
//     }
// }
// animate_images();

















