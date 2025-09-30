import LoginBtn from "./loginBtn";
import Navbar from "./navbar";

export default function Hero(){
    return(
        <div className="hero">
            <LoginBtn/>
            <Navbar/>
            <div className="text-8xl animate-[reveal_2s_ease-in-out_1] mt-70" id="glow">
                🎂 💒 🎉 💍 💐
            </div>
            
            <div className="text-white text-6xl font-extrabold text-center animate-[reveal_4s_ease-in-out_1]">
                Simplify Your Event Planning with <span className="text-indigo-600 underline">MeetSync</span>
            </div>
            <div className="text-white text-4xl font-light text-center animate-[reveal_5s_ease-in-out_1]" >
                A complete event planning software to streamline your events 
                <br />from small meetups to large conferences.
            </div>
            <button className="content-center text-center bg-[#80808035] text-white text-1xl w-50 h-13 cursor-pointer rounded-lg animate-[reveal_3s_ease-in-out_1]"> Get Started Today</button>
            <div></div>
            
        </div>
    )
}
