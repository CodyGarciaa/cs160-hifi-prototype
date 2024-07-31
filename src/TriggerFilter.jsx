import React from "react";
import ToggleButton from "./ToggleButton";
import { useNavigate } from "react-router-dom";


export default function TriggerFilter() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/')
      }

    return (
        <>
            <h1>Common phobia triggers</h1>
            <ToggleButton>snakes</ToggleButton>
            <ToggleButton>spiders</ToggleButton>
            <ToggleButton>blood</ToggleButton>
            <ToggleButton>needle</ToggleButton>
            <h1>Your custom triggers</h1>
            <button>+</button>
            <button onClick={goToHome}>set</button>
        </>
    )
}