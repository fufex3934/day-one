
type User ={
  id:number,
  name:string,
  username:string,
}

async function fetchUsers():Promise<User[]>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();

  
}
const StaticSiteGeneration = async () => {
  const users = await fetchUsers();
  return (
    <main>
      <h1>Static Users</h1>
      <ul>
        {
          users.map((user:User)=>(
            <li key={user.id}>{user.name} {user.username}</li>
          ))
        }
      </ul>
    </main>
  )
}

export default StaticSiteGeneration