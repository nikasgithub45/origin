const button = document.querySelector("a");
const bg = document.querySelector("body");
const colours = ["green","blue","black"];
button.addEventListener("click",()=>{
    let rand = Math.floor(Math.random() * colours.length);
    bg.setAttribute("style","background:"+colours[rand]+"")
})
