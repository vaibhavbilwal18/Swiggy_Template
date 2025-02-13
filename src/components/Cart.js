import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
    <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold"> Cart </h1>
        <div className=" w-6/12 m-auto">
          <button className="bg-black text-white rounded-lg p-2"
            onClick={
                handleClearCart
            }>
                Clear Cart</button>
                {cartItems.length == 0 && <h1 className="py-4">Cart is Empty Add Items</h1>}
            <ItemList items={cartItems}/>
        </div>
          </div> 
 )
}
export default Cart;