import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";
import AddButton from "../components/AddButton/AddButton";

storiesOf("AddButton", module)
  .addDecorator(withKnobs)
  .add("default", () => <AddButton />)
  .add("your Input with Knobs", () => {
    const label = text("Label", "Add this to list!");

    return <AddButton content={label} />;
  })
  .add("your Button with Action", () => {
    return <AddButton onClick={action("clicked")} />;
  })
  .add("your disabled Button", () => (
    <AddButton disabled={boolean("Disabled", false)} />
  ));
