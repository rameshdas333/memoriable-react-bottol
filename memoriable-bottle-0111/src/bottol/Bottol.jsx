
const Bottol = ({bottol,handleAddToCart}) => {
    const {name,price,img} = bottol;
    return (
        <div className="bottol">
            <h3>Name:{name}</h3>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={()=>handleAddToCart(bottol)}>Purchase</button>
        </div>
    );
};

export default Bottol;