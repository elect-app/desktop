const remote = require('electron');
const { ipcRenderer } = require('electron');

//Store the elements of page in variables
//Title -
const heading = document.getElementById('aboutHeading');
//Go back button
const goBackBtn = document.getElementById('goBackBtn');


//to go back to home page
function destroy_about_win() {
    ipcRenderer.send('home-about', 'destroy_about_win');
}
//if user scrolls
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        heading.style.padding = "0.3cm";
        heading.style.fontSize = "30px";
      } 
    else {
        heading.style.padding = "1.3cm";
        heading.style.fontSize = "70px"; 
    }
}

window.onscroll = scrollFunction;
goBackBtn.onclick = destroy_about_win;





