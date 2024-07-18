'use client';
import { useState } from "react"
import { supabase } from "../products";

export const useSupabase = ()=>{
    const [products, setProducts] = useState<any>([]);
    const [filterData, setFilterData] = useState<any>([]);
    const [singleProduct, setSingleProduct] = useState<any>([]);
    const [mensProduct, setmensProduct] = useState<any>([]);
    const [womensProduct, setwomensProduct] = useState<any>([]);
    
    const getDateFromSupabase = async ()=>{
    let {data, error} = await supabase.from('product').select('*');
    if(data){
        setProducts(data);
    }
    if(error){
        console.log(error);
    }
}
const getFilteredData = async (query: string)=>{
    let {data, error} = await supabase.from('product').select('*').or(`title.ilike.%${query}%, description.ilike.%${query}%, category.ilike.%${query}%`);
    if(data){
        setFilterData(data);
    }
    if(error){
        console.log(error);
    }
}

    const getSingleProduct = async(id: number)=>{
        let  {data, error} = await supabase.from('product').select('*').eq('id', id);
        if(data){
            setSingleProduct(data);
        }
        if(error){
            console.log(error);
        }
    }

    const getMenClothing = async () => {
        let {data, error} = await supabase.from('product').select('*').ilike('category', `men's clothing`);
        if(data){
            setmensProduct(data);
        }else{
            console.log(error);
        }
    }

    const getWomenClothing = async () => {
        let {data, error} = await supabase.from('product').select('*').ilike('category', `women's clothing`);
        if(data){
            setwomensProduct(data);
        }else{
            console.log(error);
        }
    }

    return {products, getDateFromSupabase, filterData, getFilteredData, singleProduct, getSingleProduct, mensProduct, getMenClothing, womensProduct, getWomenClothing};
}