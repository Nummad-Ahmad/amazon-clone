import Image from 'next/image';
import imageURL from '../public/prime-logo.png';
import './addToCart.css';
import { useAppDispatch } from '@/lib/hooks/redux';
import { addToCart } from '@/redux/cartSlice';
import { useRouter } from 'next/navigation';

export default function AddToCart({ product }: { product: any }) {
    const dispatch = useAppDispatch();
    const router = useRouter();
    return (
        <div className="add-to-cartDiv">
            {/* <div className='imageDiv'>
                <Image src={imageURL} alt='Prime' height={40} width={40}></Image>
            </div> */}
            <h1><span className='blueText'>FREE delivery</span> Thursday <span className='blueText'>Details</span></h1>
            <h1 className='secondH1'>Or fastest delivery Tomorrow. <span className='blueText'>Details</span></h1>
            <p className='blueText'>Deliver to ABC - XYZ 123</p>

            <button className='add-to-cart-button' onClick={() => {
                dispatch(addToCart(product));
                router.push('/cart');
            }}>Add to Cart</button>
            <button className='buy-now-button' onClick={() => { }}>Buy Now</button>
        </div>
    );
}