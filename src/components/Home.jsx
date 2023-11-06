/* eslint-disable react/prop-types */

import Profile from "./Profile"

const Home = ({status}) => {
  
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