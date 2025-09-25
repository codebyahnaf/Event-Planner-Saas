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
                    <li>Home</li>
                    <li>Pricing</li>
                    <li>Case Studies</li>
                </ul>
            </div>
            <div>
                <ul className="text-2xl text-white font-normal">
                    <li>Contact</li>
                    <li>FAQ</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div>
                <ul className="text-2xl text-white text-right font-normal">
                    <li>Get the latest event planning tips in your inbox</li>
                    <li>Download the app on iOS & Android</li>
                    <li className="text-black">© 2025 MeetSync. All rights reserved</li>
                </ul>
            </div>
        </div>
    )
}