import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Accueil  from './pages/Accueil'
import  Home  from './pages/Home'
import  Singlepage  from './pages/Singlepage'
import  About  from './pages/About'
import  Error from './pages/Error'
import  ConnectPages  from './pages/Connect'
import Login from './pages/auth/login'
import Signup from './pages/auth/signup'



function App() {
  return (
      <BrowserRouter >
          <Routes>
              <Route path='/' element={<Accueil />} />
              <Route path='/Simplepage/:id' element={<Singlepage />} />
              <Route path='/Home/:id' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/Connect' element={<ConnectPages  />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Signup' element={<Signup />} />
              <Route path='*' element={ <Error />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App;
