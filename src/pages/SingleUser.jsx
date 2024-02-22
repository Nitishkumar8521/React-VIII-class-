//When you define dynamic routes with parameters in React Router, such as /users/:id, 
//you can extract the value of id from the URL using useParams.
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorIndicator from "../components/ErrorIndicator";

function SingleUser(){
    const { user_id } = useParams();
    const [loading,setLoading] = useState(false);
    const [err,setErr] = useState(false);
    const [user , setUser] = useState({});

    useEffect(()=>{
        setLoading(true);
        fetch(`https://reqres.in/api/users/${user_id}`)
        .then((res) => res.json())
        .then((res)=> {
            setUser(res.data);
        })
        .catch(()=>{
            setErr(true);
        })
        .finally(()=>{
            setLoading(false);
        });
    },[user_id]);
  
    if(loading){
        return <LoadingIndicator />
    }

    if(err){
        return <ErrorIndicator />
    }
    

    const { first_name, last_name, email, avatar } = user;
    return(
        <div>
            <h1>Single User</h1>
            <div>
                <img src={avatar} />
                <p>
                    Email : {email}
                </p>
                <p>Name : {first_name} {last_name}</p>
            </div>
        </div>
    )
}

export default SingleUser;