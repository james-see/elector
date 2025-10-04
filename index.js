const { app, BrowserWindow } = require('electron')
const path = require('path')
const remoteMain = require('@electron/remote/main')

// Initialize @electron/remote
remoteMain.initialize()

// Configure Tor proxy - connects to local Tor service
// Default Tor SOCKS proxy: 127.0.0.1:9050
app.commandLine.appendSwitch('proxy-server', 'socks5://127.0.0.1:9050')

let mainWindow = null

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1030,
    height: 720,
    frame: false,
    webPreferences: {
      // Security improvements - balanced for compatibility with legacy code
      nodeIntegration: true,  // Required for old React code using require()
      contextIsolation: false, // Required for old code accessing Electron APIs
      webviewTag: true,
      preload: path.join(__dirname, 'preload', 'main.js')
    }
  })

  // Enable @electron/remote for this window
  remoteMain.enable(mainWindow.webContents)

  mainWindow.loadFile('browser.html')

  // Open DevTools for debugging (uncomment if needed)
  // mainWindow.webContents.openDevTools()

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
