import './subtotal.css';
import '../shopping-cart.css';
export default function Subtotal({cartLength, price, alignLeft=false}: {cartLength:number, price:any, alignLeft: boolean}){
    return (
        <h1 className={ alignLeft ? 'leftText' : 'total-price'}>{`Subtotal ${'('+cartLength+' items)'} : `}<span>{price}</span></h1>
    );
}