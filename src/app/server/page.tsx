type User ={
  id:number,
  name:string,
  username:string,
}
const ServerComponent = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user:User)=>(
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ServerComponent