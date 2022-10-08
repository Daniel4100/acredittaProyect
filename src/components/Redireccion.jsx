import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Redireccion = () => {
    const navigate = useNavigate()
    useEffect(() => {
      navigate('/g')
    }, [])
    
  return (
    <div>Redireccion</div>
  )
}

export default Redireccion