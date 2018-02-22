#Storybook example

To try out Storybook you can

## Clone this example Todo App 

And run:

```
cd app

npm install
```

To start React App: `npm run start`

To start Storybook: `npm run storybook`

This Todo App code is based on: https://scotch.io/tutorials/create-a-simple-to-do-app-with-react

## Add Storybook to

### Your existing React App

Or

### A new basic React App

#### React App

```
npm install -g create-react-app
create-react-app app
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

#### Storybook instructions

See: https://storybook.js.org/basics/introduction/

1. Install Storybook

```
npm i --save-dev @storybook/react
npm i --save react react-dom
npm i --save-dev babel-core
npm i -g @storybook/cli
getstorybook
npm run storybook
```
-> http://localhost:9009/

2. To enable loading all stories replace .storybook/config.js content with

```
import { configure } from "@storybook/react";

// automatically import all files ending in *.js
const req = require.context("../src/stories", true, /.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
```


## More infos

Knobs:
npm install @storybook/addon-knobs --save-dev
https://github.com/storybooks/storybook/tree/master/addons/knobs

Todo App:
https://scotch.io/tutorials/create-a-simple-to-do-app-with-react

React App:
https://github.com/facebook/create-react-app/blob/master/README.md#getting-started

Flexbox:
https://css-tricks.com/snippets/css/a-guide-to-flexbox/

Grid:
https://css-tricks.com/snippets/css/complete-guide-grid/