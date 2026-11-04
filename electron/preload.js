const { ipcRenderer } = require("electron");

const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  saveFile: (filename, content) =>
    ipcRenderer.invoke("save-file", filename, content),
});
