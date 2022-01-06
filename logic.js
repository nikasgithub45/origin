<<<<<<< HEAD
const button = document.querySelector("a");
const bg = document.querySelector("body");
const colours = ["green","blue","black"];
button.addEventListener("click",()=>{
    let rand = Math.floor(Math.random() * colours.length);
    bg.setAttribute("style","background:"+colours[rand]+"")
})
=======
const button = document.querySelector("a");
const bg = document.querySelector("body");
const colours = ["green","blue","black","white"];
button.addEventListener("click",()=>{
    let rand = Math.floor(Math.random() * colours.length);
    bg.setAttribute("style","background:"+colours[rand]+"")
})
>>>>>>> 0d243a9b392802291b6b13538e4583c9fb9731dd
