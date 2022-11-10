import React from 'react'
import { useParams } from 'react-router-dom';
import Item from '../components/Item';

export const Page2 = () => {
  const {id} = useParams();
  return (
    <div>
      <h2> {id} </h2> 
     <Item/>
    </div>
  )
}
export default Page2;