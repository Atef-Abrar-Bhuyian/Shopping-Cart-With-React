import PropTypes from 'prop-types';

const CartContainer = () => {
    
    return (
        <div className="md:w-1/3 ">
            <h1>Total Carts: {} </h1>
        </div>
    );
};

CartContainer.propTypes ={
    carts: PropTypes.array
}

export default CartContainer;