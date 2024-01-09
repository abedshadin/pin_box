document.getElementById('gen-pin').addEventListener('click',function () {
const generatedPin = newPin();
const pinField = document.getElementById('pinField');
pinField.value = generatedPin;

})
function newPin(){
    const pin = genPin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return newPin();
    }
}
function genPin (){
    const randomPin = Math.round(Math.random()*10000);
    return randomPin;
}

document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typeNumber');
    const previousNumber = typeNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typeNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousNumber.split('')
            digits.pop();
            const remainDigits = digits.join('');
            typeNumberField.value = remainDigits;
        }
    }
    else{
        
       
        const newType = previousNumber + number;
        typeNumberField.value = newType;
        
    }

})