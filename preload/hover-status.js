const { ipcRenderer } = require('electron')

function setStatus (status) {
  ipcRenderer.sendToHost('status', status)
}

window.addEventListener('mouseover', function (e) {
  // watch for mouseovers of anchor elements
  var el = e.target
  while (el) {
    if (el.tagName == 'A') {
      // set to title or href
      if (el.getAttribute('title'))
        setStatus(el.getAttribute('title'))
      else if (el.href)
        setStatus(el.href)
      return 
    }
    el = el.parentNode
  }
  setStatus(false)
})