import React from 'react'

export const SecondComponent = () => {
  return (
    <div>
        <label for="username"
        className="label-log">
        </label>
        <input
            class="user-log" 
            id="username"
            name="username"
            type="text"
            placeholder="Nombre o Correo"
            required></input>
    </div>
  )
}
