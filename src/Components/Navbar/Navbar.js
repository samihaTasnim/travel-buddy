import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Navbar.css'

const Navbar = () => {
  const [loggedInUser] = useContext(UserContext)
  
  return (
    <div className="container p-4">
      <div className="row p-3" style={{fontSize: '20px'}}>
        <div className="col-md-6 fs-3">Travel Buddy</div>
        <div className="col-md-6">
          <Link to='/home' className="p-2 link fs-4">Home</Link>
          <Link to="/search" className="p-2 link fs-4">Destination</Link>
          <Link to="/blog" className="p-2 link fs-4">Blog</Link>
          <Link to="/contact" className="p-2 link fs-4">Contact</Link>
          {loggedInUser.name || loggedInUser.displayName ||  <Link to="/login" className="p-2 link fs-4"><button className="btn btn-success">Log in</button></Link>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;