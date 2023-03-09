import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import ItemCount from './ItemCount'
import ItemList from './ItemList';


const productos = [
  {
    imagen: 'https://i.ibb.co/PzwZBhg/plato-sushi-blanco.png',
    nombre: 'Plato sushi',
    descripcion: 'Color: blanco',
    precio: '$4000'
  },
  {
    imagen: 'https://i.ibb.co/C6DbsxZ/plato-sushi-negro.png',
    nombre: 'Plato sushi',
    descripcion: 'Color: negro',
    precio: '$4000'
  },
  {
    imagen: 'https://i.ibb.co/RjSMtVB/plato.png',
    nombre: 'Platos',
    descripcion: 'Cono Gres. 24-16 cm de diámetro',
    precio: '$10.000'
  }
];



 export const ItemListContainer = ({greeting}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(productos);

      }, 3000);
    });
    getData.then(res => setData(res));
   }, [])
   const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} unidades`);
   }
  return (
    <>
    <Itemlist>

        <div className='bienvenida'>{greeting}</div>

    </Itemlist>
    
      <ItemCount initial={1} stock={10} onAdd={onAdd}/>
      <ItemList data ={data}/>
    </>
  )
}

export default ItemListContainer

const Itemlist = styled.div`
.bienvenida{
    text-align: center;
    font-size: 2rem;
}
`