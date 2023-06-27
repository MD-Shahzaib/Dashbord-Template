import React from 'react';
// Components.
import Sidebar from "./Components/Sidebar";
import Statistics from './Components/Statistics';
import RequestCard from './Components/RequestCard';
import ChatIcon from "./Components/ChatIcon";

function App() {
  return (
    <>
      <div className="flex justify-between bg-zinc-200">
        <Sidebar />
        {/* Main-Section */}
        <section className="w-3/4 h-screen flex flex-col items-center">
          <h3 className="w-4/5 my-5 text-emerald-600 font-semibold text-xl">You currently  have 3 requests</h3>
          {/* Welcome-Box */}
          <section className="bg-white shadow-xl rounded-sm w-4/5 mb-5 py-5">
            <div className='px-5'>
              <Statistics />
            </div>
            <div className="rounded-full border flex overflow-hidden mx-2">
              <span className="bg-yellow-200 w-2/5 pl-5 text-xs py-2">RECEIVED</span>
              <span className="border-x-2 w-2/5 text-center text-xs py-2">NEGOTIATING</span>
              <span className="w-2/5 text-center text-xs py-2">COMPLETED</span>
            </div>
          </section>
          {/* Request-Box */}
          <section className="bg-white shadow-xl rounded-xl w-4/5 p-5">
            <Statistics />
            <div className="bg-emerald-600 text-white text-xs rounded-full border w-4/5 py-2 pl-5 mb-2">COMPLETED</div>
            {/* Request-Card */}
            <RequestCard />
          </section>
          <ChatIcon />
        </section>
      </div>
    </>
  );
}

export default App;