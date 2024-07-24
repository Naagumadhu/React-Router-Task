import React from 'react'

function Card({e}) {
  return <>
        <div className="col">
            <div className="card h-100">
                <img src={e.image} className="card-img-top"  alt="Courses" title='All-Courses'/>
                <div className="card-body m-4">
                    <h5 className="card-title">{e.field}</h5>
                    <p className="card-text">{e.content}</p>
                    <a className="fw-bold text-decoration-none">READ MORE<i className="fa-solid fa-angle-right"></i></a>
                </div>
            </div>
        </div>
        
  </>
}

export default Card
