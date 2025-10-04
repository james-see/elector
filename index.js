const { app, BrowserWindow } = require('electron')
const path = require('path')

// Configure Tor proxy - connects to local Tor service
// Default Tor SOCKS proxy: 127.0.0.1:9050
app.commandLine.appendSwitch('proxy-server', 'socks5://127.0.0.1:9050')

// Enable sandbox for security (addresses issue #3)
app.commandLine.appendSwitch('enable-sandbox')

let mainWindow = null

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1030,
    height: 720,
    frame: false,
    webPreferences: {
      // Security improvements
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      webviewTag: true,
      preload: path.join(__dirname, 'preload', 'main.js')
    }
  })

  mainWindow.loadFile('browser.html')

  mainWindow.on('closed', function() {
    mainWindow = null
  })
}

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow()
  }
})

app.whenReady().then(() => {
  createWindow()
})
