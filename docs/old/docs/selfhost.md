# How to selfhost iHorizon ?

# How to selfhost ?

_There are only some few software needed :_
- [NodeJS](https://nodejs.org) (**18 or higher required**)
- [Npm](https://npmjs.com) (**With NodeJS**)

### How to configure the bot ?
* Open [config.example.ts](https://github.com/ihrz/ihrz/blob/main/src/files/config.example.ts) in file Editor (Notepad, VSCode...), enter your informations, and rename to config.ts.

After your configuration in the config.ts :

## Linux & Mac os
```bash
node -v  &&  npm -v
```

If it shows an error please install npm and node.js.

```bash
yarn
yarn start
```