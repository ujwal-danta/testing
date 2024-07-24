function UserList({ users }) {
  return (
    <div>
      <div>Showing List of users</div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody data-testid="users">
          {users?.map((user, idx) => {
            return (
              <tr key={idx}>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
