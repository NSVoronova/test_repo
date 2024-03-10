import { useState } from "react";
import { GroupAvatar, GroupContainer, GroupContent } from "../../styles/style";
import img from '../../assets/icons8-замок-96.png';
import FriendsList from "../FriendsList";

const ClosedImage = () => {
  return (
    <img src={img} style={{width: '20px', marginTop: '7px'}}/>
  )
}
const GroupCard: React.FC<Group> = ({ closed, members_count, name, avatar_color, friends }) => {
  const [showFriends, setShowFriends] = useState(false);

  const handleShowFriends = () => {
    setShowFriends(!showFriends);
  };

  return (
    <GroupContainer>
      <GroupContent>
        {avatar_color && <GroupAvatar $color={avatar_color} />}
        <h2>{name}</h2>
        <p>
          {closed && <ClosedImage></ClosedImage>}
        </p>
      </GroupContent>
      <GroupContent>
        <p>
           {members_count} участников
        </p>
        <button onClick={handleShowFriends}>
          {friends?.length || 0} друзей
        </button>
      </GroupContent>
      {showFriends && friends && <FriendsList arr={friends} />}
    </GroupContainer>
  );
};

export default GroupCard;
