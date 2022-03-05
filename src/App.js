import './App.css';
import Cart from './components/Cart/Cart';
import Filters from './components/Filter/Filters';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App ">
      <div className='container-fluid'>
        <div className='row mt-2 m-auto'>
          <Filters />
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <Products />

          </div>
          <div className='col-md-1'></div>
          <div className='col-md-3'>
            <Cart />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
