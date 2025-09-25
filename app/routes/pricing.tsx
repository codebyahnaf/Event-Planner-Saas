import Footer from "~/components/footer";
import LoginBtn from "~/components/loginBtn";
import Navbar from "~/components/navbar";
import PricingItem from "~/components/pricingItem";
import pricingDetails from "~/pricing-details";

export default function Pricing(){
    
    return(
        <>
        
        <div className="pricing-pg">
            <LoginBtn/>
            <Navbar/>
            <div className= " text-indigo-600 text-6xl font-extrabold text-center animate-[reveal_2s_ease-in-out_1]">
                    Flexible Plans That Grow With Your Events
            </div>
            <div className="text-white text-4xl font-light text-center animate-[reveal_3s_ease-in-out_1]">
                    Get started with our free plan, or unlock advanced tools for guest management, 
                    <br />budgeting, and collaboration with Pro and Business options.
                    <br /> Choose the plan that makes event planning stress-free.
            </div>
            <div className="flex justify-center items-center gap-4">
                <div className="w-120 h-200 bg-none rounded-2xl grid content-baseline place-items-center pt-20 animate-[reveal_2s_ease-in_1]" id="card">
                    {pricingDetails
                    .filter(item=> item.id===1)
                    .map(item => (
                        <PricingItem
                             key={item.id} name={item.name} price={item.price} tagline={item.tagline} features={item.features}                        />
                    ))}
                    <button className="translate-y-15 text-center bg-indigo-600 text-white text-1xl w-50 h-13 cursor-pointer rounded-lg ">Start for free</button>
                </div>
                <div className="w-120 h-200 bg-none rounded-2xl grid content-baseline place-items-center pt-20 animate-[reveal_3s_ease-in_1]" id="card">
                    {pricingDetails
                    .filter(item=> item.id===2)
                    .map(item => (
                        <PricingItem
                             key={item.id} name={item.name} price={item.price} tagline={item.tagline} features={item.features}                        />
                    ))}
                    <button className="translate-y-15 text-center bg-indigo-600 text-white text-1xl w-50 h-13 cursor-pointer rounded-lg">Upgrade</button>

                </div>
                <div className="w-120 h-200 bg-none rounded-2xl grid content-baseline place-items-center pt-20 animate-[reveal_4s_ease-in_1]" id="card">
                    {pricingDetails
                    .filter(item=> item.id===3)
                    .map(item => (
                        <PricingItem
                             key={item.id} name={item.name} price={item.price} tagline={item.tagline} features={item.features}                        />
                    ))}
                    <button className="translate-y-15 text-center bg-indigo-600 text-white text-1xl w-50 h-13 cursor-pointer rounded-lg ">Contact Sales</button>

                </div>
            </div>
            <div className="text-white text-4xl font-light text-center animate-[reveal_1s_ease-in-out_1] timeline">
                <p>Trusted by 1000+ planners</p>
                <p>No credit card required</p>
                <p>Upgrade, downgrade, or cancel anytime</p>
                <p className="text-6xl font-extrabold translate-y-40">Start planning your events now</p>
            </div>
        </div>
        <Footer/>
        </>
    )
}