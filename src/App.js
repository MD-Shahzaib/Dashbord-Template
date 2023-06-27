import React from 'react';
// Components.
import Sidebar from "./Components/Sidebar";
import Statistics from './Components/Statistics';
import RequestCard from './Components/RequestCard';
import ChatIcon from "./Components/ChatIcon";

function App() {
  return (
    <div className="flex justify-between bg-zinc-200 min-h-screen">
      <Sidebar />
      <section className="flex flex-col mr-6">
        <h3 className="my-5 text-emerald-600 font-semibold text-xl">You currently  have 3 requests</h3>
        <section className="bg-white shadow-xl rounded-md mb-5 py-5">
          <div className='px-5'><Statistics /></div>
          <div className="rounded-full border flex overflow-hidden mx-2">
            <span className="bg-yellow-200 pl-5 text-xs py-2 w-2/6">RECEIVED</span>
            <span className="border-x-2 text-center text-xs py-2 w-2/6">NEGOTIATING</span>
            <span className="text-center text-xs py-2 w-2/6">COMPLETED</span>
          </div>
        </section>
        <section className="bg-white shadow-xl rounded-xl p-5">
          <Statistics />
          <div className="bg-emerald-600 text-white text-xs rounded-full border py-2 pl-5 mb-2 w-8/12	">COMPLETED</div>
          <RequestCard />
        </section>
      </section>
      <ChatIcon />
    </div>
  );
}

export default App;