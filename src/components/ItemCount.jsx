import React, {useEffect, useState} from 'react'
import styled from 'styled-components'


export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt (initial));

    const decremento = () => {
        setCount(count - 1);
    }

    const incremento = () => {
        setCount(count + 1);
    }

    useEffect ( () => {
        setCount(parseInt(initial));
    }, [initial])

  return (
    <Contador>
    <div className='counter'>
        <button disabled={count <= 1} onClick={decremento}>-</button>
        <span>{count}</span>
        <button disabled={count >= stock} onClick={incremento}>+</button>
        <div>
            <button disabled={stock <= 0} onClick={() => onAdd(count)} >Agregar al carrito</button>
        </div>
    </div>

    </Contador>
  )
}

export default ItemCount

const Contador = styled.div`
.counter{
    width: fit-content;
    background-color: #333;
    color: white;
    margin: auto;
    padding: 0.5rem;
    text-align: center;
}
`