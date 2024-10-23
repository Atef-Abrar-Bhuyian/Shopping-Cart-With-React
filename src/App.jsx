import { useState } from 'react'
import './App.css'
import Allproducts from './Components/Allproducts/Allproducts'
import CartContainer from './Components/CartContainer/CartContainer'
import Header from './Components/Header/Header'

function App() {
  const [carts, setCarts] =useState([]);

  const [price, setPrice] = useState(0);

  const handleIncreasePrice = (pr) =>{
    setPrice(price+pr);
  }

  const handleCartsContainer = (product, id) => {
    const isExists = carts.find((p) => p.id == id);

    if(isExists){
      alert("Already Exists");
    }
    else{
      const newCarts = [...carts, product];
    setCarts(newCarts);
    handleIncreasePrice(product.price);
    }

  }

  return (
    <>
      
      <Header price={price} carts={carts} ></Header>
      <div className='mt-5 md:flex justify-between w-11/12 mx-auto'>

        <Allproducts handleCartsContainer={handleCartsContainer} ></Allproducts>

        <CartContainer carts={carts}></CartContainer>
      </div>
    </>
  )
}

export default App
