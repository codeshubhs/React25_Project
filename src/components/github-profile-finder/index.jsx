import { useEffect, useState } from "react";
import User from "./User";
import './style.css'
export default function GithubProfileFinder(){

    const[userName, setUserName]=useState("Shubham Yadav");
    const[userdata, setUserdata]=useState(null)
    const[loading, setLoading]=useState(true);
async function fetchGithubUserData(){
    setLoading(true);

    const res= await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json()

    if(data){

        setUserdata(data);
        setLoading(false)
        setUserName('')
    }

}

function handleSubmit(){
    fetchGithubUserData()
}
    useEffect(()=>{
fetchGithubUserData();
    },[])

    if(loading){
        return<h1>Loading data ! please wait</h1>
    }

    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
<input name="search-by-username" type="text"
placeholder="Search Github username.."
value={userName} onChange={(e)=>setUserName(e.target.value)} />

<button onClick={handleSubmit}>Search</button>
            </div>
            {userdata!==null ? <User user={userdata}/>:null}

        </div>
    )
}