import { FaSearch,FaCartPlus   } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Header = ({carts, price}) => {
    return (
        <div className='w-11/12 mx-auto flex items-center justify-between mt-4'>
            <h1 className='text-3xl font-bold'>Logo</h1>
            <div className='flex gap-6 items-center text-xl'>
                <p><FaSearch></FaSearch></p>
                <p className='flex items-center gap-2'><FaCartPlus></FaCartPlus>{carts.length}</p>
                <p>${price}</p>
            </div>
        </div>
    );
};


Header.propTypes ={
    carts: PropTypes.array,
    price: PropTypes.number
}

export default Header;