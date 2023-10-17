import React from 'react'
import { NavLink } from 'react-router-dom'


export const Navbar = () => {
    return (
        <>
            <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div class="container-fluid">
                    <NavLink to="/" class="navbar-brand"><img id='imagenNavbar' src="https://img.freepik.com/iconos-gratis/camara-video_318-704827.jpg" alt="" /></NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink to="/" className="nav-link active" aria-current="page">Inicio</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/auth">Login</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>


        </>
    )
}
