import React from 'react';

export default function Dashboard() {
  return (
    <>
        <header>
            <a href="index.html" className="logo">
                <img className="header-img" src="./logo.png" alt="cms logo" />
            </a>
            <nav className="nav-content">
                <ul className="nav">
                <li><a href="#">INICIAR SESIÓN</a></li>
                <li className="buttom-blog"><a href="#">Crea tu blog</a></li>
                </ul>
            </nav>
        </header>
        <div className='Contenedor-padre'>
            <div className='Sidebar'>
                <h1> Iniciar sesión </h1>
                <h2> Probar versión pro </h2>
                <p> Inicio </p>
                <p> Proyectos </p>
                <p> Plantillas </p>
                <p> Trabajo en equipo </p>
                <p> Papelera </p>
            </div>
        
     
            <div className='Nav'>
                <div className='navegationBar'>
                    <h2> ¿Qué quieres diseñar hoy? </h2>
                    <div className='Container-fluid'>
                        <input 
                            class="control" 
                            type="text" 
                            name="Search" 
                            id="search" 
                            placeholder="Search">
                        </input>
                    </div>
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
            <div className='Plantillas'>
                <h2> Plantillas </h2> 
                <h2> Herramientas </h2> 
            </div>
        </div> 
    </>
    
  );
}