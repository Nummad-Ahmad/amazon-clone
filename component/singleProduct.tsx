import Image from 'next/image';
import React from 'react';
import './single-product.css';
import Rating from './shared/rating';
import AddToCart from './addToCart';

export default function SingleProduct({ singleProduct }: { singleProduct: any }) {
    return (
        <div className='single-product'>
            <div className='single-product-innerDiv'>
                {
                    singleProduct.map((product: any) => {
                        return (
                            <div className='product-details-outer'>
                            <div className='product-details'>
                                <div>
                                    <Image alt='image' src={product.image} width={250} height={250} />
                                </div>
                                <div className='title-description-div'>
                                    <h1 className='product-title'>{product.title}</h1>
                                    <p>{product.description}</p>
                                    <Rating rating={product.rating}></Rating>
                                    <h1 className='product-price'>{`$${product.price}`}</h1>
                                    <div>
                                        <h1 className='about-text'>About this item</h1>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, pariatur?</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, pariatur?</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, pariatur?</li>
                                    </div>
                                </div>
                            </div>
                            
                <AddToCart product={product}></AddToCart>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}