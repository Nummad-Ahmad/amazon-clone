'use client';
import { useSupabase } from "@/lib/hooks/useSupabase";
import Image from "next/image";
import { useEffect } from "react";
import CategoryWisePeoduct from "./shared/categoryWIseProduct";
import './homepage.css';

export default function HomePage() {
    const { mensProduct, getMenClothing, womensProduct, getWomenClothing } = useSupabase();
    useEffect(() => {
        getMenClothing();
        getWomenClothing();
    }, []);

    return (
        <div>
            <Image className="img" src={'https://m.media-amazon.com/images/I/61VSZgT5LUL._SX3000_.jpg'} width={10000} height={1000} alt=''></Image>
            <div className="productDiv">
                {
                    mensProduct.map((product: any) => {
                        return (
                            <div>
                                <CategoryWisePeoduct product={product}></CategoryWisePeoduct>
                            </div>
                        )
                    })
                }
                {
                    womensProduct.map((product: any) => {
                        return (
                            <div>
                                <CategoryWisePeoduct product={product}></CategoryWisePeoduct>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}