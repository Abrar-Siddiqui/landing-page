import React from 'react'
import './Static/Location.css'
import './Static/Fonts.css'

const Location = () => {
  return (
    <>
        <div>
            <div className='container conn12'>
                <div className='row'>
                <h3 className='font'>Location</h3>
                    <div className='col-lg-12'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d461888.1005688588!2d55.30082600000001!3d25.253734!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43251eb9dabf%3A0x4a0bcfb11ff44515!2sOPAL%201%20Building!5e0!3m2!1sen!2sin!4v1668603161525!5m2!1sen!2sin" width="100%" height="360"  style={{"border":"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Navigation menu"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Location