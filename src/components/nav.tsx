import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className='nav'>
      <Link to='/' className="sections">About Me</Link>
      <Link to='/skills/' className="sections">Skills</Link>
      <Link to='/skills/' className="sections">Projects</Link>
      <Link to='/skills/' className="sections">Contact</Link>
    </div>
  );
}

export default Navigation;
