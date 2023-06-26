import chatIcon from "./chat.svg"

const ChatIcon = () => {
    return (
        <>
            <div className="bg-white rounded-full w-14 h-14 flex justify-center items-center absolute bottom-5 right-2 shadow-inner">
                <img src={chatIcon} className="chatIcon w-1/2" alt="chatIcon" />
            </div>
        </>
    )
}

export default ChatIcon;