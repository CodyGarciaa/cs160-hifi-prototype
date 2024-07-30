import React from "react";
import ToggleButton from "./ToggleButton";

export default function TriggerFilter() {
    return (
        <>
            <h1>Common phobia triggers</h1>
            <ToggleButton>snakes</ToggleButton>
            <ToggleButton>spiders</ToggleButton>
            <ToggleButton>blood</ToggleButton>
            <ToggleButton>needle</ToggleButton>
            <h1>Your custom triggers</h1>
            <button>+</button>
        </>
    )
}