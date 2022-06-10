"use strict";

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

function createWindow () {
  const workAreaSize = electron.screen.getPrimaryDisplay().workAreaSize;
  const width = 800;
  const height = 600;
  const x = (workAreaSize.width - width) / 2;
  const y = (workAreaSize.height - height) / 2;

  const mainWindow = new BrowserWindow({
    width: width,
    height: height,
    autoHideMenuBar : true,
    webPreferences: {
      nodeIntegration: true
    },
  })
  mainWindow.loadFile(`${__dirname}/src/index.html`);
}

app.on('ready', () => {
  createWindow();
});
app.on('window-all-closed', function () {
  app.quit();
})
