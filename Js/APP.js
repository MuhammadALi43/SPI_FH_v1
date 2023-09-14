document.addEventListener("DOMContentLoaded", function() {
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    document.getElementById("demo").textContent = "The length of the string is: " + text.length;
    
    let text2 = "Apple, Banana, Kiwi";
    let part = text2.slice(7,13);
    document.getElementById("demo1").innerHTML = part; 
});
  