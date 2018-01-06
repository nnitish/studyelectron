
const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', () =>{
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800
    });
    mainWindow.setMenu(null);

    mainWindow.loadURL('File://' + __dirname + '/index.html');
});