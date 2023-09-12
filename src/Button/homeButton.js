import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import React from "react";
import '../App.css';

function homeButton() {
    const navigate = useNavigate();
    return (
    <Button className='HomeButton'
    onClick={() => navigate("/")}>
        Home
    </Button>
    )
}

export default homeButton;