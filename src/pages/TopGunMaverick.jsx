import React from 'react'
import { Navbar } from '../components/Navbar';
import { Link } from 'react-router-dom';

export const TopGunMaverick = () => {
  return (
    <>
       <>
      <Navbar />
      <header id='cursostitulo'>
        <h1 id='textocursos'> <strong> TOP UN MAVERICK </strong> </h1>
      </header>

      <div class="container text-center">
        <div class="row">
          <div class="col">
            <img src="https://www.themoviedb.org/t/p/original/62HCnUTziyWcpDaBO2i1DX17ljH.jpg" class="img-fluid img-func" alt="..."></img>
          </div>
          <div class="col">
            <header className='sipnosis'>
              <h1 className='Overview'> <strong> Overview: </strong></h1>
              <h3 className='Overview'> Después de más de treinta años de servicio como uno de los mejores aviadores de la Marina, y de esquivar el ascenso de rango que lo castigaría, Pete “Maverick” Mitchell se encuentra entrenando a un destacamento de graduados de TOP GUN para una misión especializada como ninguna persona viva. piloto ha visto jamás. </h3>
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


export default TopGunMaverick;