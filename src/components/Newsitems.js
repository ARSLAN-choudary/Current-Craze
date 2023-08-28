import React from 'react'


const Newsitems =(props)=> {

    let {title,description,imgUrl,newsUrl,author,date}=props;
    return (
      <div className='my-3'>
        <div className="card">
            <img src={!imgUrl?"https://c.ndtvimg.com/2023-08/1srd3nl8_chandrayaan-isro_625x300_23_August_23.jpg":imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className='card-text'><small className='text-muted'>by {!author?"Unknown":author}on {new Date(date).toUTCString()}</small></p>
                <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
      </div>
    )
  
}

export default Newsitems
