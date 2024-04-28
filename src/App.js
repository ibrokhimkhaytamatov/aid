
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home/home';
import About from './pages/about/about';
import MainLayout from './pages/layout/mainlayout';
import Mutaxasislar from './pages/mutaxasislar/page';
import Singlepage from './pages/singlepage/singlepage';
import Contact from './pages/contact/contact';
import AuthLayout from './pages/layout/auth';
import Login from './pages/login/login';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/mutaxasislar' element={<Mutaxasislar/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      {/* <Route path='/singlepage' element={<Singlepage/>}/> */}
      </Route>
      <Route element={<AuthLayout/>}>
        <Route path='/login' element={<Login/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
