'use client';
import SingleProduct from "@/component/singleProduct";
import { useSupabase } from "@/lib/hooks/useSupabase";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import './page.css'
export default function Page() {
    const { id } = useParams();
    const { singleProduct, getSingleProduct } = useSupabase();
    useEffect(() => {
        getSingleProduct(Number(id));
    }, []);
    return (
        <div>
            <SingleProduct singleProduct={singleProduct}/>
        </div>
    );
}
