import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, date } from "@storybook/addon-knobs/react";
import Footer from "../components/Footer/Footer";

storiesOf("Footer", module)
  .addDecorator(withKnobs)
  .add("default", () => <Footer />)
  .add("your Date-Pick-Footer", () => {
    const label = "Event Date";
    const defaultValue = new Date("Feb 20 2018");
    const groupId = "GROUP-ID1";

    const value = date(label, defaultValue, groupId);
    return <Footer value={value} />;
  });
