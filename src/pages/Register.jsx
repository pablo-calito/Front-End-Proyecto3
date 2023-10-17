import React from 'react'
import './stylesLogin.css';
import { Link } from 'react-router-dom';


export const Register = () => {
  return (
    <>

    <section>
        <div class="form-box">
            <div class="form-value">
                <form action="">
                    <h2>Registrar Usuario</h2>
                    <div class="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="text" autofocus="true" required />
                        <label for="">Nombre</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="text" autofocus="true" required />
                        <label for="">Apellido</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="Email" autofocus="true" required />
                        <label for="">Email</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="text" max="8" required />
                        <label for="">Telefono</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" required/>
                        <label for="">Password</label>
                    </div>
                    <div class="forget">
                        <label for="">
                            <input type="checkbox" />Remember Me 
                            <a href="#">Forget Password</a> 
                        </label>
                    </div>
                    <button className='button-lr'>Registrar</button>  
                               
                    <Link  to="/" ><button className='button-lr'> Regresar </button></Link>
                </form>
            </div>
        </div>
    </section>

    </>
  )
}

export default Register;