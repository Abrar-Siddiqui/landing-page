import React from 'react'
import './Static/Floorplan.css'
import './Static/Fonts.css'

const Floorplan = () => {
  return (
    <>
        <div className='bgcolor'>
            <div className='container conn2'>
                <div className='row'>
                <h1 className='font'>Floor Plan</h1>
                    <div className='col-lg-4 m-auto imgs'>
                        <img src='./img/floor/master.png' width="100%" alt='master'/>
                        <h5>Master Plan</h5>
                    </div>
                    <div className='col-lg-4 m-auto imgs'>
                        <img src='./img/floor/floor1.png' width="100%" alt='floor1'/>
                        <h5>1 BHK </h5>
                    </div>
                    <div className='col-lg-4 m-auto imgs'>
                        <img src='./img/floor/floor2.png' width="100%" alt='floor2' />
                        <h5>2 BHK </h5>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Floorplan