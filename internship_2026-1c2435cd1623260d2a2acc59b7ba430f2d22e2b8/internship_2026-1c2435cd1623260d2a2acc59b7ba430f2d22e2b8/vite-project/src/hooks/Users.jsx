import { useEffect, useState } from 'react'

const userList = [
  { id: 1, name: 'John', email: 'john@example.com', password: 'john123' },
  { id: 2, name: 'Mary', email: 'mary@example.com', password: 'mary123' },
  { id: 3, name: 'Sam', email: 'sam@example.com', password: 'sam123' },
  { id: 4, name: 'Sara', email: 'sara@example.com', password: 'sara123' },
]

const Users = () => {
  const [users] = useState(userList)

  useEffect(() => {
    console.log(userList)
  }, [])

  return (
    <div>
      <h2>Users: {users.length}</h2>

      <h3>User list</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.password}
          </li>
        ))}
      </ul>

      <h3>User table</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Users
