import { useState } from 'react'
import './styles.css';
import { Link, NavLink } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { Navbar } from './components/Navbar';


function App() {


  return (
    <>
      <div>

        {/* navbar */}

        <Navbar />

        {/* slider */}

        <div id='slider'>
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="5000">
                <img src="https://www.themoviedb.org/t/p/original/sRyhy6ajoIRGGUVAxLKtsiNbMs8.jpg" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5 className='tituloSlider'>Avengers Infinity War</h5>
                  <p>Los superhéroes se alían para vencer al poderoso Thanos, el peor enemigo al que se han enfrentado. Si Thanos logra reunir las seis gemas del infinito: poder, tiempo, alma, realidad, mente y espacio, nadie podrá detenerlo.</p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="5000">
                <img src="https://www.themoviedb.org/t/p/original/n5A7brJCjejceZmHyujwUTVgQNC.jpg" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5 className='tituloSlider'>Harry Potter Las Reliquias de la Muerte parte 2</h5>
                  <p>Un enfrentamiento entre el bien y el mal espera cuando el joven Harry (Daniel Radcliffe), Ron (Rupert Grint) y Hermione (Emma Watson) se preparan para una última batalla en contra de Lord Voldemort (Ralph Fiennes). Harry se ha convertido en un joven fuerte que tiene la misión de librar al mundo del mal.</p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="5000">
                <img src="https://www.themoviedb.org/t/p/original/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5 className='tituloSlider'>Star Wars El regreso de Sky Walker</h5>
                  <p>Finn y Poe guían a la Resistencia para detener los planes de la Primera Orden para formar un nuevo imperio, mientras Rey anticipa un enfrentamiento inevitable con Kylo Ren.</p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="5000">
                <img src="https://www.themoviedb.org/t/p/original/bgeJFo8mQEsJLeMC7WjQMOQHNi6.jpg" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5 className='tituloSlider'>Top Gun Maverick</h5>
                  <p>Maverick, quien lleva 30 años de servicio, es ahora instructor de pilotos militares. Una última misión, un sacrificio final, obliga a este maestro de los cielos a enfrentar las heridas abiertas del pasado y sus temores más profundos.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>


        <header id='cursostitulo'>
          <h1 id='textocursos'> <strong> CARTELERA </strong> </h1>
        </header>

        {/* cursos */}

        <div id='cursos'>
          <div class="container text-center">
            <div class="row">
              <div class="col">

                <div className="card shadow-card" style={{ width: "18rem" }}>
                  <img src="https://www.themoviedb.org/t/p/original/ypX47SBSThTbB40AIJ22eOUCpjU.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Avengers <br /> Infinity War</h5>
                    <Link to="/avengers" className="btn botonesCursos btn-primary">Funciones</Link>
                  </div>
                </div>

              </div>

              <div class="col">
                <div className="card shadow-card" style={{ width: "18rem" }}>
                  <img src="https://www.themoviedb.org/t/p/original/wO6WTcBdcaRsTHoyhnbd5aKd38G.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Harry Potter Las Reliquias de la Muerte Parte 2</h5>
                    <Link to="/harrypotter" className="btn botonesCursos btn-primary">Funciones</Link>
                  </div>
                </div>


              </div>

              <div class="col">

                <div className="card shadow-card" style={{ width: "18rem" }}>
                  <img src="https://www.themoviedb.org/t/p/original/wju7A8cVGjDv5DmaAYkyQRO8qx2.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Star Wars el Regreso de <br /> Sky Walker</h5>
                    <Link to="/starwars" className="btn botonesCursos btn-primary">Funciones</Link>
                  </div>
                </div>

              </div>

              <div class="col">

                <div className="card shadow-card" style={{ width: "18rem" }}>
                  <img id='imgcard' src="https://www.themoviedb.org/t/p/original/62HCnUTziyWcpDaBO2i1DX17ljH.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Top Gun <br /> Maverick</h5>
                    <Link to="/topgun" className="btn botonesCursos btn-primary">Funciones</Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>



      </div>
    </>
  )
}

export default App
