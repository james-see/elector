# elector

[![Join the chat at https://gitter.im/elector-browser/Lobby](https://badges.gitter.im/elector-browser/Lobby.svg)](https://gitter.im/elector-browser/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

TOR BROWSER IN ELECTRON

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

### OSX & homebrew easiness to get Tor installed as a service:

```
brew install tor
```
then make sure tor is set to run when your OS starts, then check duckduckgo onion site to confirm it is working
