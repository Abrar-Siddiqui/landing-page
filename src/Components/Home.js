import React from 'react'
import About from './About'
import Amenities from './Amenities'
import Cards from './Cards'
import Contactpage from './Contactpage'
import Floorplan from './Floorplan'
import Gallery from './Gallery'
import Highlights from './Highlights'
import Location from './Location'
import Overview from './Overview'
import './Static/Home.css'

const Home = () => {
  return (
    <>
     <div className='row'>
        <div className='col-lg-9'>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="/img/slider1.png" className="d-block w-100" alt="slider1" />
                </div>
                <div className="carousel-item">
                <img src="/img/slider2.png" className="d-block w-100" alt="slider2" />
                </div>
                <div className="carousel-item">
                <img src="/img/slider3.png" className="d-block w-100" alt="slider3" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
        <div className='col-lg-3 my-5 banform "d-flex align-items-center"'>
            <h3>M3M SECTOR 79</h3>
            <h5>At Sector 79, Gurgaon</h5>
            <h4>2 & 3 Bhk Low Rise Residences</h4>
            <div className='card bg-dark text-white py-2 mx-4'>
                STARTING FROM ₹ 1 Cr*
            </div>
            <div>
            <div className="mx-4 my-4">
                
            <form>
                  <div class="mb-3">
                 
                    <input type="text" class="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder='Name' />
                  
                  </div>
                  <div class="mb-3">
                 
                 <input type="tel" class="form-control" id="exampleInputNumber" aria-describedby="NumberHelp" placeholder='Mobile No.' />
               
               </div>
               <div class="mb-3">
                 
                 <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='E-mail Address' />
               
               </div>
                  <div class="mb-3">
                    
                    <input type="query" class="form-control" id="exampleInputMessage"  placeholder='Message'/>
                  </div>
                  <div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
                 
                </form>
              </div>
            </div>
        </div>
     </div>
     <div>
      <Overview />
     </div>
     
    <div>
    <Cards/>
    </div>
     <div>
     <Gallery />
     </div>
     <div>
     <Amenities />
     </div>    
     <div>
     <Highlights />
     </div>
     <div>
     <Floorplan />
     </div>
     <div>
     <Location />
     </div>
     <div>
     <About />
     </div>
     <div>
     <Contactpage />
     </div>
    </>
  )
}

export default Home