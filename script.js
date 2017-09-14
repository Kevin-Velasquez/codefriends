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
var images = [
	'http://4.bp.blogspot.com/-btXyUVef-ps/TsnxFxt-A6I/AAAAAAAABLs/2qFK-7dLjW4/s1600/nick-brandt-wildlife-animal-black-and-white-portraits-buffalo-group-portrait-amboseli-2006.jpg',
	'http://tailandfur.com/wp-content/uploads/2014/09/beautiful-and-cute-animals-wallpaper-2.jpg',
    'http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/A-G/caracal-run.ngsversion.1435834128807.adapt.1900.1.jpg',
    'https://static.pexels.com/photos/86462/red-kite-bird-of-prey-milan-raptor-86462.jpeg',
    'http://4.bp.blogspot.com/-btXyUVef-ps/TsnxFxt-A6I/AAAAAAAABLs/2qFK-7dLjW4/s1600/nick-brandt-wildlife-animal-black-and-white-portraits-buffalo-group-portrait-amboseli-2006.jpg'
]
//'https://i.ytimg.com/vi/3g0reUIKCys/maxresdefault.jpg'
var index = 0;

//leftButton.disabled = false;

/*leftButton.addEventListener("mouseover", function() {
    quote.innerHTML = "Click For the current time.";
});

rightButton.addEventListener("mouseover", function() {
    subtext.innerHTML = "Click to change the background.";
});*/

rightButton.onmouseover = function() {subtext.innerHTML = "Click to change the background."}
rightButton.onmouseout = function() {subtext.innerHTML = " "}

leftButton.onmouseover = function() {quote.innerHTML = "Click for the current time."}
leftButton.onmouseout = function() {quote.innerHTML = " "}

leftButton.addEventListener("click", function() {
    quote.innerHTML = Date();
});

rightButton.addEventListener("click", function() {
    document.body.style.backgroundImage = 'url(' + images[index] + ')';
    index = (index + 1 < images.length) ? (index + 1) : 0;
    //quote.innerHTML = "Hello";
    //leftButton.disabled = true;
});
