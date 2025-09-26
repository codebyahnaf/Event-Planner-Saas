export default function Navbar(){
    return(
        <>
        
        <div className="bg-transparent mt-40 absolute">
            <div className=" flex list-none text-white font-normal text-2xl justify-center gap-10">
                <a href="/"><li className="cursor-pointer"> Home</li></a>
                <a href="pricing"><li className="cursor-pointer"> Pricing</li></a>
                <a href="/caseStudies"><li className="cursor-pointer"> Case Studies</li></a>
                <li className="cursor-pointer"> Contact</li>
                <li className="cursor-pointer"> FAQ</li>
                </div>                
        </div>

        </>
    )
}