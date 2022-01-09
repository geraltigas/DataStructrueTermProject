const {app, BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        height: 800,
        width:1200,
        backgroundColor: "#ffffff",
        frame:true,
        resizable:true,
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true
        }
    })
    win.loadFile("index.html")
    // win.loadURL("http://localhost:3000/")
}



app.whenReady().then(createWindow)
