import { useSelector } from "react-redux"
import { RootState } from "../../store"


function Home() {

  const {user} = useSelector((state:RootState)=>state.auth.data)
  return (
    <div>

      <h1> Welcome!  {user.username} !</h1>

      <p>This application is dpeloyed on AWS S3</p>
   
    
     </div>
  )
}

export default Home