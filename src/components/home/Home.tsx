import { useSelector } from "react-redux"
import { RootState } from "../../store"


function Home() {

  const {user} = useSelector((state:RootState)=>state.auth.data)
  return (
    <div>

      <h1> Welcome!  {user.username} !</h1>
   
    
     </div>
  )
}

export default Home