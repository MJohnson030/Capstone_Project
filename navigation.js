//When the users scrolls, the function stickyNav is run
window.onscroll = function () {
    stickyNav()
};

//Get the navigation bar from the HTML document
var navigationBar = document.getElementById("navigationBar");

//Finds the offset position of the navigation bar and attaches it to the variable
var sticky = navigationBar.offsetTop;

function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navigationBar.classList.add("sticky")
    } else {
        navigationBar.classList.remove("sticky");
    }
}