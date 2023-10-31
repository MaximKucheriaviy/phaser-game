const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });
  win.setMenuBarVisibility(false);
  win.loadURL("http://localhost:1234");
  win.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();
});
