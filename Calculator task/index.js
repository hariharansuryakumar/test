let outputScreen = document.getElementById("screen");
function display(num)
{
    outputScreen.value += num;
}
function calculate()
{
    try{
        outputScreen.value = eval(outputScreen.value)
    }
    catch{
        alert("invalid")
    }
}
function clr()
{
    outputScreen.value = "";
}
function dlt(){
    outputScreen.value = outputScreen.value.slice(0,-1)
}