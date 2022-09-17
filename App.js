import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from "react-use-cart";
import Mainh from "./Mainh";
import Cart from "./Cart";

function App() {
  return (
  <>
 
 <CartProvider>
  <Mainh/>
  <Cart/>
  </CartProvider>
  
  
  </>

  );
};

export default App;
