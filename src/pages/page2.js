import React from 'react'
import { useParams } from 'react-router-dom';
import Item from '../components/Item';
import { GetProductname } from '../components/Servicios/Productos';
import { useEffect, useState } from 'react';

export const Page2 = () => {
 
  
  return (
    <div>
      <h2> </h2> 
     <Item/>
    </div>
  )
}
export default Page2;