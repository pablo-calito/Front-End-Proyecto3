import React from 'react'
import { Navbar } from '../components/Navbar';
import { Link } from 'react-router-dom';
import  Seat  from '../assets/Seats.png';

export const Seats = () => {
  return (
    <>
         <Navbar />
      <header id='cursostitulo'>
        <h1 id='textocursos'> <strong> RESERVAR ASIENTO </strong> </h1>
      </header>

      <div class="container text-center">
        <div class="row">
          <div class="col">
            <img src={ Seat } class="img-fluid IMG-SEAT img-func" alt="..."></img>
          </div>
          <div class="col">
            <header className='sipnosisSeats'>
        
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Filas
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">A</a></li>
                  <li><a class="dropdown-item" href="#">B</a></li>
                  <li><a class="dropdown-item" href="#">C</a></li>
                  <li><a class="dropdown-item" href="#">D</a></li>
                  <li><a class="dropdown-item" href="#">E</a></li>
                </ul>
              </div>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Asiento
                </button>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">1</a></li>
                <li><a class="dropdown-item" href="#">2</a></li>
                <li><a class="dropdown-item" href="#">3</a></li>
                <li><a class="dropdown-item" href="#">4</a></li>
                <li><a class="dropdown-item" href="#">5</a></li>
                <li><a class="dropdown-item" href="#">6</a></li>
                <li><a class="dropdown-item" href="#">7</a></li>
                <li><a class="dropdown-item" href="#">8</a></li>
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

export default Seats;