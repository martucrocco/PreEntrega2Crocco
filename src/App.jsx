
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import Productos from './components/Producto';



function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"Bienvenidxs a YZ CERÁMICA"}/>
      <Productos/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;
