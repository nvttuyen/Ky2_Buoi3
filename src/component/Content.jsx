import React from 'react'
import Boxcontent from './Boxcontent'


export default function Content(props) {
  return (
    <div className='content'>
      <h3> TOP 10 ĐIỆN THOẠI ĐƯỢC YÊU THÍCH NHẤT</h3>
      <div className='box'>
        <Boxcontent boxitem={props.data[0]}/>
        <Boxcontent boxitem={props.data[1]}/>
        <Boxcontent boxitem={props.data[2]}/>
        <Boxcontent boxitem={props.data[3]}/>
        <Boxcontent boxitem={props.data[4]}/>
      </div>
    </div>
  )
}
