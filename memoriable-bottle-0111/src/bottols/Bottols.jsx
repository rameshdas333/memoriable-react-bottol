import { useEffect, useState } from "react";
import Bottol from "../bottol/Bottol";
import './Bottols.css'


const Bottols = () => {

    const [bottols,setBottols] = useState([]);
    const [cart,setCart] = useState([])

    useEffect(()=>{
        fetch('bottol.json')
        .then(res => res.json())
        .then(data => setBottols(data))
    },[])


    const handleAddToCart = bottol =>{
        const newCart = [...cart,bottol];
        // console.log(bottol);
        setCart(newCart)
    }
    return (
        <div>
            <h3>Bottols:{bottols.length}</h3>
            <p>Cart:{cart.length}</p>
          <div className="bottols">
          {
                bottols.map((bottol,idx) =>
                 <Bottol
                 bottol={bottol}
                 handleAddToCart={handleAddToCart} 

                 key={idx}>

                 </Bottol>)
         }
          </div>
        </div>
    );
};

export default Bottols;