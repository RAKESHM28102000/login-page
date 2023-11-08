/* eslint-disable react/prop-types */

import { useContext } from "react"
import Profile from "./Profile"
import { DataProvider } from "./ContextData";

const Home = () => {
  const {status}=useContext(DataProvider);
  return (<main>
    <div className="section home">
    {status ?
      (<Profile/>):
      (<h1 className="heading-in-home">Login to see your <span className="span-in-home">profile</span></h1>)
      }
    </div>
    </main>
  )
}

export default Home