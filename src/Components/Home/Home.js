import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import image from '../../images/bg.jpg'
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  const [ride, setRide] = useState([])
  useEffect(() => {
    fetch('https://mocki.io/v1/a1359f32-9b56-4cd3-89d7-d2dc740c6067')
      .then(res => res.json())
      .then(data => setRide(data))
  }, [])


  return (
    <div style={{ backgroundImage: `url(${image})`, height: '100vh', backgroundSize: 'cover' }}>
      <Navbar></Navbar>
      <div className="container home">
        <div className="row row-cols-md-4 g-2 row-clos-sm-2 card-container">
          {
            ride.map(x => (
              <div className="col">
                <Link to={`/search/${x.name}`} className="card link" style={{ width: '200px', height: '200px' }}>
                  <img src={x.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-center">{x.name}</h5>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Home;