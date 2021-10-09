# NPM module for ESM and CommonJS

This is a demo project showing how to Create a Hybrid NPM Module for ESM and CommonJS.

## Installation

```
$ git clone git@github.com:andreasonny83/node-mjs-cjs-module.git
```

Clone the Git repo to your machine.

Then open 2 terminal instances from each one of the demo apps

## Demo apps configuration

This project makes use of [NVM](https://github.com/nvm-sh/nvm) to easily switch in between different NodeJS versions.

Enter inside the CommonJS demo app, then set the NodeJS version to v10 by making use of nvm

```
$ nvm use
```

Do the same inside the MJS demo app, making sure to use a separate terminal instance

Finally, install the Node modules inside both the demo applications

```
$ npm install
```

## Run the applications

```
$ npm start
```

Running the `npm` start command, each demo app will consume the correct version of the root module from inside the main folder,
according the `package.json` in there
