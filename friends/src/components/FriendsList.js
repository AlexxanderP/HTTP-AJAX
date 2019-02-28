import React from 'react';
import Friend from './Friend';


const FriendsList = ({friends}) => {
    return (
        
            <div>
                <h1> Friends List</h1>
                {friends.map(friend => <Friend
                name={friend.name}
                age={friend.age}
                email={friend.email}
                />)}
            </div>
        
    )
}

export default FriendsList;