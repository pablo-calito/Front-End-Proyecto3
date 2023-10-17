import React from 'react'
import { Navbar } from '../components/Navbar';
import { Link } from 'react-router-dom';

export const Avengers = () => {
  return (
    <>
      <Navbar />
      <header id='cursostitulo'>
        <h1 id='textocursos'> <strong> AVENGERS INFINITY WAR </strong> </h1>
      </header>

      <div class="container text-center">
        <div class="row">
          <div class="col">
            <img src="https://www.themoviedb.org/t/p/original/1uoU4qPZEcOus0rQf8Tz4JCn3cX.jpg" class="img-fluid img-func" alt="..."></img>
          </div>
          <div class="col">
            <header className='sipnosis'>
              <h1 className='Overview'> <strong> Overview: </strong></h1>
              <h3 className='Overview'>Mientras los Vengadores y sus aliados continúan protegiendo al mundo de amenazas demasiado grandes para que cualquier héroe las pueda manejar, un nuevo peligro ha surgido de las sombras cósmicas: Thanos. Un déspota de la infamia intergaláctica, su objetivo es recolectar las seis Piedras del Infinito, artefactos de poder inimaginable, y usarlos para imponer su retorcida voluntad en toda la realidad. Todo por lo que los Vengadores han luchado ha conducido a este momento: el destino de la Tierra y la existencia misma nunca ha sido más incierto.</h3>
              <h1 className='Overview'><strong> Clasificacion: </strong></h1>
              <h3 className='Overview'>PG-13</h3>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Funciones
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
              <Link to="/seats" className="btn botonesCursos btn-primary">Comprar Boleto</Link>
            </header>
          </div>
        </div>
      </div>

    </>
  )
}

export default Avengers;