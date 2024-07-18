import Image from "next/image";
import './rating.css';
export default function Rating({rating}:{rating:any}){
    rating = JSON.parse(rating);
    return <div className="ratings-div">
            <p className="orangeText">Ratings</p><h3>{`${rating.rate}(${rating.count})`}</h3>
    </div>
}