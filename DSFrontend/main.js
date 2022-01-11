const {app, BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        height: 800,
        width:1200,
        backgroundColor: "#ffffff",
        frame:true,
        resizable:false,
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true
        }
    })

    win.setMenu(null);
    win.loadFile("index.html")
    // win.loadURL("http://localhost:3000/")
}



app.whenReady().then(createWindow)
