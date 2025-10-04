<img src='https://cloud.githubusercontent.com/assets/616585/18190724/c47550ee-7092-11e6-9cb4-15e02b9ca298.png'/> 

# elector

[![Join the chat at https://gitter.im/elector-browser/Lobby](https://badges.gitter.im/elector-browser/Lobby.svg)](https://gitter.im/elector-browser/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Gratipay Elector](https://img.shields.io/badge/gratipay-donate-brightgreen.svg)](https://gratipay.com/elector-browser/)

TOR BROWSER IN ELECTRON

### NOTE:   
**Version 2.0** - Now using modern Electron with enhanced security features!

### WHY?:   
"A super lightweight Tor-connected browser built with modern web technologies."

Elector is a simple browser that auto-connects to your local Tor service. If you're running Tor via homebrew on macOS, this app works out of the box. For other setups, you may need to configure your torrc file.

### SECURITY IMPROVEMENTS (v2.0):   
✅ **Updated to Electron 33+** with latest security patches
✅ **Sandboxed renderer processes** enabled by default (resolves issue #3)
✅ **Context isolation** to prevent XSS attacks
✅ **No Node.js integration** in renderer for better security
✅ Follows modern [Electron security best practices](https://www.electronjs.org/docs/latest/tutorial/security)

### FORK ME:   
Please fork and make this better.   
READ the [CONTRIBUTING](https://github.com/jamesacampbell/elector/blob/master/CONTRIBUTING.md) doc for tips on how to help with this project. Thank you!

### Download Pre-built Binaries

Download the latest release for your platform from the [Releases page](https://github.com/jamesacampbell/elector/releases).

Automated builds are created on every push to master via GitHub Actions.

### Install instructions

1. **Install Tor** (required prerequisite):
   - macOS: `brew install tor && brew services start tor`
   - Linux: `sudo apt install tor && sudo systemctl start tor`
   - Windows: Download from [torproject.org](https://www.torproject.org/)

2. **Run from source**:
```bash
git clone https://github.com/jamesacampbell/elector.git
cd elector
npm install
npm start
```

3. **Build locally**:
```bash
npm run build          # Build for current platform
npm run build:mac      # macOS
npm run build:linux    # Linux
npm run build:win      # Windows
```

### tidbits:

The index.js file is configured to force the connection through the socks5 proxy 127.0.0.1:9050. So for OSX you can install tor via homebrew:

_in case you don't have tor install on OSX yet_

### OSX & homebrew easiness to get Tor installed as a service:

```
brew install tor
```
then make sure tor is set to run when your OS starts, then check duckduckgo onion (http://3g2upl4pq6kufc4m.onion) site to confirm it is working

### useful .onion links

duck duck go http://3g2upl4pq6kufc4m.onion

tor paste http://mc6nld3smffo3vgm.onion

not evil tor search http://hss3uro2hsxfogfq.onion

hidden wiki http://gxamjbnu7uknahng.onion/wiki/index.php/Main_Page

hidden answers http://answerstedhctbek.onion

librechan http://librechbtnnmzoa7.onion

searx http://ulrn6sryqaifefld.onion

etherpad hosted by riseup onion http://5jp7xtmox6jyoqd5.onion
