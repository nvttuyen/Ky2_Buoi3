import React from 'react'



export default function Boxcontent(props) {
  console.log(props.boxitem)
  const firstprice = props.boxitem.price /((100- props.boxitem.discount) / 100).toFixed(1);
  return (
    
    <div className='insidebox'>
      <img src={props.boxitem.img} alt="anh san pham" />
      <p><b>{props.boxitem.name}</b></p>
      <p className='price'>{Number (props.boxitem.price).toLocaleString()}đ</p>
      <div className='discount'>
        <p className='firstprice'>{Number (firstprice).toLocaleString()}đ</p>
        <p className='percent'>{props.boxitem.discount} %</p>
      </div>
      <p><b>Chip Set:</b> {props.boxitem.chip}</p>
      <p><b>Size Screen</b>: {props.boxitem.sizeScreen}</p>
      <p><b>RAM:</b> {props.boxitem.ram}GB</p>
      <p><b>ROM:</b> {props.boxitem.rom}GB</p>
      <a href=""> <i class="fa fa-plus-circle"></i> Thêm vào giỏ hàng </a>
    </div>
  )
}
