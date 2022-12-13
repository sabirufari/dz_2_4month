import React from 'react'

function Item(props) {
  return (
    <div className='box'>
        <img src={props.good.url} alt="" style={{width:'150px',height:'100px',borderRadius:'70%'}} />
        <h1 className='cl'>{props.good.name}</h1>
        <h2 className='cl2'>{props.good.praice}</h2>
    </div>
    
  )
}

export default Item