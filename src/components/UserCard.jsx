import { Link } from "react-router-dom";
function UserCard({id, email , first_name, last_name, avatar}){
    return (<div className="user-card">
        <img src={avatar}  alt={first_name} />
        <p>Name : {first_name} {last_name}</p>
        <Link to={`/Users/${id}`}>Click here view more</Link>
    </div>)
}

export default UserCard;