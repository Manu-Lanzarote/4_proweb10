import React from 'react'

const Privacidad = (props) => {
    return (
        <div>
            <h1>{props.titulo}</h1>
            {/* propiedad whiteSpace para insertar saltos de línea en el archivo .json con \n */}
            <p style={{ whiteSpace: "pre-line" }}>{props.contenido}</p>
        </div>
    )
}

export default Privacidad;