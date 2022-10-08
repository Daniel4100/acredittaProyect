import React from 'react'

const NearEarthObjects = ({item}) => {
  return (
    // donde se desplegan todos los objetos cercanos a la tierra
    <div className='item-child'>
        <span>{item.name}</span>
        <span>{item.close_approach_data[0].close_approach_date_full}</span>
        <span>{item.estimated_diameter.meters.estimated_diameter_min.toFixed(2)}</span>
        <span>{item.estimated_diameter.meters.estimated_diameter_max.toFixed(2)}</span>
    </div>
  )
}

export default NearEarthObjects