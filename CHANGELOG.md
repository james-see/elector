# Changelog

## Version 2.0.0 - October 2025

### 🔐 Major Security Improvements
- **Updated to Electron 33.2.0** (from ancient v0.28.2 from 2015)
- **Enabled Chromium sandboxing** with `--enable-sandbox` flag
- **Context isolation** enabled to prevent XSS attacks
- **Node.js integration disabled** in renderer processes
- Follows [Electron Security Best Practices](https://www.electronjs.org/docs/latest/tutorial/security)
- **Resolves Issue #3**: Sandboxing chromium to make it secure from XSS

### 🚀 CI/CD & Automation
- **GitHub Actions** workflow for automated builds on push to master
- Multi-platform builds: macOS (DMG/ZIP), Linux (AppImage/DEB), Windows (EXE)
- Automated release creation with version tagging
- Build artifacts automatically uploaded to GitHub Releases

### 📦 Dependency Updates
- Upgraded from `electron-prebuilt` 0.28.2 to `electron` 33.2.0
- Added `electron-builder` 25.1.8 for cross-platform builds
- Modern Node.js compatibility (tested with Node 22+)

### 📝 Code Modernization
- Updated deprecated Electron APIs:
  - `require('app')` → `require('electron').app`
  - `require('browser-window')` → `require('electron').BrowserWindow`
  - `loadUrl()` → `loadFile()`
  - Modern `app.whenReady()` pattern
- Enhanced security in webPreferences configuration
- Improved code structure and documentation

### 📖 Documentation
- Updated README with security improvements
- Added installation instructions for all platforms
- Added build instructions
- Clarified Tor prerequisites
- Added link to automated releases

### 🐛 Issue Management
- **Closed #3** (sandboxing/XSS) - ✅ Resolved with security updates
- **Closed #4** (Chromium add-ons) - Not planned, out of scope
- **Closed #6** (Project status) - Updated with v2.0 status
- **Closed #7** (Human-friendly addresses) - Out of scope
- **Kept #5 open** (Custom Tor ports) - Valid enhancement for future

### 🔄 Migration Notes
If upgrading from v1.x:
1. Run `npm install` to get new dependencies
2. Tor must be running on 127.0.0.1:9050 (default)
3. Modern Electron requires newer Node.js (v18+)
4. Old React components still use deprecated APIs - will need updates in future releases

### Known Limitations
- React components still use old JSX transformer (needs React upgrade)
- No settings UI yet (hardcoded Tor proxy settings)
- Requires manual Tor installation and setup

### Coming Soon
- Settings UI for configurable Tor ports (Issue #5)
- Modern React upgrade
- Additional security hardening

