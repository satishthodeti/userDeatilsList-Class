import './index.css'

const UserProfile = props => {
  const {userDetails, key} = props
  const {imgUrl, name, role} = userDetails
  console.log(key)
  return (
    <li className="user-card-container">
      <img src={imgUrl} className="avatar" alt="avatar" />
      <div className="user-details-container">
        <h className="user-name">{name}</h>
        <p className="user-designation">{role}</p>
      </div>
    </li>
  )
}
export default UserProfile
