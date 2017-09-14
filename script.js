/* var = variable 
document.getElementById = HTML selector targeting the element with an "id" 
.addEventListener = Method to add an "event" such as "click" or "mouseover"; use a callback function to 
    quickly provide a response or action for that event that occurs.
.innerHTML = Changes the HTML text of an element
.disabled = Method that when true, disables a certain element
*/

var leftButton = document.getElementById("popup");
var rightButton = document.getElementById("remove");
var quote = document.getElementById("quote");
var subtext = document.getElementById("subtext");

leftButton.disabled = false;

leftButton.addEventListener("mouseover", function() {
    quote.innerHTML = "Click For the current time.";
});

rightButton.addEventListener("mouseover", function() {
    subtext.innerHTML = "Click to change the background.";
});

leftButton.addEventListener("click", function() {
    quote.innerHTML = Date();
});

rightButton.addEventListener("click", function() {
    document.body.style.backgroundImage = 'url(https://i.ytimg.com/vi/3g0reUIKCys/maxresdefault.jpg)';
    quote.innerHTML = "Hello";
    //leftButton.disabled = true;
});
