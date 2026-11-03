// function UserCard({users}) {
//     return (
//         <>
//       {users.map((user) => (
//         <div className="user-card" key={user.id}>
//           <h2>{user.name}</h2>
//           <p>{user.email}</p>
//           <p>{user.role}</p>
//         </div>
//       ))}
//     </>
//     )
// }

function UserCard({name="Louis Tan", age = 0, isActive= false}) {
    return (
      <div>
        <h2>Hello, my name is {name}</h2>
        <p>My age is {age}</p>
        <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
      </div>
    )
}

export default UserCard;