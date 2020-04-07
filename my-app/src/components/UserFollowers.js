import React from 'react';

const UserFollowers = props => {
    //console.log(props.user)
    return (
        <div className='followers'>
            {props.followers.map((friend, index) =>(
                <div key={index}>
                    <img src={friend.avatar_url} alt='follower'/>
                    <h4>{friend.login}</h4>
                </div>
            ))}
        </div>
    )
}

export default UserFollowers;