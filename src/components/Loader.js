
import React from 'react';
import { FallingLines } from 'react-loader-spinner'


function Loader() {
    return (
        <div className='loader'>
            <h1>Cargando </h1> 
            <FallingLines color="#000" />
        </div>
    )
}

export default Loader