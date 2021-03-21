import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Navbar.css'

const Navbar = () => {
  const [loggedInUser] = useContext(UserContext)
  
  //   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  //   <div class="container-fluid">
  //     <a class="navbar-brand" href="#">Navbar</a>
  //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //       <span class="navbar-toggler-icon"></span>
  //     </button>
  //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
  //       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
  //         <li class="nav-item">
  //           <a class="nav-link active" aria-current="page" href="#">Home</a>
  //         </li>
  //         <li class="nav-item">
  //           <a class="nav-link" href="#">Link</a>
  //         </li>
  //         <li class="nav-item dropdown">
  //           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  //             Dropdown
  //           </a>
  //           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
  //             <li><a class="dropdown-item" href="#">Action</a></li>
  //             <li><a class="dropdown-item" href="#">Another action</a></li>
  //             <li><hr class="dropdown-divider"></li>
  //             <li><a class="dropdown-item" href="#">Something else here</a></li>
  //           </ul>
  //         </li>
  //         <li class="nav-item">
  //           <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  //         </li>
  //       </ul>
  //       <form class="d-flex">
  //         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
  //         <button class="btn btn-outline-success" type="submit">Search</button>
  //       </form>
  //     </div>
  //   </div>
  // </nav>

  return (
    <div className="container p-4">
      <div className="row p-3" style={{ fontSize: '20px' }}>
        <div className="col-md-6 fs-3">Travel Buddy</div>
        <div className="col-md-6">
          <Link to='/home' className="p-2 link fs-4">Home</Link>
          <Link to="/destination" className="p-2 link fs-4">Destination</Link>
          <Link to="/blog" className="p-2 link fs-4">Blog</Link>
          <Link to="/contact" className="p-2 link fs-4">Contact</Link>
          {loggedInUser.name || loggedInUser.displayName || <Link to="/login" className="p-2 link fs-4"><button className="btn btn-success">Log in</button></Link>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;