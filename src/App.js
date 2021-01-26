import './App.css';
import Main from './views/Main';
import {Router, Link} from '@reach/router';
import AddProduct from './views/AddProduct';
import AllProducts from './views/AllProducts';
import OneProducts from './views/OneProducts';
import UpdateProducts from './views/UpdateProducts';


function App() {
  return (
    <div className="App">
      <>
        <div className="header">
          <h1 style={{color: 'cyan'}}>Product Manager</h1>
        </div>
        <Router>
          <AddProduct path="/"/>
          <OneProducts path="/product/:_id"/>
          <UpdateProducts path="/product/update/:_id"/>
        </Router>
      </>
    </div>
  );
}

export default App;
