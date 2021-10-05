const hex = [0 , 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("bg_button"); // for the button
const color = document.getElementById("bg_info"); // to show the color info
btn.addEventListener('click',function () {
    let cl = "#";
    for(let i = 0; i < 6; i++) 
        cl = cl + (hex[Math.floor(Math.random() * hex.length)]);
    
    document.body.style.backgroundColor = cl;
    color.innerHTML = cl;
})
