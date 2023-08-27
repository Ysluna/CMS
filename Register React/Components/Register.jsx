import React from 'react'

export const Register = () => {
    return (
    <div>
            <h1>¡Bienvenidos! </h1>
        <div>
            <label for="username" class="label-reg"></label>
            <input class="user-reg" id="username" type="text" placeholder="Nombre de Usuario" required></input>

            <label for="email" class="label-reg"></label>
            <input class="user-reg" id="email" type="email" placeholder="Correo Electronico" required></input>
            
            <label for="password" class="label-reg"></label>
            <input class="user-reg" id="password" type="password" placeholder="Contraseña" required></input>

            <label for="password" class="label-reg"></label>
            <input class="user-reg" id="password" type="password" placeholder="Confirmar Contraseña" required></input>
        </div>
        
        <div>
            <label class="checkbox">
            <input type="radio" checked="checked" id="Aceptar terminos y condiciones" required name="radio"> Aceptar <a href="#">  terminos y condiciones.</a></input>
            <span class="checkmark"></span>
            </label>
        </div>

         <div>
         <p class="register-text"> Crear </p>
         <button class="reg-btn"> - </button>
         <button class="reg-deskopt-btn"> Crear </button>
        </div>

        <div>
            <p>
                O continua con...
            </p>
        </div>

        <div class="social-media-btn">
            <button class="google-btn">G</button>
            <button class="facebook-btn">F</button>
        </div>

        <div>
            <p><a href="#">¿Ya tienes una cuenta? </a></p>
        </div>
    </div>)
 }