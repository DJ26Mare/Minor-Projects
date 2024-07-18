// fisrt make select the buttns and the body through dom

const buttons = document.querySelectorAll('.button');
const body = document.querySelectorAll("body");

// now access buttons with the help of forEach
let color = 0;

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(kuchToHai){// its added as various on screen events such as mouse clicks are required
console.log(kuchToHai);
console.log(kuchToHai.target);
//document.body.style.backgroundColor = body.button;
color = (color+1)%4;
switch(color){
    case 0:
        document.body.style.backgroundColor = "grey";
        break;
    case 1:
        document.body.style.backgroundColor = "white";
        break;
    case 2:
        document.body.style.backgroundColor = "blue";
        break;
    case 3:
        document.body.style.backgroundColor = "yellow";
        break;
        
        default:
            document.body.style.backgroundColor = "white";
            console.log(color);
}
}
)})
  



