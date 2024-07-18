import React from 'react';
import './search-result.css';
import Card from './card';
export default function SearchResult({ filterData }: { filterData: any }) {

    return <div className='serach-result'>
        <div>
            <div>
                <h1 className='result-text'>Results {filterData.length}</h1>
                <p>Price and other details may vary based on product size
                    and color.</p>
            </div>
            <div className='card-container-div'>
                {
                    filterData.map((product: any)=>{
                        return (
                            <div key={product.id}>
                            <Card product={product}></Card>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
}