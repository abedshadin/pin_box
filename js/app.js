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