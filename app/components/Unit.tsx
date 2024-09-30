import React from "react";

interface UnitProps {
    name: string;
    points: number;
    tags?: string;
    description: string;
}
function Unit({name, points, tags, description}: UnitProps) {
    return (
        <div>
            <h2>{name}</h2>
            <h3>{points}</h3>
            {tags != "" && 
            <h3>{tags}</h3>}
            <p>{description}</p>
        </div>
    )
}

export default Unit;
