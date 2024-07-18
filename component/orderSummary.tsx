import { loadStripe } from '@stripe/stripe-js';
import './order-summary.css';
import axios from 'axios';
import { supabase } from '@/lib/products';
import { useAppSelector } from '@/lib/hooks/redux';
import { getCart } from '@/redux/cartSlice';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY!);
export default function OrderSummary() {
    const cart = useAppSelector(getCart);
    let totalPrice = 0;
    cart.forEach((element:any) => {
        totalPrice+=element.price * element.quantity;
    });
    const createStripeSession = async()=>{
        const {data:{user}} = await supabase.auth.getUser();
        const stripe = await stripePromise;
        const checkOutSession = await axios.post('/api/checkout-sessions', {
            items: cart,
            email: user?.email,

        });
        const result = await stripe?.redirectToCheckout({
            sessionId: checkOutSession.data.id,
        });
        if(result?.error){
            console.log(result.error.message);
            
        }
    }
    return (
        <div className="order-summary">
            <div>
                <h1 className='heading'>Order Summary</h1>
                <div className='small-outerDiv'>
                    <div className='smallDiv'>
                        <p>Items</p>
                        <p>{totalPrice}</p>
                    </div>
                    <div className='smallDiv'>
                        <p>Delivery</p>
                        <p>20</p>
                    </div>
                    <div className='smallDiv'>
                        <p>Total</p>
                        <p>{totalPrice+=20}</p>
                    </div>
                    <div className='smallDiv'>
                        <p>Promotion applied</p>
                        <p>-10</p>
                    </div>
                    <div className='totalOrderDiv'>
                        <h1 className='totalOrder'>Order total</h1>
                        <h1 className='totalOrder'>${totalPrice-=10}</h1>
                    </div>
                </div>
                <button onClick={createStripeSession} className='btn'>
                    Place your order now
                </button>
            </div>
        </div>
    );
}