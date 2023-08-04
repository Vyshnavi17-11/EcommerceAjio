
import './App.css';
import Ajiohome from './Components/Ajiohome';
import { Routes,Route} from 'react-router-dom';
import Men from './Components/Men';
import Womens from './Components/Womens';
import Tshirtwo from './Components/Tshirtwo';
import Cart from './Components/Cart';


function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path='/' element = {<Ajiohome/>}></Route>
      <Route path='/men' element = {<Men/>}></Route>
      <Route path = '/women' element = {<Womens/>}></Route>
      <Route path='/tshirt' element={<Tshirtwo/>}></Route>
      <Route path = '/cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
