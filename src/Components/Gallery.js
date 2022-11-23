import React from 'react'
import './Static/Gallery.css'
import './Static/Fonts.css'

const Gallery = () => {
  return (
    <div className='bgcolor'>
        <div class="container py-5">

            <h3 className='font'>Gallery</h3>

            <div class="gallery">

                <div class="gallery-item">
                    <img class="gallery-image" src="./img/gallery/1.jpg" alt="gallery1" />
                </div>

                <div class="gallery-item">
                    <img class="gallery-image" src="./img/gallery/2.jpg" alt="gallery2" />
                </div>

                <div class="gallery-item">
                    <img class="gallery-image" src="./img/gallery/3.jpg" alt="gallery3" />
                </div>

                <div class="gallery-item">
                    <img class="gallery-image" src="./img/gallery/4.jpg" alt="gallery4" />
                </div>

                <div class="gallery-item">
                    <img class="gallery-image" src="./img/gallery/5.jpg" alt="gallery5" />
                </div>

                <div class="gallery-item">
                    <img class="gallery-image" src="./img/gallery/6.jpg" alt="gallery5" />
                </div>

            </div>

        </div>
    </div>
  )
}

export default Gallery