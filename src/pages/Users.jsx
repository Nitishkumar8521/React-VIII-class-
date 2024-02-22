import { useState , useEffect } from "react";
import { Navigate } from "react-router-dom";

import LoadingIndicator from "../components/LoadingIndicator";
import ErrorIndicator from "../components/ErrorIndicator";
import UserCard from "../components/UserCard";

function Users(){
    const [loading , setLoading] = useState(false);
    const [err, setErr] = useState(false);
    const [users, setUsers] = useState([]);
    // let IsLoggedIn = true;

    useEffect(()=>{
        setLoading(true);
        fetch('https://reqres.in/api/users')
        .then((res) => res.json())
        .then((res)=> {
            setUsers(res.data);
        })
        .catch(()=>{
            setErr(true);
        })
        .finally(()=>{
            setLoading(false);
        });
    },[]);

    if(loading){
        return <LoadingIndicator />
    }

    if(err){
        return <ErrorIndicator />
    }

    // if(!IsLoggedIn){ //Here i want that only logged user can access the "user" section. 
    //     return <Navigate to="/login" />;//if not logged use try to access the "user" section then redirect to
    //     // the login section.
    // }
    return (
        <div>
            <h1>Users Page</h1>
            {users.map((user)=>(
                <UserCard {...user} key={user.id} /> //{...user}: The spread operator (...) is used here to 
                //pass all properties of the user object as props to the UserCard component. In other words,
                //it spreads the properties of the user object as individual props to UserCard. For example,
                //if user is { id: 1, name: "John", email: "john@example.com" }, then this spread operator 
                //effectively passes id, name, and email as props to the UserCard component.
                
            ))}
        </div>
    )
}

export default Users;