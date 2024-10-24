import PropTypes from 'prop-types'
import Cart from '../Cart/Cart';

const CartContainer = ({carts, handleCartRemove}) => {
    return (
        <div className="md:w-1/3 mt-16 border-2 p-4 rounded-xl ml-4">
            <h3 className='text-xl mb-4'><span className='font-bold'>Total Carts</span>: {carts.length} </h3>

            {
                carts.map((cart, idx) => <Cart key={idx} handleCartRemove={handleCartRemove} cart={cart}></Cart>)
            }
        </div>
    );
};

CartContainer.propTypes ={
    carts: PropTypes.array,
    handleCartRemove: PropTypes.func
}


export default CartContainer;