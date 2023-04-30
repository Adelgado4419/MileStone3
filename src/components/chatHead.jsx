import { UserContext } from "../contexts/CurrentUser"
import { useContext } from 'react'

const ChatHead = () => {

    const {currentUser, setCurrentUser} = useContext(UserContext)

    return (
        <div className="chat-container-head">
            <div className="profile">
            <div className="pfp-container">
            <img src="https://images.unsplash.com/photo-1681956959633-06035057d53d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="img"/>

            </div>
            <h3>{currentUser.username}</h3>
            </div>
            
        </div>
    )
}

export default ChatHead