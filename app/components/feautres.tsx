export default function Features(){
    return(
        <div className="features">
            <div className="text-white text-5xl font-extrabold text-center"> With MeetSync, you'll be able to manage, customize and 
                    <br />take control of all your events through</div>
            <div className="flex gap-20">
                    <div className="grid gap-10 justify-items-center items-center">                
                        <div className="w-120 h-20 text-3xl text-white font-bold bg-indigo-600 p-3 rounded-2xl text-center content-center">📅 Smart Scheduling</div>
                        <div className="w-120 h-20 text-3xl text-white font-bold bg-indigo-600 p-3 rounded-2xl text-center content-center">🧾 Budget + Expense Tracker</div>
                        <div className="w-120 h-20 text-3xl text-white font-bold bg-indigo-600 p-3 rounded-2xl text-center content-center">📣 Email & SMS Invites</div>
                        <div className="w-120 h-20 text-3xl text-white font-bold bg-indigo-600 p-3 rounded-2xl text-center content-center">📋 Customizable Guest Lists</div>
                        <div className="w-120 h-20 text-3xl text-white font-bold bg-indigo-600 p-3 rounded-2xl text-center content-center">📊 Live Event Analytics</div>
                    </div>
                    <div className="w-120 h-150 bg-yellow-400 rounded-2xl"></div>
            </div>
            <div className="text-white text-5xl font-extrabold text-center"> You get the idea,
               <br />Singup for a <span className="text-indigo-600 underline">free 14-day trial</span></div>
        </div>
    )
}