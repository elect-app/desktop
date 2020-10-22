const remote = require('electron');
const { ipcRenderer } = require('electron');

function openWin() {
    ipcRenderer.send('welcome-screen', 'animation-over');
}

setTimeout(openWin, 6500)