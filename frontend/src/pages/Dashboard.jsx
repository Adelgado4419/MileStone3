import { useState, useEffect } from "react";

function Dashboard () {

    const [users, setUsers] = useState(null)

    useEffect(() => {
      const fetchData = async() => {
        const response = await fetch('/api')
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