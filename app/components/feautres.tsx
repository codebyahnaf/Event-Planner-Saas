export default function Features(){
    return(
        <div className="features">
            <div className="text-white text-5xl font-extrabold text-center"> With MeetSync, you'll be able to manage, customize and 
                    <br />take control of all your events through</div>
                    <div className="grid grid-cols-2 gap-4 justify-items-center items-center">                
                        <div className="w-140 h-60 text-white font-bold bg-none p-3 rounded-2xl content-center" id="card">
                            <h3 className="text-3xl">📅 Smart Scheduling</h3>
                            <p className="text-1x1 text-gray-400 font-normal pl-11 pt-4">
                                Suggests optimal event dates and times based on organizer availability.
                                <br />Handles recurring events, reminders, and timezone adjustments for virtual or hybrid events.
                                <br />Offers drag-and-drop calendar functionality to easily adjust schedules.
                                </p></div>
                        <div className="w-140 h-60 text-white font-bold bg-none p-3 rounded-2xl content-center" id="card">
                            <h3 className="text-3xl">🧾 Budget + Expense Tracker</h3> 
                            <p className="text-1x1 text-gray-400 font-normal pl-11 pt-4">
                                Lets you set an event budget and allocate funds across all categories.
                                <br />Provides real-time updates on spending costs versus budget limits.
                                <br />Supports exporting reports for record-keeping or client presentations.</p></div>
                        <div className="w-140 h-60 text-white font-bold bg-none p-3 rounded-2xl content-center" id="card">
                            <h3 className="text-3xl">📣 Email & Text Invites</h3>
                            <p className="text-1x1 text-gray-400 font-normal pl-11 pt-4">
                                Customizable templates for invitations that match the event theme or branding.
                                <br />Automated reminders for RSVPs, event countdowns, and last-minute updates.
                                <br />SMS functionality ensures quick updates for urgent changes.</p></div>
                        <div className="w-140 h-60 text-white font-bold bg-none p-3 rounded-2xl content-center" id="card">
                            <h3 className="text-3xl">📋 Customizable Guest Lists</h3>
                            <p className="text-1x1 text-gray-400 font-normal pl-11 pt-4">
                                Allows organizers to categorize guests.
                                <br />Advanced filtering to manage seating, meal preferences, or special accommodations.
                                <br />Integrates directly with RSVP tracking for seamless headcount updates.</p></div>
                        <div className="w-140 h-60 text-white font-bold bg-none p-3 rounded-2xl content-center" id="card">
                            <h3 className="text-3xl">📊 Live Event Analytics</h3>
                            <p className="text-1x1 text-gray-400 font-normal pl-11 pt-4">
                            Provides real-time insights on guest engagement during the event.
                            <br />Displays live dashboards for organizers to monitor the event’s success.
                            <br />Tracks post-event feedback to measure satisfaction & areas of improvement.</p></div>
                        <div className="w-140 h-60 text-white font-bold bg-none p-3 rounded-2xl content-center" id="card">
                            <h3 className="text-3xl">🎪 Venue Selection</h3>
                            <p className="text-1x1 text-gray-400 font-normal pl-11 pt-4">
                            Offers a curated directory of venues with filters.
                            <br />Displays detailed profiles with photos, reviews, and availability.
                            <br />Allows direct booking or request-for-quote from within the platform.
                            <br />Suggests venues based on event type, expected guest count, and budget.</p></div>
                    </div>
        </div>
    )
}
