import './App.css'
import React, { lazy, Suspense } from "react";
import {Routes,Route} from "react-router-dom"

const NavigationBar =React.lazy(()=>import('./Components/NavigationBar'))
const NotFound =React.lazy(()=>import('./Components/NotFound'))
const Products =React.lazy(()=>import('./Components/Products'))
const ProductDetails =React.lazy(()=>import('./Components/ProductDetails'))

 function App() {
  return (
    <div>
         <Suspense fallback={<div>Loading...</div>}>
      <NavigationBar/>
   

      <Routes>
     
      <Route path="/products">
      <Route path=""  element={<Products/>} />
      <Route path=":name" element={<ProductDetails/>} />
      </Route>
   
      <Route path="*" element={<NotFound/>}></Route>

      </Routes>
      </Suspense>
    </div>
  )
}

export default App ;