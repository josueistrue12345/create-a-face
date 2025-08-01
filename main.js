const { app, BrowserWindow, ipcMain } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1000,
    minHeight: 700,
    title: 'Google AI Studio',
    titleBarStyle: 'customButtonsOnHover',
    frame: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: require('path').join(__dirname, 'preload.js')
    },
    show: false,
    backgroundColor: '#ffffff'
  });



  win.once('ready-to-show', () => {
    win.show();
  });

  win.loadURL('https://aistudio.google.com/app/prompts/new_chat');

  return win;
}

app.whenReady().then(() => {
  app.setName('Google AI Studio');
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});