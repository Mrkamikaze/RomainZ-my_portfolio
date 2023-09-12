import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function projectsButton() {
  const navigate = useNavigate();
  return (
    <Button variant="primary"
    className='ProjectsButton'
    onClick={() => navigate("/projects")}>
      Projects
    </Button>
  );
}

export default projectsButton;