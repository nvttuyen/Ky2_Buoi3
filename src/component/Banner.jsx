import React from 'react'
import img3 from '../assets/Oppo 340x160.jpg'
import img2 from '../assets/A57-340x160.jpg';
import img1 from '../assets/img1.jpg';
export default function Banner() {
  return (
    <div className='banner'>
      <div className='bannerleft'>
      <i class="fa fa-angle-left"></i>
      <img src={img1} alt="anh banner" />
      <i class="fa fa-angle-right"></i>
      </div>
      <div className='bannerright'>
        <img src={img2} alt="anh banner" />
        <img src={img3} alt=" anh banner" />
      </div>
    </div>
  )
}
