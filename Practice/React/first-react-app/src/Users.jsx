import { use } from "react";

function Users({ fetchUsers }) {
    const users = use(fetchUsers);

    return (
        <div>
            <h3>Users: {users.length}</h3>

            {/* prettier-ignore */}
            <ul>
                {
                    users.map(user => <li>{user.name}</li>)
                }
            </ul>
            {/* prettier-ignore */}
            
        </div>
    );
}

export default Users;
