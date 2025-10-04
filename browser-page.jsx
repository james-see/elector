var pathlib = require('path')

var BrowserPageSearch = React.createClass({
  componentDidUpdate: function (prevProps) {
    if (!prevProps.isActive && this.props.isActive)
      this.refs.input.getDOMNode().focus()
  },
  shouldComponentUpdate: function (nextProps, nextState) {
    return (this.props.isActive != nextProps.isActive)
  },
  onKeyDown: function (e) {
    if (e.keyCode == 13) {
      e.preventDefault()
      this.props.onPageSearch(e.target.value)
    }
  },
  render: function () {
    return <div id="browser-page-search" className={this.props.isActive ? 'visible' : 'hidden'}>
      <input ref="input" type="text" placeholder="Search..." onKeyDown={this.onKeyDown} />
    </div>
  }
})

var BrowserPageStatus = React.createClass({
  render: function () {
    var status = this.props.page.statusText
    if (!status && this.props.page.isLoading)
      status = 'Loading...'
    return <div id="browser-page-status" className={status ? 'visible' : 'hidden'}>{status}</div>
  }
})

var BrowserPage = React.createClass({
  componentDidMount: function () {
    // attach webview events
    for (var k in webviewEvents)
      this.refs.webview.getDOMNode().addEventListener(k, webviewHandler(this, webviewEvents[k]))

    // set location, if given
    if (this.props.page.location)
      this.navigateTo(this.props.page.location)
  },

  navigateTo: function (l) {
    var webview = this.refs.webview.getDOMNode()
    webview.setAttribute('src', l)
  },

  onPageSearch: function (query) {
    this.refs.webview.getDOMNode().executeJavaScript('window.find("'+query+'", 0, 0, 1)')
  },

  render: function () {
    return <div id="browser-page" className={this.props.isActive ? 'visible' : 'hidden'}>
      <BrowserPageSearch isActive={this.props.page.isSearching} onPageSearch={this.onPageSearch} />
      <webview ref="webview" preload="./preload/main.js" partition="persist:tor" onContextMenu={this.props.onContextMenu} />
      <BrowserPageStatus page={this.props.page} />
    </div>
  }  
})

function webviewHandler (self, fnName) {
  return function (e) {
    if (self.props[fnName])
      self.props[fnName](e, self.props.page, self.props.pageIndex)
  }
}

var webviewEvents = {
  'load-commit': 'onLoadCommit',
  'did-start-loading': 'onDidStartLoading',
  'did-stop-loading': 'onDidStopLoading',
  'did-finish-load': 'onDidFinishLoading',
  'did-fail-load': 'onDidFailLoad',
  'did-get-response-details': 'onDidGetResponseDetails',
  'did-get-redirect-request': 'onDidGetRedirectRequest',
  'dom-ready': 'onDomReady',
  'page-title-set': 'onPageTitleSet',
  'close': 'onClose',
  'destroyed': 'onDestroyed',
  'ipc-message': 'onIpcMessage',
  'console-message': 'onConsoleMessage'
}