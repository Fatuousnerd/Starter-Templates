const { dialog, ipcMain } = require("electron");

const { app, BrowserWindow } = require("electron");
const path = require("path");
const fs = require("fs");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsoloation: true,
      nodeIntegation: false,
    },
  });

  win.loadFile("./source/index.html"); // -- INSERT FILENAME HERE
};

ipcMain.handle("save-file", async (event, filename, content) => {
  const filePath = dialog.showSaveDialogSync({ defaultPath: filename });
  if (!filePath) return false;
  fs.writeSync(filePath, content);
  return true;
});

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
