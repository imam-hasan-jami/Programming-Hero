import { use } from "react";
import Friend from "./Friend";

function Friends({ friendsPromise }) {
    const friends = use(friendsPromise);

    return (
        <div>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend} />)
            }
        </div>
    );
}

export default Friends;
