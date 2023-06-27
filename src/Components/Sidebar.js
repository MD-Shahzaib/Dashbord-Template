import React from 'react'

const Sidebar = () => {
    return (
        <section className="shadow-[1px_0px_5px_0px_#607d8b63] py-4 pl-3 pr-5 bg-white flex flex-col justify-between">
            <div className="">
                <h2 className='text-xl font-bold italic'>LODGN</h2>
                <ul className='text-base font-semibold mt-8'>
                    <li className='pb-3 pr-5 mt-2 border-b-2 text-emerald-600'>Current requests</li>
                    <li className='pb-3 mt-2 border-b-2'>Ongoing stays</li>
                    <li className='pb-3 mt-2 border-b-2'>Previous stays</li>
                    <li className='pb-3 mt-2 border-b-2'>Reports</li>
                </ul>
            </div>
            <div className="flex flex-col justify-center items-center pb-10">
                <button className='bg-emerald-600 py-3 ml-2 text-sm font-medium text-white rounded-md w-full mb-1'>Log-Out</button>
                <p className='text-xs'>Help-Desk:</p>
                <p className='text-xs'>786-874 9988</p>
            </div>
        </section>
    )
}

export default Sidebar;