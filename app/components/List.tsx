"use client"
import React, {FC, useState} from "react";
import Unit, { UnitProps } from "./Unit";

interface ListProps {
    listName: string;
    listUnits: UnitProps[];
}

const List = () => {
    const [list, setList] = useState({listName: "", listUnits:[]})
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setList({...list, listName: event.target.value})
    }

    return (
        <div>
            <h3 className="text-2xl font-bold">Current List</h3>
            <h2 className="text-xl font-bold">{list.listName}</h2>
            <div className="mb-6">
                <label htmlFor="name-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter a List name</label>
                <input 
                    type="text" 
                    id="name-input" 
                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={list.listName}
                    onChange={handleChange}
                />
            </div>
            {list.listUnits.map(unit => (
                Unit(unit)
            ))}
        </div>
    )
}

export default List;
