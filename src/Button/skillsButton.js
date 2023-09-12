import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function skillsButton() {
  const navigate = useNavigate();
  return (
    <Button variant="primary"
    className='SkillsButton'
    onClick={() => navigate("/skills")}>
      Skills
    </Button>
  );
}

export default skillsButton;