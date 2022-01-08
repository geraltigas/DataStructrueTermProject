const {app, BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        height:709,
        width:632,
        backgroundColor: "#e3e7ed",
        frame:true,
        resizable:false,
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
