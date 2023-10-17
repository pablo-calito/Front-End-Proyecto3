// Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import App from '../App';
import { Avengers } from '../pages/Avengers' // Importa tu componente de Avengers.js
import { StarWars } from '../pages/StarWars'
import { HarryPotter } from '../pages/HarryPotter'
import { TopGunMaverick } from '../pages/TopGunMaverick'
import {Auth} from '../pages/auth'
import Seats from '../pages/Seats';
import Register from '../pages/Register';


export const AppRoutes = () => {
    return (
        <Routes>

            <Route path='/'>
                 <Route path='' element={<App />} />
                <Route path='avengers' element={<Avengers />} />
                <Route path='starwars' element={<StarWars />} />
                <Route path='harrypotter' element={<HarryPotter />} />
                <Route path='topgun' element={<TopGunMaverick />} />
                <Route path='seats' element={<Seats />} />
                <Route path='auth' element={<Auth />} />
                <Route path='register' element={<Register />} />
            </Route>
             

        </Routes>
    );
};
