'use client';
import Image from 'next/image';
import amazonLogo from '../public/amazon-logo.png';
import { FaLock } from "react-icons/fa6";
import './checkout.css';
import { useAppSelector } from '@/lib/hooks/redux';
import { getCart } from '@/redux/cartSlice';
import OrderSummary from './orderSummary';

export default function Checkout() {
    const cart = useAppSelector(getCart);
    return (
        <div className="checkout">
            <div className='innerDiv'>
                <div>
                    <Image src={amazonLogo} height={150} width={150} alt=''></Image>
                </div>
                <div>
                    <h1 className='checkoutText'>Checkout</h1>
                </div>
                <div className='lockDiv'>
                    <FaLock size={'30px'}></FaLock>
                </div>
            </div>
            <div className='bottomDiv'>
                <div className='bottom-innerDiv'>
                    <h1 className='delivery-address'>1. Delivery Address</h1>
                    <p className='description-paragraph'>ABC <br />
                        Laptop<br />
                        Mobile phone <br />
                        Tab<br />
                    </p>
                </div>
            </div>
            <div className='detailsDiv'>
            {/* <div className='bottomDiv'> */}
            <div>
                <div className='bottom-innerDiv'>
                    <h1 className='delivery-address'>2. Items and Delivery</h1>
                </div>
                {
                    cart.map((product: any) => {
                        return (
                            <div>
                                <div className='single-product'>
                                    <Image src={product.image} height={100} width={100} alt=''></Image>
                                    <div className='title-and-price'>
                                        <h1 className='title'>{product.title}</h1>
                                        <p className='price'>{`$${product.price}`}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <OrderSummary></OrderSummary>
            </div>
        </div>
    );
}