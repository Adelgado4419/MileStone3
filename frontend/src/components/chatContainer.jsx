import ChatHead from './chatHead'
const chatContainer = () => {


    return (
        <div className="chat-container">
            <ChatHead/>
            
            <div>
                <button className="option">Matches</button>
                <button className="option">Chats</button>
            </div>
        </div>
    )
}

export default chatContainer