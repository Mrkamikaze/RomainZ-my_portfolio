import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import './App.css';
import Projects from './Pages/projects';
import Skills from './Pages/skills';
import Home from './Pages/home';
import Links from './Pages/links';
import SkillsButton from './Button/skillsButton';
import ProjectsButton from './Button/projectsButton';
import HomeButton from './Button/homeButton';
import LinksButton from './Button/linksbutton';
import DanteProject from './Pages/Projects/dante_projects';

function App() {
  return (
    <div className="App">
      <header>
        <div className='headerBand'></div>
      </header>
      <div class="header"></div>
      <div class="tabloid">
      </div>
      <div class="list"></div>
      <div class="search"></div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
{/*----------------------------------skills-----------------------------------*/}
          <Route path="/skills" element={<Skills />} />
{/*----------------------------------projects---------------------------------*/}
          <Route path="/projects/*" element={<Projects />} />
          <Route path="/projects/dante" element={<DanteProject />} />
          <Route path="/projects/dante" element={<DanteProject />} />
          <Route path="/projects/dante" element={<DanteProject />} />
          <Route path="/projects/dante" element={<DanteProject />} />
          <Route path="/projects/dante" element={<DanteProject />} />
          <Route path="/projects/dante" element={<DanteProject />} />
{/*----------------------------------link-------------------------------------*/}
          <Route path="/links" element={<Links />} />
        </Routes>
      </main>
      <div>
        <ProjectsButton/>
        <HomeButton/>
        <SkillsButton/>
        <LinksButton/>
      </div>
    </div>
  );
}

export default App;