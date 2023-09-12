import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function LinksButton() {
  const navigate = useNavigate();
  return (
    <Button variant="primary"
    className='LinksButton'
    onClick={() => navigate("/links")}>
      Links
    </Button>
  );
}

export default LinksButton;