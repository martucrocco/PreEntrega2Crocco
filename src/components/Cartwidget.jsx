import React from 'react'
import { Badge } from 'react-bootstrap'
import styled from 'styled-components';
const Cartwidget = () => {
  return (
    <>
    <Badges>

      <i class="bi bi-cart4"><Badge pill bg="danger" className='notificacion'>
        5
      </Badge></i>
    </Badges>
    
    </>
  )
}

export default Cartwidget


const Badges = styled.i`
i{
    position: relative;
    display: inline-block;
}
.notificacion{
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 0.8rem;
}
`;

