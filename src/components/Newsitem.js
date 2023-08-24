import React from 'react'

function Newsitem(props) {
    let {crdtitle,description,imgUrl,url}=props;
  return (
    <div className='my-3'>
      <div className="card" style={{width: "18rem;"}}>
  <img src={imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.crdtitle}</h5>
    <p className="card-text">{props.description}.</p>
    <a href={url} target='_Blank' className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
    </div>
  )
}

export default Newsitem