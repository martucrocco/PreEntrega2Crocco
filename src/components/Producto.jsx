import React from 'react';
import ProductoCard from './ProductoCard';

function Productos() {
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

  return (
    <div className="productos">
      {productos.map((producto, index) => (
        <ProductoCard
          key={index}
          imagen={producto.imagen}
          nombre={producto.nombre}
          descripcion={producto.descripcion}
          precio={producto.precio}
        />
      ))}
    </div>
  );
}

export default Productos;