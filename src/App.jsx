import './App.css'
import Allproducts from './Components/Allproducts/Allproducts'
import CartContainer from './Components/CartContainer/CartContainer'
import Header from './Components/Header/Header'

function App() {


  return (
    <>
      
      <Header></Header>
      <div className='mt-5 flex justify-between w-11/12 mx-auto'>
        <Allproducts></Allproducts>
        <CartContainer></CartContainer>
      </div>
    </>
  )
}

export default App
