import Footer from "~/components/footer";
import LoginBtn from "~/components/loginBtn";
import Navbar from "~/components/navbar";
import {faq} from "~/faqDetails";
    

export default function Faq(){
    
    return(
        <>
        <div className="h-auto bg-black grid justify-items-center content-baseline gap-5">
            <LoginBtn/>
            <Navbar/>
            <div className="mt-80">
            <div className="text-white text-6xl font-extrabold text-center animate-[reveal_2s_ease-in-out_1]">
                Frequently Asked Questions
            </div>
            <div className="text-white text-4xl font-light text-center animate-[reveal_3s_ease-in-out_1] mt-30" >
                Have questions? We’ve got answers. 
                <br />If you don’t see what you’re looking for,
                <br />feel free to contact us.
            </div>
            <div/> 
                {
                    faq.map(item => (
                        <div className="grid mt-20 ">
                        <details className="text-white grid gap-5 rounded-2xl p-10 w-200 animate-[reveal_2s_ease-in-out_1] timeline" id="card" key={item.id}>   
                            <summary className="text-4xl text-indigo-600 font-bold list-none">{item.question}</summary>                            
                            <p className= " text-2xl text-white">{item.answer}</p>
                            <summary className=" pt-2 font-extralight list-none">{item.category}</summary>

                        </details>
                        </div>
                    ))
                }
            </div>
            <p className="text-white text-4xl font-light text-center animate-[reveal_3s_ease-in-out_1] mt-30 pb-30"> We encourage you to contact us with any questions, concerns or feedback! </p>
        </div>
        <Footer/>
        </>
    )
}