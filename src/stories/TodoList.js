import React from "react";
import { storiesOf } from "@storybook/react";
import TodoList from "../components/TodoList/TodoList";

storiesOf("TodoList", module)
    .add("default", () => {
        const todos =  [
            {
                text: "Be kind.",
                id: 0
            },
            {
                text: "Be awesome.",
                id: 1
            }
        ];

        return <TodoList todos={todos}/>;
    });
