import React from 'react';
import { useNavigate } from 'react-router';
import '../App.css';

function links() {
  const folder = require('../images/folder.png');
  const navigate = useNavigate();
  return (
    <div className="search">
        <div className='text'>Links</div>
        <div className='file1'>
        <img src={folder} alt="dossier" onClick={() => navigate("/")}></img>
        <p className='text'>Bash</p>
      </div>
      <div className='file2'>
      <img src={folder} alt="dossier" onClick={() => navigate("/")}></img>
        <p className='text'>C</p>
      </div>
      <div className='file3'>
      <img src={folder} alt="dossier" onClick={() => navigate("/")}></img>
        <p className='text'>C++</p>
      </div>
      <div className='file4'>
      <img src={folder} alt="dossier" onClick={() => navigate("/")}></img>
        <p className='text'>Git</p>
      </div>
      <div className='file5'>
      <img src={folder} alt="dossier" onClick={() => navigate("/")}></img>
        <p className='text'>HTML/CSS</p>
      </div>
      <div className='file6'>
      <img src={folder} alt="dossier" onClick={() => navigate("/")}></img>
        <p className='text'>Javascript</p>
      </div>
    </div>
  )
}

export default links;