import React from 'react'

export default function Nav() {
  return (
    <div>
        <h2> ¿Qué quieres diseñar hoy? </h2>
    
        <div className='container-fluid'>
            <input 
                class="control" 
                type="text" 
                name="Search" 
                id="search" 
                placeholder="Search">
            </input>
        </div>
                
        <div className='categoria'>

            <div className='icon-categoria'>
                <i class="fa-solid fa-desktop"></i>
    
                <i class="fa-solid fa-mobile"></i>
    
                <i class="fa-regular fa-heart"></i>
    
                <i class="fa-solid fa-pen"></i>
            </div>

            <div className='text-categoria'>

                <p> Web </p>

                <p> Mobile </p>

                <p> Posts </p>
                        
                <p> Desde 0 </p>

                </div>

            </div>
    </div>
  )
}
