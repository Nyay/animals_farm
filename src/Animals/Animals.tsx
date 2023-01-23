import React from "react";
import {IAnimal} from "./types";

export const Animal = ({ type, name, age }: IAnimal) => {
    return (
        <li>
            <strong>{ type }</strong> { name } { age }
        </li>
    )
}

