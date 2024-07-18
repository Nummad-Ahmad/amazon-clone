'use client';
import ShoppingCart from "./shoppingCart";
import './cart.css';
import ProceedToBuy from "./proceedToBuy";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { getCart } from "@/redux/cartSlice";
export default function Cart(){
    const cart = useAppSelector(getCart);
    const totalPrice = () => {
        var sum = 0;
        for (var i = 0; i < cart.length; i++) {
            sum += (cart[i].price * cart[i].quantity);
        }
        return sum;
    }
    return (
        <div className="cart">
            <div className="cart-innerDiv">
            <ShoppingCart cart={cart} price={totalPrice()}></ShoppingCart>
            <ProceedToBuy cartLength={cart.length} price={totalPrice()}></ProceedToBuy>
            </div>
        </div>
    );
}