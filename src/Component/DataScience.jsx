import React from 'react'
import Card from './Card'

function DataScience({info}) {
    const DataScience = info.filter(item => item.field === "Data Science")
    return <>
          <div className='row row-cols-1 row-cols-md-3 g-4 mt-5 mx-3 mb-5'>
              {
                  DataScience.map((e,i) => {
                      return <Card e={e} key={i}/>
                  })
              }
          </div>
  </>
}

export default DataScience
