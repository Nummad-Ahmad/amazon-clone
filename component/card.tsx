'use client';
import Image from "next/image";
import './card.css';
import Rating from "./shared/rating";
import { useRouter } from "next/navigation";
export default function Card({ product }: { product: any }) {
    const router = useRouter();
    return (
        <div>
            <div className="imageOuterDiv" onClick={()=>{
                router.push(`/product/${product.id}`);
            }}>
                    <div className="imageDiv">
                        <Image alt='image' src={product.image} width={200} height={300} />
                    </div>
                    <h2 className="product-name">{product.title}</h2>
                    <p>{product.description.substring(0, 50) + '...'}</p>
                <Rating rating={product.rating}></Rating>
                <p className="product-name">{`$${product.price}`}</p>
            </div>
        </div>
    );
}