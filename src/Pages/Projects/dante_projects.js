import React from 'react';
import '../../files.css';
import '../../App.css';

function DanteProject() {
  const folder = require('../../images/folder.png');
  return (
    <div className='search'>
        <div className='text'>Projects/Dante</div>
        <div className='file1'>
        <img src={folder} alt="readme.pdf"></img>
        <p className='text'>readme.pdf</p>
      </div>
      <div className='file2'>
      <img src={folder} alt="program folder"></img>
        <p className='text'>program</p>
      </div>
      <div className='file3'>
      <img src={folder} alt="test"></img>
        <p className='text'>Test</p>
      </div>
    </div>
  )
}

export default DanteProject;