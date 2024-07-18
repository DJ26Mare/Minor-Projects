// first generate a random color

const randomColor = function () {
    let color = '#';
    const hex = '0123456789ABCDEF'; // hexadecimal color code
    
    for (let i = 0; i < 6; i++) {  // as the color code has 6 characters
        let random =Math.floor( Math.random() *16); // floor is used to round the number to the nearest integer
        color+=hex[random]; // toString(16) is used to convert the number to hexadecimal
       
    
    } return color;
   
};
// console.log(randomColor());
let intervalId ; // delclared as its outside the scope of the function it can be accessed by both the functions
const changeColor = function () {
    if(intervalId==null){
        document.body.style.backgroundColor = randomColor();
    }
   
    intervalId=setInterval(changeBGcolor, 1200);
    function changeBGcolor () {
        document.body.style.backgroundColor = randomColor();
    }
};
const stopColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  
}

document.querySelector('#start').addEventListener('click', changeColor);



document.querySelector('#stop').addEventListener('click', stopColor ); 



