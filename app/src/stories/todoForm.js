import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
import TodoForm from "../components/TodoForm";

storiesOf("TodoForm", module)
  .addDecorator(withKnobs)
  .add("default", () => <TodoForm />);
