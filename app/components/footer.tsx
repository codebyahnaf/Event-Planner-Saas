export default function Footer(){
    return(
        <div className="flex justify-evenly items-center h-70 bg-indigo-600">
            <div>
                <ul className="text-2xl text-white font-normal">
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                </ul>
            </div>
            <div>
                <ul className="text-2xl text-white font-normal">
                <a href="/"><li className=" cursor-pointer "> Home</li></a>
                <a href="pricing"><li className="cursor-pointer"> Pricing</li></a>
                <a href="/snapshot"><li className="cursor-pointer"> Snapshot</li></a>
                </ul>
            </div>
            <div>
                <ul className="text-2xl text-white font-normal">
                <a href="contact"><li className="cursor-pointer"> Contact</li></a>
                <a href="faq"><li className="cursor-pointer"> FAQ</li></a>
                    <li>Careers</li>
                </ul>
            </div>
            <div>
                <ul className="text-2xl text-white text-right font-normal">
                    <li className="text-black">support@meetsync.com</li>
                    <li>Get the latest event planning tips in your inbox</li>
                    <li>Download the app on iOS & Android</li>
                    <li className="text-black">© 2025 MeetSync. All rights reserved</li>
                </ul>
            </div>
        </div>
    )
}