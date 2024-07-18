'use client';
import Image from "next/image";
import Rating from "./rating";
import './category-wise-product.css';
import { useAppDispatch } from "@/lib/hooks/redux";
import { addToCart } from "@/redux/cartSlice";
import { useRouter } from "next/navigation";
export default function CategoryWisePeoduct({ product }: { product: any }) {
    const dispatch = useAppDispatch();
    const router = useRouter();
    return (
        <div className="category-wise-product">
            <h1 className="product-category">{product.category}</h1>
            <div className="imageDiv">
                <Image src={product.image} width={150} height={150} alt={''}></Image>
            </div>
            <div>
                <h1>
                    {product.title}
                </h1>
                <Rating rating={product.rating}></Rating>
            </div>
            <div className="buttonDiv">
                <button onClick={() => {
                    dispatch(addToCart(product))
                    router.push('/cart');
                }} className="btn">Add to cart</button>
            </div>
        </div>
    );
}