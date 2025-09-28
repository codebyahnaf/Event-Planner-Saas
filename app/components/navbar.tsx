export default function Navbar(){
    return(
        <>
        
        <div className="bg-transparent mt-40 absolute">
            <div className=" flex list-none text-white font-normal text-2xl justify-center gap-10">
                <a href="/"><li className="cursor-pointer"> Home</li></a>
                <a href="pricing"><li className="cursor-pointer"> Pricing</li></a>
                <a href="/snapshot"><li className="cursor-pointer"> Snapshot</li></a>
                <a href="contact"><li className="cursor-pointer"> Contact</li></a>
                <a href="faq"><li className="cursor-pointer"> FAQ</li></a>
                </div>                
        </div>

        </>
    )
}