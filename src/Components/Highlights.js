import React from 'react'
import './Static/Higlights.css'
const Highlights = () => {
  return (
    <>
        <div className='banner'>
        <div className="container conn ">
        <div className="row">
            <h1 className="text-center font pb-3" id="feature">Project Highlights</h1>
            <div className="col-lg-4 col-12 m-auto hedings">
                <ul >
                    <li className="heading">Premium facilities and amenities</li>
                    <li className="heading">Easy connectivity to key destinations</li>
                    <li className="heading">Semi-detached 4 to 6 bedroom villas and townhouses</li>
                  
                </ul>
                
            </div>
            <div className="col-lg-4 col-12 hedings">
                <ul>
                    <li className="heading">Residences with stylish fit and finish</li>
                    <li className="heading">Affordable payment plan options.</li>
                    <li className="heading">Secluded haven surrounded by an opal lagoon.</li>
                
                </ul>
            </div>
            <div className="text-center m-auto py-5">
              {/* <!-- Button trigger modal --> */}
              <button type="button" className="btn bg" data-bs-toggle="modal" data-bs-target="#exampleModal">
               Know More
              </button>
            </div>
        </div>
    </div>
        </div>
    </>
  )
}

export default Highlights;