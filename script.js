function clearScreen(){
    document.getElementById("result").value="";
}
 function setScreenValue(value){
   document.getElementById("result") .value +value;
 }
function calculativeResult() {
    const resultElement = document.getElementById("result");
    const expression=resultElement.value.trim();
    if(expression===""){
        reultElement.value="Enter an expression";
        result;
    }
    try{
        resultElement.value=eval(expression)
    }catch(e){
        resultElement.value="invalid expression";
    }
}