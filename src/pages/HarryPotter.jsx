import React from 'react'
import { Navbar } from '../components/Navbar';
import { Link } from 'react-router-dom';

export const HarryPotter = () => {
  return (
    <>
    <>
      <Navbar />
      <header id='cursostitulo'>
        <h1 id='textocursos'> <strong> HARRY POTTER Y LAS RELIQUIAS DE LA MUERTE 2</strong> </h1>
      </header>

      <div class="container text-center">
        <div class="row">
          <div class="col">
            <img src="https://www.themoviedb.org/t/p/original/wO6WTcBdcaRsTHoyhnbd5aKd38G.jpg" class="img-fluid img-func" alt="..."></img>
          </div>
          <div class="col">
            <header className='sipnosis'>
              <h1 className='Overview'> <strong> Overview: </strong></h1>
              <h3 className='Overview'>Harry, Ron y Hermione continúan su búsqueda para vencer al malvado Voldemort de una vez por todas. Justo cuando las cosas empiezan a parecer desesperadas para los jóvenes magos, Harry descubre un trío de objetos mágicos que le dotan de poderes que rivalizan con las formidables habilidades de Voldemort.</h3>
              <h1 className='Overview'><strong> Clasificacion: </strong></h1>
              <h3 className='Overview'>B-12</h3>
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

export default HarryPotter;