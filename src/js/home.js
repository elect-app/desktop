const remote = require('electron');
const { ipcRenderer } = require('electron');

//About button
const aboutBtn = document.getElementById('aboutBtn');
//quit button
const quitBtn = document.getElementById('quitBtn');


//menu buttons
const closeBtn = document.getElementById('close-btn')
const minBtn = document.getElementById('min-btn')
const minIcon = document.getElementById('min-icon-')

//Functions - 

//Create about window
function createAboutWin() {
    ipcRenderer.send('home-about', 'create_about_win');
}
//quit app
function quit_the_app() {
    ipcRenderer.send('app', 'quit');
}
//Minimize window
function min() {
    const remote = (window.require) ? window.require("electron").remote : null;
    const WIN = remote.getCurrentWindow();
    WIN.minimize();
}


//If user clicks a button :
//about button -
aboutBtn.onclick = createAboutWin;
//quit btn -
quitBtn.onclick = quit_the_app;

//menu buttons click events
closeBtn.onclick = quit_the_app;
minBtn.onclick = min;

//animations
//for menu buttons-
closeBtn.onmouseover = (e) => {
    closeBtn.style.backgroundColor = 'rgb(241,68,104)';
}
closeBtn.onmouseout = (e) => {
    closeBtn.style.backgroundColor = 'dodgerblue';
}

minBtn.onmouseover = (e) => {
    minBtn.style.backgroundColor = 'rgb(69,199,125)';
    minIcon.style.backgroundColor = 'rgb(69,199,125)';
}
minBtn.onmouseout = (e) => {
    minBtn.style.backgroundColor = 'dodgerblue';
    minIcon.style.backgroundColor = 'dodgerblue';
}
