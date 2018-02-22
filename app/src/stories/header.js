import React from "react";
import { storiesOf } from "@storybook/react";
import Header from "../components/Header";
import { color, withKnobs } from "@storybook/addon-knobs/react";

storiesOf("Header", module)
  .addDecorator(withKnobs)
  .add("blue Header", () => <Header className="blue" />)
  .add("green Header", () => <Header className="green" />)
  .add("your colored Header", () => {
    const label = "Color";
    const defaultValue = "#AA6798";
    const groupId = "GROUP-ID1";

    const value = color(label, defaultValue, groupId);
    return <Header value={value} />;
  });
