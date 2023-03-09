import React from 'react';
import styled from 'styled-components';


function ProductoCard(props) {
  return (
    <Cards>

    <div className="producto-card">
      <img src={props.imagen} alt={props.nombre} />
      <Card>

      <div className='card'>

      <h2>{props.nombre}</h2>
      <p>{props.descripcion}</p>
      <p>{props.precio}</p>
      </div>
      </Card>

     
    </div>
    </Cards>

  );
}

export default ProductoCard;

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  margin: 10px;
  width: 200px;
  
  img {
    width: 100%;
    height: auto;
  }
  
  h2 {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
  }
  
  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;