// Pro číselné hodnoty můžeme, dokonce v tomto případě musíme mít proměnou mimo funkci, protože ve funkci by pokaždé proměná zanikla!
let i = 1;
 
function Add() {
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    output.innerHTML += i + ". " + input.value + "<br>";
    i++;
}
 
// Přidání emoji rovnou do výstupního textu při kliknutí na tlačítko s emoji
document.getElementById("emojiButton").addEventListener("click", function() {
    let output = document.getElementById("output");
    output.innerHTML += i + ". " + input.value + "<br>";
    i++;

    function del
    
});