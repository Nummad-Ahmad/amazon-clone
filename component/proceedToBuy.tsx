import { useRouter } from 'next/navigation';
import './proceedToBuy.css';
import Subtotal from './shared/Subtotal';
export default function ProceedToBuy({ cartLength, price }: { cartLength: any, price: any }) {
    const router = useRouter();
    return (
        <div className="proceed-to-buy">
            <div className='innerDiv'>
                <p>Your order is eligible for FREE delivery. Choose FREE delivery option at checkout</p>

                <Subtotal alignLeft={true} cartLength={cartLength} price={price.toFixed(2)}></Subtotal>
                <button onClick={()=>{
                    router.push('/checkout');
                }} className='proceed-btn'>Proceed to Buy</button>
            </div>
        </div>
    );
}