
import Signup from './componets/Signup'
import Login from './componets/Login'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './home/Dashboard'
import Cart from './home/cart/Cart'
import { ShopContextProvider } from './home/ShopContext'




function App() {
  

  return (
    <div>
      <div className="app">
      <ShopContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup/>}></Route>
          <Route path='/login' element={ <Login/>}></Route>
          <Route path='/home' element={<Dashboard/> }></Route>
          <Route path='/home/cart' element={<Cart/> }></Route>
        
        </Routes>
      </BrowserRouter>
      
      </ShopContextProvider>
      </div>
      
      
    
      
     
    </div>
  )
}

export default App
