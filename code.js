const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createCodeEditor() {
  const win = new BrowserWindow({
    width: 1600,
    height: 1000,
    minWidth: 1200,
    minHeight: 800,
    title: 'Google AI Code Studio',
    titleBarStyle: 'customButtonsOnHover',
    frame: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'code-preload.js')
    },
    show: false,
    backgroundColor: '#1e1e1e'
  });

  win.once('ready-to-show', () => {
    win.show();
  });

  win.loadFile('code-editor.html');

  return win;
}

app.whenReady().then(() => {
  app.setName('Google AI Code Studio');
  createCodeEditor();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createCodeEditor();
  }
});