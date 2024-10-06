import React from "react";
import Unit from "./Unit";

function UnitCatalog() {
    // these should be stored somewhere, prob json file for now, but should be db
    const demoCatalog = [
        {
            name: "Hello World",
            points: 42,
            description: "Lorem Ipsum"
        },
        {
            name: "Infantry",
            points: 20,
            tags: "core",
            description: "Basic infantry"
        }
    ]

    return (
        <div>
            <h1 className="text-2xl font-bold">Unit Catalog</h1>
            {demoCatalog.map(unit => {
                return (
                    Unit(unit)
                )
            })}
        </div>
    )
}

export default UnitCatalog;