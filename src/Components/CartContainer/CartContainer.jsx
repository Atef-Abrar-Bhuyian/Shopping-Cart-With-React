import PropTypes from 'prop-types'
import Cart from '../Cart/Cart';

const CartContainer = ({carts}) => {
    
    return (
        <div className="md:w-1/3 ">
            <h3 className='text-xl'>Total Carts: {carts.length} </h3>

            <Cart></Cart>
        </div>
    );
};

CartContainer.propTypes ={
    carts: PropTypes.array,
}


export default CartContainer;