import React from 'react';

export default function Homepage() {
  return (
    <>
      <div className="purple-block">
      <div className="content-purple-block">
        <p>¿Estás listo<br />para empezar<br />a crear?</p>
        
      </div>
      </div>
      <h2 className="title">¿Por qué elegirnos?</h2>
      <div className="container-box">
        <div className="box">
          <img src="./diseño.png" alt="" />
          <h2>Diseños Increíbles</h2>
          <div className="container-p">
            <p>Cambia cómo se ve tu blog eligiendo colores, fuentes y bordes diferentes. Incluso puedes tener control total del diseño.</p>
          </div>
        </div>
        <div className="box">
          <img src="./facil-uso.png" alt="" />
          <h2>Fácil de Usar</h2>
          <div className="container-p">
            <p>Organiza tus textos y fotos de manera sencilla. Añade muchas cosas, como fotos profesionales, música, videos, documentos y más.</p>
          </div>
        </div>
        <div className="box">
          <img src="./plantillas.png" alt="" />
          <h2>Plantillas Personalizadas</h2>
          <div className="container-p">
            <p>Usa patrones ya preparados para hacer diseños llamativos en tus páginas y publicaciones.</p>
          </div>
        </div>
      </div>
     
      <div className='section'>
       
        <h2>¿Qué estas esperando?</h2>
     
        <div className="green-block">
        <div className="content-green-block">
          <p>
            Súmate a millones de blogueros
            <br />
            Tanto si quieres compartir tus
            <br />
            conocimientos como dar las últimas
            <br />
            noticias o decir lo que se te pase
            por la cabeza,
            <br />
            en Blogger estás muy bien acompañado.
            <br />
            Regístrate para saber por qué millones de personas
            han escrito aquí sobre lo que les apasiona
          </p>
          <button class="buttom-green"><a href="#">Crea tu blog</a></button>
          
          </div>
        </div>
      </div>
      
      
    </>
  );
}