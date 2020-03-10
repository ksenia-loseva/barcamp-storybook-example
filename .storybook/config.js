import { configure } from "@storybook/react";
import 'happo-plugin-storybook/register';

// automatically import all files ending in *.js
const req = require.context("../src/stories", true, /.js$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
