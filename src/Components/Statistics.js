import React from 'react'

const Statistics = () => {
    return (
        <>
            <div className="flex mb-5">
                <div className="pr-5 flex flex-col">
                    <span className="text-lg text-emerald-600 font-semibold">St Judes Hospital</span>
                    <span className='text-xs text-gray-500'>Sarasota,FL. 33178</span>
                </div>
                <div className="px-5 border-x-2 ">
                    <div className="flex">
                        <div className="flex flex-col">
                            <span className="text-lg text-emerald-600 font-semibold">10</span>
                            <span className='text-xs text-gray-500'>October</span>
                        </div>
                        <span className='my-1 mr-5'>-</span>
                        <div className="flex flex-col">
                            <span className="text-lg text-emerald-600 font-semibold">17</span>
                            <span className='text-xs text-gray-500'>December</span>
                        </div>
                    </div>
                </div>
                <div className="px-5 flex flex-col">
                    <span className="text-lg text-emerald-600 font-semibold">20 Rooms</span>
                    <span className='text-xs text-gray-500'>10 Singles, 10 doubles</span>
                </div>
            </div>
        </>
    )
}

export default Statistics;