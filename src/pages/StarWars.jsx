import React from 'react'
import { Navbar } from '../components/Navbar';
import { Link } from 'react-router-dom';

export const StarWars = () => {
  return (
    <>
   <>
      <Navbar />
      <header id='cursostitulo'>
        <h1 id='textocursos'> <strong> STAR WARS EL REGRESO DE SKY WALKER </strong> </h1>
      </header>

      <div class="container text-center">
        <div class="row">
          <div class="col">
            <img src="https://www.themoviedb.org/t/p/original/wju7A8cVGjDv5DmaAYkyQRO8qx2.jpg" class="img-fluid img-func" alt="..."></img>
          </div>
          <div class="col">
            <header className='sipnosis'>
              <h1 className='Overview'> <strong> Overview: </strong></h1>
              <h3 className='Overview'>
La Resistencia superviviente se enfrenta a la Primera Orden una vez más mientras continúa el viaje de Rey, Finn y Poe Dameron. Con el poder y el conocimiento de generaciones a sus espaldas, comienza la batalla final.</h3>
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

  </>
  )
}

export default StarWars;