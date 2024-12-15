import React from 'react';
import { useParams } from 'react-router-dom';

function TodoItem() {
  const params = useParams(); // returns an object of all the params
  console.log(params);
  
  return (
    <p>Looking at item details for {params.itemName}...</p>
  )
}

export default TodoItem;