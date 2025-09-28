import ContactForm from "~/components/contactForm";
import Footer from "~/components/footer";
import LoginBtn from "~/components/loginBtn";
import Navbar from "~/components/navbar";

export default function Contact(){
    return(
        <>
        <div className="contact">
            <LoginBtn/>
            <Navbar/>
            <div className="text-white text-6xl font-extrabold text-center animate-[reveal_2s_ease-in-out_1]">
                Get in Touch with <span className="text-indigo-600 underline">MeetSync</span>
            </div>
            <div className="text-white text-4xl font-light text-center animate-[reveal_3s_ease-in-out_1]" >
                Whether you’re planning your first event 
                <br />or managing hundreds, our team is here to help.
            </div>
            <div>
                <ContactForm/>
            </div>
            <div className="text-white text-4xl font-light text-center animate-[reveal_3s_ease-in-out_1]" >
                Or email us directly <span className="text-indigo-600">support@meetsync.com</span> 
                <br />We'd love to hear from you!
            </div>
        </div>
        <Footer/>
        </>
    )
}