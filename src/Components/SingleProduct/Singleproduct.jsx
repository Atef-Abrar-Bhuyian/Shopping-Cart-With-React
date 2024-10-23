import { FaShoppingCart } from "react-icons/fa";
import PropTypes from 'prop-types'

const Singleproduct = ({ product,handleCartsContainer }) => {
  const {id,image, price, name, model, sold, description } = product;



  return (
    <div className=" border-2 p-3 md:flex gap-6 rounded-xl mt-8 shadow-lg">
      <img className="rounded-xl md:w-[200px]" src={image} alt="" />
      <div className="space-y-4">
      <h3 className="text-2xl font-bold ">{name}</h3>
      <p>{description} </p>
      <h4><span className="font-semibold">Model</span>: {model}</h4>
      <p><span className="italic font-semibold">Price</span>: {price}$ </p>
        <p><span className="font-semibold">Sold</span>: {sold} </p>
      <button onClick={()=>handleCartsContainer(product,id)} className="flex items-center gap-4 border-2 p-3 justify-center font-bold text-lg rounded-xl">
        Add to cart <FaShoppingCart></FaShoppingCart>
      </button>
      </div>
    </div>
  );
};

Singleproduct.propTypes ={
    product: PropTypes.object,
    handleCartsContainer: PropTypes.func
}

export default Singleproduct;
