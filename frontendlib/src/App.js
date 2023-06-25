import { Route, Routes } from 'react-router-dom';
import './App.css';
import Addbooks from './Components/Addbooks';
import Viewbooks from './Components/Viewbooks';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/add' element={<Addbooks data={{bookName:"",author:"",language:"",genre:"",bookNum:""}} method='post'/>}/>
        <Route path='/' element={<Viewbooks/>}/>
      </Routes>
    </div>
  );
}

export default App;
