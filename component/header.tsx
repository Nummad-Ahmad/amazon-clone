'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import amazonLogo from '../public/amazon-logo-2.webp';
import './header.css';
import { BiCart } from "react-icons/bi";
import { CgSearch } from "react-icons/cg";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/lib/hooks/redux';
import { getCart } from '@/redux/cartSlice';
import { supabase } from '@/lib/products';

const itemList = ['All', 'Fresh', 'Amazon miniTV', 'Sell', 'Gift Cards', 'Baby', 'Buy again', 'Browsing History',
    'AmazonPay',
    'Gift Ideas',
    'Health, Household & Personal Care'];
export default function Header() {
    const [query, setQuery] = useState<string>("");
    const [user, setUser] = useState<any>(null);
    const router = useRouter();
    const searchHandler = ()=>{
        router.push(`/search/${query}`);
    }
    async function signOut(){
        const {error} = await supabase.auth.signOut();
        router.push('/signin');
    }
    const cart = useAppSelector(getCart);
    useEffect(()=>{
const getUserData = async()=>{
    const {data:{user}} = await supabase.auth.getUser();
    setUser(user);
}
getUserData();
    }, []);
    console.log(user);
    return <>
        <div className='header'>
            <div className='header-innerdiv1'>
                <div className='image-div'>
                    <Link href={'/'}>
                    <Image src={amazonLogo} width={150} height={150} alt="Logo"></Image>
                    </Link>
                </div>
                <div className='input-div'>
                    <input className='input' onChange={(e)=>{
                        setQuery(e.target.value);
                    }} value={query} type='text' placeholder='Search Amazon'></input>
                    <div onClick={searchHandler} className='searchIcon-div'><CgSearch size={"24px"} /></div>
                </div>
                <div className='header-innerdiv2'>
                    <div className='userNameDiv' onClick={()=>{
                        router.push('./signin');
                    }}>
                        <h1 className='user'>{`${user ? user.identities[0].identity_data.preferred_username  : 'Sign in'}`}</h1>
                        <h1 className='account-list'>Accounts & Lists</h1>
                    </div>
                    <div className='return-and-orders'>
                        <h1 className='user'>Returns</h1>
                        <h1 className='account-list'>& Orders</h1>
                    </div>
                    <Link href={'/cart'}>
                        <p className='number-count'>{cart.length}</p>
                        <div className='cart-container'>
                            <div>
                                <BiCart size={'50px'}></BiCart>
                            </div>
                            <h1 className='cart-text'>Cart</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <div className='bottom-header-outer-div'>
            <div>
            {
                itemList.map((link, index) => {
                    return (
                        <Link key={index} className='navbar-links' href={`/${link}`}>{link}</Link>
                    )
                })
            }
            </div>
            {
                user &&
            <div className='signout-div'>
            <h1 onClick={signOut} className='sign-out'>Sign out</h1>
            </div>
}
        </div>

    </>
}