
import { useState } from "react"

import ProductList from "./Components/ProductList/ProductList"
const App =() => {

  const [products, setProducts] = useState([

    { id:1 , title: 'Book1'},
    { id:2 , title: 'Book2'},
    { id:3 , title: 'Book3'},

  ])

 
    return(
  
      <div id="app" className="container">
        <ProductList />
         </div>
    )
  }

  export default App