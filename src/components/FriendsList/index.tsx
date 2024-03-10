import React, { FC } from 'react';

interface IFriendsList {
  arr?: User[] | [];
}
const FriendsList: FC<IFriendsList> = ({arr}) => {
  return (
    <div style={{ width: '100%'}} >
      {arr && arr.map((user, index) => (
        <p key={index}>{user.first_name} {user.last_name}</p>
      ))}
    </div>
  )
}

export default FriendsList;
