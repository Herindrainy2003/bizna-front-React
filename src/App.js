import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './screen/Navbar';
import AddSera from './screen/AddSera';
import Hitady from './screen/HitadySera';
import DisplaySera from './screen/DisplaySera';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import DisplaySeraTadiavina from './screen/DisplaySeraTadiavina';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/addSera' Component={AddSera}></Route>
        <Route path='/hitady' Component={Hitady}></Route>
        <Route path='/' exact Component={DisplaySera}></Route>
        <Route path='/misymitady'  Component={DisplaySeraTadiavina}></Route>
      </Routes>
    </Router>
  );
};

export default App;
