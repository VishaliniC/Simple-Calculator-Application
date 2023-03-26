let outputScreen = document.getElementById("output-screen");
let changeBackground = document.getElementById("backgound");
let main = document.getElementById("main");

changeBackground.addEventListener('click',function(){
    main.style.backgroundColor=`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
})

display = (num) => outputScreen.value += num;
clr = () => outputScreen.value = "";
del = () => outputScreen.value = outputScreen.value.slice(0,-1);
result = () => {
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(error){
        outputScreen.value = "Invalid";
    }
}