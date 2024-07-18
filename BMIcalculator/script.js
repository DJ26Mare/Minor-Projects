const forms =document.querySelector('form');

// a form is submitted in two types i.e, GET and POST type which gets to the url/server so in order in to stop the values going away we use event

// const height = parseInt(document.querySelector('#height').value)
// THIS usecase will give you empty value as form is not


forms.addEventListener('submit',function(event){
event.preventDefault()   // stop your default action
    
const height = parseInt(document.querySelector('#height').value) // the value of weight is recieved in the form of STRING but is convereted to INT
const weight = parseInt(document.querySelector('#weight').value)

const result =document.querySelector('#results');

// conditions
if ( weight <=0 || isNaN(weight)) {   // isNAN() basically checks the value is valid or not  
    result.innerHTML = `given value of weight is not valid ${weight}`
}
else if ( height <=0 || isNaN(height)) {   
    result.innerHTML = `given value of height is not valid ${height}`
}
else{
    const bmi = ((weight/((height*height)/10000)).toFixed(2)); // here .tofixed basically gives a valid answer upto the provided decimal values
    result.innerHTML = `<span>${bmi}</span>`;
    
let message = `<span>${bmi} => `
if(bmi < 18.6){
    message+= `Underweight</span>`;
}
else if(bmi > 18.6 & bmi < 24.9 ){
   message+= `Normal</span>`;

}
 else{
    message+=`OverWeight</span>`;
}
result.innerHTML= message;
}
});
