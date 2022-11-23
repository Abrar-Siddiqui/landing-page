import React from 'react'
import './Static/Card.css'
import './Static/Fonts.css'

const Cards = () => {
  return (
    <div>
        <div className="container my-3 pt-3">
            <h1 className="text-center my-4 text-dark font" id="price">Price </h1>
            <div className="row justify-content-between">
                <div className="col-lg-3 m-auto text-center">
                    <div className="card text-center ">
                        <div className="box bgcolor">
                        <div className="content" >
                            <h3 className='font pt-4'>Price  <br /> <span style={{"font-size":"14px"}}>On Request</span>  </h3>
                            <hr className="text-white py-0" />
                            <h3 className='font'>Type  <br /> <span style={{"font-size":"14px"}}>3 BHK  - Plan 1</span></h3>
                            <hr className="text-white py-0" />
                            <h3 className='font'>Size  <br /> <span style={{"font-size":"14px"}}>2850 Sq.Ft </span> </h3>
                            <div className='pb-4 pt-4'>
                                <a href="#"data-bs-toggle="modal" className='btn' data-bs-target="#exampleModal" style={{"background":"linear-gradient(178deg, #AF9428 30%, #D6B64B 72%)"}}>Enquire Now</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 m-auto text-center">
                    <div className="card text-center ">
                        <div className="box bgcolor">
                        <div className="content" >
                            <h3 className='font pt-4'>Price  <br /> <span style={{"font-size":"14px"}}>On Request</span>  </h3>
                            <hr className="text-white py-0" />
                            <h3 className='font'>Type  <br /> <span style={{"font-size":"14px"}}>3 BHK  - Plan 1</span></h3>
                            <hr className="text-white py-0" />
                            <h3 className='font'>Size  <br /> <span style={{"font-size":"14px"}}>2850 Sq.Ft </span> </h3>
                            <div className='pb-4 pt-4'>
                                <a href="#"data-bs-toggle="modal" className='btn' data-bs-target="#exampleModal" style={{"background":"linear-gradient(178deg, #AF9428 30%, #D6B64B 72%)"}}>Enquire Now</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 m-auto text-center">
                    <div className="card text-center ">
                        <div className="box bgcolor">
                        <div className="content" >
                            <h3 className='font pt-4'>Price  <br /> <span style={{"font-size":"14px"}}>On Request</span>  </h3>
                            <hr className="text-white py-0" />
                            <h3 className='font'>Type  <br /> <span style={{"font-size":"14px"}}>3 BHK  - Plan 1</span></h3>
                            <hr className="text-white py-0" />
                            <h3 className='font'>Size  <br /> <span style={{"font-size":"14px"}}>2850 Sq.Ft </span> </h3>
                            <div className='pb-4 pt-4'>
                                <a href="#"data-bs-toggle="modal" className='btn' data-bs-target="#exampleModal" style={{"background":"linear-gradient(178deg, #AF9428 30%, #D6B64B 72%)"}}>Enquire Now</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards