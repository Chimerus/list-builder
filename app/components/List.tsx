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
            <button 
                data-collapse-target="collapse"
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                type="button"
            >
                Edit List Name
            </button>
            <div className="block h-0 w-full basis-full overflow-hidden transition-all duration-300 ease-in-out" data-collapse="collapse">
                <label htmlFor="name-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter a List name</label>
                <input 
                    type="text" 
                    id="name-input" 
                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={list.listName}
                    onChange={handleChange}
                />
            </div>
            <div tabIndex={0} className="collapse bg-base-200">
                <div className="collapse-title text-xl font-medium">Focus me to see content</div>
                <div className="collapse-content">
                    <p>tabindex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
            {list.listUnits.map(unit => (
                Unit(unit)
            ))}
        </div>
    )
}

export default List;
