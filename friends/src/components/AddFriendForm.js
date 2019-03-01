import React from 'react';
// import { Link } from 'react-router-dom';


class AddFriendForm extends React.Component {
    state = {
        friend: {
            name: '',
            age: '',
            email: ''
        }
    }

    changeHandler = e => {
        console.log(e.target.name);
        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [e.target.name]: e.target.value
            }
        }));
    };

    render() {
        return (
            <div className="friends-form">
                <h3>Add New Friend</h3>
                <form>
                    <input
                        type="text"
                        name="name"
                        onChange={this.changeHandler}
                        placeholder="name"
                        value={this.state.friend.name}
                    />
                    <input
                        type="number"
                        name="age"
                        onChange={this.changeHandler}
                        placeholder="age"
                        value={this.state.friend.age}
                    />
                    <input
                        type="email"
                        name="email"
                        onChange={this.changeHandler}
                        placeholder="email"
                        value={this.state.friend.email}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddFriendForm; 