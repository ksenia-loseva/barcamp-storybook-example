import React from "react";
import { storiesOf } from "@storybook/react";

import { Welcome } from "@storybook/react/demo";
import "../App.css";

storiesOf("Welcome", module).add("to Storybook", () => <Welcome />);
