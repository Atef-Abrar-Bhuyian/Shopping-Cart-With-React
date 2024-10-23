import { FaSearch,FaCartPlus   } from 'react-icons/fa';

const Header = () => {
    return (
        <div className='w-11/12 mx-auto flex items-center justify-between mt-4'>
            <h1 className='text-3xl font-bold'>Logo</h1>
            <div className='flex gap-6 items-center text-xl'>
                <FaSearch></FaSearch>
                <FaCartPlus></FaCartPlus>
                <p>$500</p>
            </div>
        </div>
    );
};

export default Header;