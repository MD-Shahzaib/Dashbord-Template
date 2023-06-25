import chatIcon from "./Components/chat.svg"

function App() {
  return (
    <>
      <section className="flex">

        {/* SIDEBAR */}
        <section className="box-right-shadow bg-white w-1/4 h-screen">
          <div className="bg-slate-500 h-3/4"></div>
          <div className="bg-slate-400 h-1/4"></div>
        </section>

        {/* Main-Screen */}
        <section className="bg-slate-200 w-3/4 h-screen flex flex-col items-center">

          {/* Request-Heading */}
          <section className="bg-white shadow-xl w-4/5 mt-10 mb-5">
            <h3 className="text-left text-green-700 font-semibold text-xl">You currently  have 3 requests</h3>
          </section>

          {/* Welcome-Box */}
          <section className="bg-white shadow-xl rounded-sm w-4/5 h-1/4 mb-5"></section>

          {/* Request-Box */}
          <section className="bg-white shadow-xl rounded-xl w-4/5 h-1/2 mb-5"></section>

          {/* Chat-Icon */}
          <div className="bg-white rounded-full w-14 h-14 flex justify-center items-center absolute bottom-5 right-2 shadow-inner">
            <img src={chatIcon} className="chatIcon w-1/2" alt="chatIcon" />
          </div>

        </section>

      </section>


    </>
  );
}

export default App;
