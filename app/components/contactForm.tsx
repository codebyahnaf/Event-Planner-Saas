import { useRef, useEffect } from "react";
import Footer from "./footer";

export default function ContactForm(){

    const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.setSelectionRange(0, 0); // move caret to top
      textareaRef.current.focus();
    }
  }, []);
    return(
        <>
            <section className="grid gap-5 w-225 h-200 rounded-3xl place-items-center" id="card">
                <form className="p-10 text-white">
                    <div className="bg-none h-15 rounded-2xl content-center" id="card">
                        <input type="text" className="w-200 text-2xl pl-5 text-white placeholder:text-white outline-none" placeholder="Enter your name" required spellCheck="false" />
                    </div>
                    <br />
                    <div className="bg-none h-15 rounded-2xl content-center" id="card">
                        <input type="text" className="w-200 text-2xl pl-5 text-white placeholder:text-white outline-none" placeholder="Enter your email" required spellCheck="false" />
                    </div>
                    <br />
                    <div className="bg-none h-100 rounded-2xl " id="card">
                        <textarea id="message" className="w-200 h-100 text-2xl pl-5 text-white pt-3 placeholder:text-white outline-none whitespace-pre-wrap break-words" placeholder="Tell us your concerns" required spellCheck="true" />
                    </div>
                </form>
                <button className="content-center text-center bg-[#80808035] text-white text-1xl w-50 h-13 cursor-pointer rounded-lg">Submit</button>
            </section>
        
        </>
    )
}