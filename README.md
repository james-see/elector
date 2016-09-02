<img src='https://cloud.githubusercontent.com/assets/616585/18190724/c47550ee-7092-11e6-9cb4-15e02b9ca298.png'/> 
# elector

[![Join the chat at https://gitter.im/elector-browser/Lobby](https://badges.gitter.im/elector-browser/Lobby.svg)](https://gitter.im/elector-browser/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

TOR BROWSER IN ELECTRON

### NOTE:   
THIS IS IN ALPHA, USER BEWARE. 

### WHY?:   
I made this because I wanted a simple browser that auto-connected to my tor service running on my MacBook that I installed via homebrew. If you are running tor in OSX via homebrew, then this app will work out of the box if you follow the install instructions below. Otherwise, you may have to edit your torrc file and (gosh!) actually use the terminal / command line / whatever you call it.

### SECURITY ISSUES:   
ELECTRON has known security issues with using an unsandboxed version of chromium. The roadmap is to use the electron-prebuilt module from Brave browser since they re-sandboxed and fixed a lot of the security issues related to potential for XSS attacks.

### FORK ME:   
Please fork and make this better.

here is how to run it yourself:

###Install instructions

1. you must have tor already installed. follow the instructions from torproject.org

2. then to run this code, follow these steps:
```
git clone https://github.com/jamesacampbell/elector.git
cd elector
npm install -d
npm start
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
