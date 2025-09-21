import LoginBtn from "./loginBtn";
import Navbar from "./navbar";

export default function Hero(){
    return(
        <div className="hero">
            <LoginBtn/>
            <Navbar/>
            <div className="text-8xl animate-[reveal_2s_ease-in-out_1]">
                🎂 💒 🎉 💍 💐
            </div>
            
            <div className="text-white text-6xl font-extrabold text-center animate-[reveal_2s_ease-in-out_1]">
                Simplify Your Event Planning with <span className="text-indigo-600 underline">MeetSync</span>
            </div>
            <div className="text-white text-4xl font-light text-center animate-[reveal_3s_ease-in-out_1]" >
                A complete event planning software to streamline your events 
                <br />from small meetups to large conferences.
            </div>
            <button className="cursor-pointer"> Get Started Today</button>
            
        </div>
    )
}
