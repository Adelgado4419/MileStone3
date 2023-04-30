import ChatHead from './chatHead'

import ChatDisplay from './chatDisplay'

const chatContainer = () => {


    return (
        <div className="chat-container">
            <ChatHead/>
            
            <div className='match-chat-container'>
                <button className="option">Matches</button>
                <button className="option">Chats</button>
            </div>
            <matchDisplay/>
            <ChatDisplay/>
        </div>
    )
}

export default chatContainer