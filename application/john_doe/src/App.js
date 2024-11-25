import React, { useState, useEffect } from "react";

export default function App() {
  const [user, setUser] = useState([]); 
  const getUser = async () => { 
    const res = await fetch("https://api.github.com/users/github-john-doe"); 
    const json = await res.json(); 
    setUser(json); 
  }; 
  
  useEffect(() => { 
    getUser(); 
  }, []); 
  
  return ( 
    <div className="App"> 
      <header> 
        <h1>Github user</h1> 
      </header> 
      
      <main className="flex">  
          <article key={user.id} className="card"> 
            <h2>{user.name}</h2> 
            <img src={user.avatar_url} alt="{user.login}" /> 
            <p>{user.bio}</p> 
            <p>Abonnés: {user.followers}</p>
            <p>Abonnement: {user.following}</p>
            <p>Créé le:  {user.created_at}</p>
            <p>Modifié le:  {user.updated_at}</p>
            <p>URL repositories: <a href="{user.repos_url}" target="_blank">{user.repos_url}</a></p>
          </article> 
      </main> 
    </div>
   ); 
}
