import { useState, useEffect } from "react";

function Dashboard () {

    const [users, setUsers] = useState(null)

    useEffect(() => {
      const fetchData = async() => {
        const response = await fetch('http://localhost:4005/api')
        const JSON = await response.json()
        setUsers(JSON)
      }
      fetchData()
    }, [])
  
    return ( <div>
        Dashboard
    </div>
    )
}

export default Dashboard