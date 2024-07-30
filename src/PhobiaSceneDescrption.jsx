import React from "react";
import DropDownDescription from "./DropDownDescription"

export default function PhobiaSceneDescription() {
    return (
        <>
            <h1>Holes</h1>
            <div>This movie has 5 scenes with your triggers</div>
            <div>Warning: Scene descriptions may contain spoilers!⚠️</div>
            <DropDownDescription 
                buttonText="scene1"
                popuptime="-00:00:00"
                description="This is a description of scene1"
            />
        </>
    )
}