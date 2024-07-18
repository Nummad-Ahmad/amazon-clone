'use client';
import  {Auth} from '@supabase/auth-ui-react';

import './signin.css';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/lib/products';
export default function Signin(){
    return (
        <div className="signin">
            <div className='innerDiv'>
            <Auth
            supabaseClient={supabase}
            appearance={{theme: ThemeSupa}}
            /> 
            </div>
        </div>
    );
}