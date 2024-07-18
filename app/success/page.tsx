'use client'
import { useRouter } from 'next/navigation';
import './success.css';
import Image from 'next/image';
import GIF from '../../public/happy.gif';
export default function SuccessPage(){
    const router = useRouter();
    setInterval(()=>{
        router.push('/');
    }, 5000);
    return (
        <div className='success'>
            <Image className='img' src={GIF} height={1500} width={1700} alt=''>
            </Image>
            <div className='innerDiv'>
            <h1>Thank you for ordering ...</h1>
            </div>
        </div>    
    );
}