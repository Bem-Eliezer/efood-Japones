import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCss } from './styles'
import Home from './pages/Home'

import Rodape from './components/Rodape'
import HeaderPg2 from './components/HeaderPg2'
import BannerPg2 from './components/BannerPg2'
import ProductListPg2 from './ProductListPg2'

const Rotas = () => (
  <Routes>
    <Route
      path="/"
      element={
        <>
          <Header />
          <Home />
        </>
      }
    />
    <Route
      path="/headerPg2"
      element={
        <>
          <HeaderPg2 />
          <BannerPg2 />
          <ProductListPg2 />
        </>
      }
    />
  </Routes>
)

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCss />

        <Rotas />
        <Rodape />
      </BrowserRouter>
    </>
  )
}

export default App
