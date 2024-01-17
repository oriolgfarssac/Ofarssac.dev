import React from "react";
import Navigation from "../../components/nav"
import github from "../../assets/githubIcon.svg"
import linkedin from "../../assets/linkedin.png"
import html from "../../assets/html.png"
import "../App.css"

const Skills: React.FC = () =>{
    const title = "<Ofarssac.dev/>"

    return (
      <>
          <div className="mainContainer">
            <h1 className='title1'>{title}</h1>
            <Navigation></Navigation>
            <div id='mySKills'>
            <h1 className='intro2'> <b>Hey there! Welcome to my portfolio! </b><br/><br/> I'm Oriol, a Front-End Developer from Barcelona. <br/> My passion lies in the art of crafting interfaces that not only catch the eye but also make user experiences seamless and enjoyable. <br/><br/> It's all about finding that sweet spot where creativity and functionality dance together in perfect harmony. <br/> If you're curious to see how this mix translates into my projects, you're in the right place.  <br/><br/> <a href="https://github.com/oriolgfarssac" id='icon'><img src={github} alt="" id='iconImg' /></a>  <a href="https://www.linkedin.com/in/oriol-g-farssac/" id='icon'><img src={linkedin} alt="" id='iconImg' /></a></h1>
            <div className="skills">
                <a><img src={html} alt="" className="imgSkills" id='iconImg'/></a>
                <a><img src={html} alt="" className="imgSkills" id='iconImg'/></a>
                <a><img src={html} alt="" className="imgSkills" id='iconImg'/></a>
                <a><img src={html} alt="" className="imgSkills" id='iconImg'/></a>
                <br />
                <a><img src="" alt="" className="imgSkills" /></a>
                <a><img src="" alt="" className="imgSkills" /></a>
                <a><img src="" alt="" className="imgSkills" /></a>
                <a><img src="" alt="" className="imgSkills" /></a>
                <a><img src="" alt="" className="imgSkills" /></a>
                <a><img src="" alt="" className="imgSkills" /></a>
                <a><img src="" alt="" className="imgSkills" /></a>
            </div>
            </div>
          </div>
      </> 
    )
}

export default Skills;