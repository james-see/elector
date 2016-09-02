var app  = require('app')
var BrowserWindow = require('browser-window')
app.commandLine.appendSwitch('proxy-server', 'socks5://127.0.0.1:9050')
var mainWindow = null

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit()
  }
})

app.on('ready', function () {
  mainWindow = new BrowserWindow({ width: 1030, height: 720, frame: false })
  mainWindow.loadUrl('file://' + require('path').join(__dirname, 'browser.html'))
  mainWindow.on('closed', function() {
    mainWindow = null
  })
})
