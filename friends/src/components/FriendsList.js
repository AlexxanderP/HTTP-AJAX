import React from 'react';
import Friend from './Friend';
// import Form from 'react';
import AddFriendForm from './AddFriendForm';


const FriendsList = ({friends}) => {
    return (
        
            <div>
                <AddFriendForm />
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