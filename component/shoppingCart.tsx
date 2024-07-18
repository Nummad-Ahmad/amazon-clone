'use client';
import Image from 'next/image';
import './shopping-cart.css';
import { useAppDispatch } from '@/lib/hooks/redux';
import { clearCart, decrementQuantity, incrementQuantity, removeFromCart } from '@/redux/cartSlice';
import Subtotal from './shared/Subtotal';
export default function ShoppingCart({cart, price}:{cart:any, price:any}) {
    const dispatch = useAppDispatch();

    return (
        <div className='shopping-cartDiv'>
            <div className='price-titleText'>
                <h1 className='shopping-cartTitle'>Shopping Cart</h1>
                <h1 className='shopping-cartTitle'>Price</h1>
            </div>
            <div className='borderDiv'>
                {
                    (cart.length != 0) ?
                        cart.map((product: any) => {
                            return (
                                <div className='outer-image-descriptionDiv'>
                                    <div className='image-descriptionDiv'>
                                        <div className='imageDiv'>
                                            <Image src={product.image} alt='' width={200} height={200}></Image>
                                        </div>
                                        <div className='temp'>
                                            <h1 className='product-name'>{product.title}</h1>
                                            <p className='greenText'>In Stock</p>
                                            <h1 onClick={() => {
                                                dispatch(removeFromCart(product.id));

                                            }} className='removeText'>REMOVE</h1>
                                            <div className='quantityDiv'>
                                                <div className='pointer' onClick={() => {
                                                    if (product.quantity > 1)
                                                        dispatch(decrementQuantity(product));
                                                }}>-</div>
                                                <div>{product.quantity}</div>
                                                {/* <div>{value}</div> */}
                                                <div className='pointer' onClick={() => {
                                                    dispatch(incrementQuantity(product));
                                                }}>+</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className='price'>{`$${product.price}`}</h1>
                                        <p className='line-on-price'>${product.price * 1.5}</p>
                                    </div>
                                </div>
                            )
                        }) : <h1>Cart is empty</h1>
                }
            </div>
            <div className='btn-and-total'>
            <h1 onClick={()=>{
                dispatch(clearCart());
            }} className='remove-all'>REMOVE ALL</h1>
            <Subtotal alignLeft={false} cartLength={cart.length} price={price.toFixed(2)}></Subtotal>
            </div>
        </div>
    );
}