import chatIcon from "./chat.svg"

const ChatIcon = () => {
    return (
        <>
            <div>
                <div className="flex justify-center items-center shadow-inner- bg-white rounded-full w-14 h-14 fixed bottom-2 right-2">
                    <img src={chatIcon} className="chatIcon w-1/2" alt="chatIcon" />
                </div>
            </div>
        </>
    )
}

export default ChatIcon;