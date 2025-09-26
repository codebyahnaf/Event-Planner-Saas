import LoginBtn from "~/components/loginBtn";
import Navbar from "~/components/navbar";

export default function CaseStudies(){
    return(
        <>
        <div className="case-studies">
            <LoginBtn/>
            <Navbar/>
            <div className="text-white text-6xl font-extrabold text-center animate-[reveal_2s_ease-in-out_1]">
                See How Others Plan With Ease
            </div>
            <div className="text-white text-4xl font-light text-center animate-[reveal_3s_ease-in-out_1]" >
                From weddings to corporate conferences, 
                <br />our app helps planners of all kinds create unforgettable experiences
            </div>
            <div className="grid gap-20">
                <div className="w-300 h-200 bg-none rounded-4xl" id="card">
                    <div className="flex justify-center items-center gap-15">
                        <img className=" w-110 h-auto rounded-3xl mt-17" src="wedding.webp" alt="" />
                        <div className="grid gap-10">
                            <p className="text-2xl text-white font-extralight">A couple used our app to coordinate 200 guests, 
                                <br />track RSVPs, and manage vendor payments. 
                                <br />With automated reminders and budget tracking, 
                                <br />they saved over 15 hours of manual work.</p>
                            <p className="text-2xl text-white font-light">
                                <span className="font-bold">Key Results</span>
                                <br />98% RSVP response rate
                                <br />Budget managed under 5% variance
                                <br />Stress-free vendor coordination
                            </p>
                            <p className="text-2xl text-white font-light">
                                <span className="font-bold">Location</span>
                                <br />Brooklyn Bonatic Garden
                            </p>
                        </div>

                    </div>
                </div>
                <div className="w-300 h-200 bg-none rounded-4xl" id="card">
                        <div className="flex justify-center items-center gap-15">
                        <img className=" w-110 h-auto rounded-3xl mt-17" src="conference.jpeg" alt="" />
                        <div className="grid gap-10">
                            <p className="text-2xl text-white font-extralight">An event agency planned a 500-person tech 
                                <br /> conference. Using the app’s collaboration tools, 
                                <br />the team stayed aligned with timelines, 
                                <br />guest check-ins, and speaker schedules..</p>
                            <p className="text-2xl text-white font-light">
                                <span className="font-bold">Key Results</span>
                                <br />30% faster planning cycle
                                <br />Live updates reduced scheduling conflicts
                                <br />Smooth vendor handoff process
                            </p>
                            <p className="text-2xl text-white font-light">
                                <span className="font-bold">Location</span>
                                <br />Brooklyn Museum
                            </p>
                        </div>

                    </div>
                </div>
                <div className="w-300 h-200 bg-none rounded-4xl" id="card">
                    <div className="flex justify-center items-center gap-15">
                        <img className=" w-110 h-auto rounded-3xl mt-17" src="birthday.png" alt="" />
                        <div className="grid gap-10">
                            <p className="text-2xl text-white font-extralight">An event agency planned a 500-person tech 
                                <br /> conference. Using the app’s collaboration tools, 
                                <br />the team stayed aligned with timelines, 
                                <br />guest check-ins, and speaker schedules..</p>
                            <p className="text-2xl text-white font-light">
                                <span className="font-bold">Key Results</span>
                                <br />30% faster planning cycle
                                <br />Live updates reduced scheduling conflicts
                                <br />Smooth vendor handoff process
                            </p>
                            <p className="text-2xl text-white font-light">
                                <span className="font-bold">Location</span>
                                <br />Brooklyn Museum
                            </p>
                        </div>

                    </div>
                </div>
                <div className="w-300 h-200 bg-none rounded-4xl" id="card">

                </div>
            </div>
        </div>
        </>
    )
}