import React from 'react'
import styled from 'styled-components'
const ItemListContainer = ({greeting}) => {
  return (
    <Itemlist>

        <div className='bienvenida'>{greeting}</div>

    </Itemlist>
  )
}

export default ItemListContainer

const Itemlist = styled.div`
.bienvenida{
    text-align: center;
    font-size: 2rem;
}
`