'use client';
import SearchResult from '@/component/searchResult';
import { useSupabase } from '@/lib/hooks/useSupabase';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
const Page= ()=>{
    const {query} = useParams();
    const {filterData, getFilteredData} = useSupabase();
    useEffect(()=>{
        getFilteredData(query.toString());
    },[]);
    return (
        <div>
            <SearchResult filterData = {filterData}></SearchResult>
        </div>
    );
}
export default Page;