import React from 'react';
import { useNavigate } from 'react-router';
import AboutMePopup from "../popups/about_me_popup";

import '../App.css';
import '../files.css';
import '../images/folder.png';
import '../images/RomainZ.png';
import '../images/pdf_file.png';

function Home() {
  const RomainZ = require("../images/RomainZ.png");
  const pdf_file = require("../images/pdf_file.png");
  const curriculum = require("../images/CV (general).pdf");
  const navigate = useNavigate();
  return (
    <div className='search'>
      <div className='text'>Home</div>
      <AboutMePopup text="Simple tooltip">
      <div className='file1'>
        <img src={pdf_file} alt="dossier" className="img" onClick={() => navigate("/")}></img>
        <p className='text'>About_me.pdf</p>
      </div>
      </AboutMePopup>
      <div className='file2'>
        <a href={curriculum} target='_blank' rel="noopener noreferrer">
      <img src={pdf_file} className="img" alt="dossier"></img>
        <p className='text' >my_cv.pdf</p>
        </a>
      </div>
      <div className='photoRomainZ'>
      <a href={RomainZ} target='_blank' rel="noopener noreferrer">
      <img src={RomainZ} className="img" alt="me"></img>
        <p className='text'>Photo.png</p>
      </a>
      </div>
    </div>
  )
}

export default Home;