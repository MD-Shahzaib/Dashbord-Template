import React from 'react'

const RequestCard = () => {
    // RequestData
    const requestData = [
        {
            shortDesc: "1.5 miles away from joblocation.",
            badge: true,
            Singles: "$120",
            Doubles: "$145",
            imgCaption: "Holiday Inn",
            img: <svg width="54" height="59" viewBox="0 0 54 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.0189 6.56303C19.7547 9.38375 14.5925 21.9731 12.0566 49.7647M38.3208 3C34.5472 8.04762 26.7283 25.7143 25.6415 56M3 36.8487C8.13208 30.3165 24.917 17.6084 51 19.0336" stroke="#85C371" strokeWidth="5" strokeLinecap="round" />
            </svg>
        },
        {
            shortDesc: "1.5 miles away from joblocation.",
            badge: false,
            Singles: "$120",
            Doubles: "$145",
            imgCaption: "Holiday Inn",
            img: <svg width="54" height="59" viewBox="0 0 54 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.0189 6.56303C19.7547 9.38375 14.5925 21.9731 12.0566 49.7647M38.3208 3C34.5472 8.04762 26.7283 25.7143 25.6415 56M3 36.8487C8.13208 30.3165 24.917 17.6084 51 19.0336" stroke="#85C371" strokeWidth="5" strokeLinecap="round" />
            </svg>
        },
        {
            shortDesc: "1.5 miles away from joblocation.",
            badge: false,
            Singles: "$120",
            Doubles: "$145",
            imgCaption: "Holiday Inn",
            img: <svg width="54" height="59" viewBox="0 0 54 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.0189 6.56303C19.7547 9.38375 14.5925 21.9731 12.0566 49.7647M38.3208 3C34.5472 8.04762 26.7283 25.7143 25.6415 56M3 36.8487C8.13208 30.3165 24.917 17.6084 51 19.0336" stroke="#85C371" strokeWidth="5" strokeLinecap="round" />
            </svg>
        },
    ]

    return (
        <>
            <div className="flex items-center">
                {requestData.map((item, index) => {
                    const { shortDesc, badge, Singles, Doubles, imgCaption, img } = item
                    return (
                        <div className='border bg-gray-100 rounded-md mr-5 mb-2' key={index}>
                            {badge && <button className='bg-red-400 py-2 px-2 text-center text-xs text-white rounded-lg relative -top-3.5 left-28'>Rare Find</button>}
                            <div className={`flex justify-center items-center flex-col ${badge ? "badge-true" : "p-2"}`}>
                                {img}
                                <span className="text-lime-600 italic">{imgCaption}</span>
                            </div>
                            <div className='border shadow-[0px_1px_5px_1px_#b0bec5] rounded-xl p-2'>
                                <p className='text-xs text-gray-600 text-center mb-3 w-40'>{shortDesc}</p>
                                <div className='flex justify-evenly items-center text-gray-600'>
                                    <div className='flex flex-col text-xs'>
                                        <span>Singles: {Singles}</span>
                                        <span>Doubles: {Doubles}</span>
                                    </div>
                                    <button className='bg-emerald-600 py-2 px-2 text-center text-xs text-white rounded-lg'>Book now</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default RequestCard;