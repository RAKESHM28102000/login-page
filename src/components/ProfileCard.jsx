
// eslint-disable-next-line react/prop-types
function ProfileCard({name,email,gender,age,dob,mobileno}) {
  return (<div className="section flex flex-col" style={{border:"2px solid green",padding:"40px"}}>
    
    <h2>Profile</h2>
    <div className='flex flex-col' style={{color:"black"}}>
      <h3>Name:{name}</h3>
      <h3>Email:{email} </h3>
      <h3>gender:{gender}</h3>
      <h3>age:{age} </h3>
      <h3>dob:{dob}</h3>
      <h3>mobile no:{mobileno} </h3>
    
  </div>
  </div>
  )
}

export default ProfileCard;