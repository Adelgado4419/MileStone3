import { UserContext } from "../contexts/CurrentUser"
import { useContext } from 'react'

const ChatHead = () => {

    const {currentUser, setCurrentUser} = useContext(UserContext)

    return (
        <div className="chat-container-head">
            <div className="profile">
            <div className="pfp-container">
            <img src={currentUser.src} alt="img"/>

            </div>
            <h3>{currentUser.username}</h3>
            </div>
            
        </div>
    )
}

export default ChatHead