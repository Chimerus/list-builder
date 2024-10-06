import React, { FC } from "react";

export interface UnitProps {
    name: string;
    points: number;
    tags?: string;
    description: string;
}

const Unit: FC<UnitProps> = ({name, points, tags, description}: UnitProps) => {
    return (
        <div key={name}>
            <h2>{name}</h2>
            <h3>{points}</h3>
            {tags != "" && 
            <h3>{tags}</h3>}
            <p>{description}</p>
        </div>
    )
}

export default Unit;
