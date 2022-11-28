
import React from 'react';
import { InfinitySpin } from 'react-loader-spinner'


function Loader() {
    return (
        <div className='loader'>
            <h1>Cargando </h1>
            <InfinitySpin color="#000" />
        </div>
    )
}

export default Loader