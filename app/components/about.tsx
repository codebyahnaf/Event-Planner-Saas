export default function About(){
    return(
        <div className="about">
            <div className="text-white text-5xl font-extrabold text-center">
                Where did MeetSync begin its journey? 🚀
            </div>
            <div className="flex items-center gap-10">
                <div id="card" className="content-center w-150 h-150 bg-none rounded-2xl text-2xl text-white font-light italic p-10 text-center -rotate-2">
                    <p>"I grew up in Bed-Stuy, Brooklyn, where block parties and family gatherings were everything. But whenever I tried to plan an event myself, it was a mess—venues double-booked, guest lists scattered, budgets blown, and endless group texts that never kept anyone on the same page. The breaking point was missing my cousin’s birthday because of a scheduling mix-up. That’s when it hit me: there had to be a better way. So I built one. An all-in-one event planner with a smart scheduler, budget tracker, easy invites, and live analytics—everything I once wished I had. What started as my struggle became a tool to help anyone plan with ease."</p>
                    <p className="text-white font-bold text-3xl">— Geoffrey., CEO</p>
                </div>
                <div className="w-120 h-170 bg-indigo-600 rounded-2xl rotate-3">
                    <p className=" text-7xl p-10 text-black font-extrabold">Made with Pride <br />Made in Bed-Stuy <br />Made for New Yorkers
                    <br />🥯 ☕ 🗽</p>
                </div>
            </div>
        </div>
    )
}