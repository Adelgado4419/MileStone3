import chatDisplay from "./chatDisplay"
import chatHead from "./chatHead"
import matchDisplay from "./matchDisplay"

const chatContainer = () => {


    return (
        <div className="chat-container">
            <chatHeader/>
            <div>
                <button className="choice">Matches</button>
                <button className="choice">Chat</button>
            </div>
            <matchDisplay/>
            <chatDisplay/>
        </div>
    )
}

export default chatContainer