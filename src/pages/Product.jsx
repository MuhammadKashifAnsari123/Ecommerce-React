import React, { useState, useEffect } from 'react';
import Card from '../componets/Card';
import Header from '../componets/Header';

function Product() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data); // Logs the fetched data after state update
      });
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
    <Header/>
     <Card data={data}/>
</>  
);
}

export default Product;
