import PropTypes from 'prop-types'
import { MdCancel } from "react-icons/md";


const Cart = ({cart, handleCartRemove}) => {
    const {id, name, price}= cart;
    return (
        <div className='flex justify-between items-center space-y-6'>
            <h1 className='text-2xl font-bold w-1/2'>{name} </h1>
            <p>{price}$</p>
            <button onClick={()=> handleCartRemove(id,price)}><MdCancel></MdCancel></button>
        </div>
    );
};

Cart.propTypes ={
    carts: PropTypes.array,
    handleCartRemove: PropTypes.func
}
export default Cart;