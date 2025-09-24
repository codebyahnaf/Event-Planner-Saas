import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";


export default function PricingItem({name, price, tagline, features}){

    return(
        <ol className="grid gap-10 place-items-center p-10">
            <div className="text-4xl text-indigo-600 font-bold text-center">{name} </div>
            <div className="text-6xl text-white font-extrabold">{price} </div>
            <div className="text-3xl text-white font-normal text-center">{tagline} </div>
            <div className="text-2xl text-gray-600 font-light text-center">
                {features.map((features: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined,index: Key | null | undefined) =>(
                    <li key={index}>{features}</li>
                ))} </div>
        </ol>
    )
}


