import { useEffect, useState } from 'react'
import Singleproduct from '../SingleProduct/Singleproduct';
import PropTypes from 'prop-types'

const Allproducts = ({handleCartsContainer}) => {
    const [products, setProducts] = useState([]);

  useEffect( ()=>{
    fetch('fakedata.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  } , [])



  
    return (
        <div className='md:w-2/3'>
            <h1 className='text-2xl'>Our Recommended Products</h1>
            <div className=' gap-10'>
            {
                products.map(p => <Singleproduct handleCartsContainer={handleCartsContainer} key={p.id} product={p}></Singleproduct>)
            }
            </div>
        </div>
    );
};

Allproducts.propTypes ={
    handleCartsContainer: PropTypes.func,
}

export default Allproducts;