import style from  './App.module.css'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { MainContent } from './pages/mainContent/MainContent'
import {Routes, Route} from 'react-router-dom'
import { ProductSingle } from './pages/productSingle/productSingle'
import { Products } from './pages/products/Products'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<MainContent/>}></Route>
        <Route path='/login' element={<MainContent/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/product/:id' element={<ProductSingle/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
