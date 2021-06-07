import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import Navbar from '../Navbar/Navbar';

const Search = () => {

  const [vehicle, setVehicle] = useState({})
  const [destination, setDestination] = useState({})
  const { register, handleSubmit } = useForm();
  const onSubmit = data => setDestination(data);
  let {transport} = useParams()

  useEffect(() => {
    fetch('https://api.mocki.io/v1/47abc50f')
      .then(res => res.json())
      .then(data => {
        setVehicle(data.find(x => x.name === transport))
      })
  }, [transport])

  console.log(vehicle);
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {destination.place1 && destination.place2 ?
              <div style={{ backgroundImage: 'linear-gradient(45deg, #72bddb, lightgrey)' }} className="rounded w-75">
                <h3 className="m-2">{destination.place1} </h3>
                <p className="m-2">to</p>
                <h3 className="m-2">{destination.place2}</h3>
                <div className="card" >
                  <img src={vehicle.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <span className="card-text m-4">Transport: {vehicle.name}</span>
                    <span className="card-text">Cost: $67</span>
                  </div>
                </div>
                <div className="card" >
                  <img src={vehicle.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <span className="card-text m-4">Transport: {vehicle.name}</span>
                    <span className="card-text">Cost: $67</span>
                  </div>
                </div>
                <div className="card" >
                  <img src={vehicle.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <span className="card-text m-4">Transport: {vehicle.name}</span>
                    <span className="card-text">Cost: $67</span>
                  </div>
                </div>
              </div>
              :
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="place1" className="form-label">Pick from</label>
                  <input type="text" name="place1" className="form-control" id="place1" ref={register} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="place2" className="form-label">Go to</label>
                  <input type="text" name="place2" className="form-control" id="place2" ref={register} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="date">Pick a date</label>
                  <input type="date" name="date" id="..." className="form-control" required/>
                </div>
                <input type="submit" value="Search" className="btn btn-success btn-lg" />
              </form>
            }
          </div>
          <div className="col-md-6">
            <div className="mapouter" style={{ position: 'relative', textAlign: 'right', height: '580px', width: '600px' }}>
              <div className="gmap_canvas" style={{ overflow: 'hidden', background: 'none! important', height: '580px', width: '600px' }}>
                <iframe width="600" height="580" id="gmap_canvas" src="https://maps.google.com/maps?q=Banani,%20Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="..">
                </iframe>
                <br />
                <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;