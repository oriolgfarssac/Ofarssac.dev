import './App.css'
import logo from "./assets/img.png"
import yo from "./assets/oriol.jpg"
import github from "./assets/githubIcon.svg"
import linkedin from "./assets/linkedin.png"
function App() {


  return (
    <>
        <div className="mainContainer">
          <img src={logo} alt="pic" className='img'/>
          <div className='nav'>
            <a href="#aboutMe" className="sections">About Me</a>
            <a href="" className="sections">Skills</a>
            <a href="" className="sections">Projects</a>
            <a href="" className="sections">Contact</a>
          </div>
          <div id='aboutMe'>
          <h1 className='intro'>
          <b>Hey there! Welcome to my portfolio! </b><br/><br/> I'm Oriol, a Front-End Developer from Barcelona. <br/> My passion lies in the art of crafting interfaces that not only catch the eye but also make user experiences seamless and enjoyable. <br/><br/> It's all about finding that sweet spot where creativity and functionality dance together in perfect harmony. <br/> If you're curious to see how this mix translates into my projects, you're in the right place.  <br/><br/> <a href="https://github.com/oriolgfarssac" id='icon'><img src={github} alt="" id='iconImg' /></a>  <a href="https://www.linkedin.com/in/oriol-g-farssac/" id='icon'><img src={linkedin} alt="" id='iconImg' /></a></h1>
          <img src={yo} alt="myImg" id="picture"/>
          </div>
          <div className="presentationContainer">
            <div className="firstPart">
              <img src="" alt="" className="myImg" />
              <h1 className="title" id='aboutMe'></h1>
            </div>
            <p className="present1"></p>
            <p className="present2"></p>
          </div>
        </div>
    </> 
  )
}

export default App
