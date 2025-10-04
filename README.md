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

### Configuration

Elector is configured to route all traffic through the SOCKS5 proxy at `127.0.0.1:9050` (default Tor port).

### Tor v3 Onion Addresses

**Note**: Modern Tor uses longer v3 onion addresses (56 characters). Old v2 addresses (16 characters) are deprecated and no longer work.

**Example v3 address**:
```
https://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/
```

### Useful .onion Links

- **DuckDuckGo**: `http://duckduckgogg42xjoc72x3sjasowoarfbgcmvfimaftt6twagswzczad.onion/`
- **Tor Project**: `http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion/`
- **ProPublica**: `http://p53lf57qovyuvwsc6xnrppyply3vtqm7l6pcobkmyqsiofyeznfu5uqd.onion/`

**Note**: HTTP is used for `.onion` addresses because Tor already provides end-to-end encryption. HTTPS works too but isn't necessary for privacy.

For more onion sites, visit [The Hidden Wiki](https://thehiddenwiki.com/) or use DuckDuckGo's search.

### Testing Your Connection

To verify Tor is working:
1. Visit: `https://check.torproject.org/`
2. You should see: "Congratulations. This browser is configured to use Tor."
