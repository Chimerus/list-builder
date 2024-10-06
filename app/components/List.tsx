"use client"
import React, {FC, useState} from "react";
import Unit, { UnitProps } from "./Unit";

interface ListProps {
    listName: string;
    listUnits: UnitProps[];
}

const List = () => {
    const [list, setList] = useState({listName: "", listUnits:[]})

    return (
        <div>
            <h3>Current List</h3>
            <h2>{list.listName}</h2>
            {list.listUnits.map(unit => (
                Unit(unit)
            ))}
        </div>
    )
}

export default List;
