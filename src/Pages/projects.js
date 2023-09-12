import React from 'react';
import { useNavigate } from 'react-router';
import '../App.css';
import '../files.css'


function projects() {
  const folder = require('../images/folder.png');
  const navigate = useNavigate();
  return (
    <div className='search'>
      <div className='text'>Projects</div>
        <div className='file1'>
        <img src={folder} alt="dossier" onClick={() => navigate("/projects/dante")}></img>
        <p className='text'>Dante</p>
      </div>
      <div className='file2'>
      <img src={folder} alt="dossier" onClick={() => navigate("/")}></img>
        <p className='text'>Test</p>
      </div>
      <div className='file3'>
      <img src={folder} alt="dossier" onClick={() => navigate("/")}></img>
        <p className='text'>Test</p>
      </div>
      <div className='file4'>
      <img src={folder} alt="dossier" onClick={() => navigate("/")}></img>
        <p className='text'>Test</p>
      </div>
      <div className='file5'>
      <img src={folder} alt="dossier" onClick={() => navigate("/")}></img>
        <p className='text'>Test</p>
      </div>
      <div className='file6'>
      <img src={folder} alt="dossier" onClick={() => navigate("/")}></img>
        <p className='text'>Test</p>
      </div>
 {/*      <div className='file7'>
      <img src={folder} alt="dossier" onClick={() => navigate("/")}></img>
        <p className='text'>Test</p>
      </div>
      <div className='file8'>
      <img src={folder} alt="dossier" onClick={() => navigate("/")}></img>
        <p className='text'>Test</p>
      </div>
      <div className='file9'>
      <img src={folder} alt="dossier" onClick={() => navigate("/")}></img>
        <p className='text'>Test</p>
      </div> */}
    </div>
  )
}

export default projects;